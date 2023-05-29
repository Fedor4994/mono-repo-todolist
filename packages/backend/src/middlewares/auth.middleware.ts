import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt, VerifiedCallback } from 'passport-jwt';
import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../entities/User.entity';
import { IUserData } from '../types/user.type';

const { JWT_SECRET } = process.env;

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: JWT_SECRET
};

const verifyToken = async (payload: { id: number }, done: VerifiedCallback) => {
  try {
    const { id } = payload;

    const userRepository = getRepository(User);
    const user = await userRepository.findOneBy({ id });

    if (!user) {
      return done(null, false);
    }

    done(null, user);
  } catch (error) {
    done(error);
  }
};

passport.use(new JwtStrategy(options, verifyToken));

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate('jwt', { session: false }, (error: Error, user: IUserData | false) => {
    if (error || !user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    req.user = user as IUserData;

    next();
  })(req, res, next);
};
