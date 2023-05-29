"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const passport_1 = __importDefault(require("passport"));
const passport_jwt_1 = require("passport-jwt");
const typeorm_1 = require("typeorm");
const User_entity_1 = require("../entities/User.entity");
const { JWT_SECRET } = process.env;
const options = {
    jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: JWT_SECRET
};
const verifyToken = async (payload, done) => {
    try {
        const { id } = payload;
        const userRepository = (0, typeorm_1.getRepository)(User_entity_1.User);
        const user = await userRepository.findOneBy({ id });
        if (!user) {
            return done(null, false);
        }
        done(null, user);
    }
    catch (error) {
        done(error);
    }
};
passport_1.default.use(new passport_jwt_1.Strategy(options, verifyToken));
const authMiddleware = (req, res, next) => {
    passport_1.default.authenticate('jwt', { session: false }, (error, user) => {
        if (error || !user) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        req.user = user;
        next();
    })(req, res, next);
};
exports.authMiddleware = authMiddleware;
//# sourceMappingURL=auth.middleware.js.map