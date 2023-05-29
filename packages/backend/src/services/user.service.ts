import { getRepository } from 'typeorm';
import jwt from 'jsonwebtoken';
import randomstring from 'randomstring';
import { User } from '../entities/User.entity';
import { IUser, IUserData } from '../types/user.type';
import { isValidPassword } from '../helpers/valid-password';
import { hashPassword } from '../helpers/hash-password';
import { RequestError } from '../helpers/RequestError';

class UserService {
  getToken(id: number) {
    const payload = { id };
    const { JWT_SECRET } = process.env;
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
    return token;
  }

  async loginUser(loggingInUser: IUser, databaseUser: IUserData) {
    const isValid = await isValidPassword(loggingInUser.password, databaseUser.password);
    if (!isValid) {
      throw RequestError(400, 'Password wrong');
    }
    const token = this.getToken(databaseUser.id);
    const userRepository = getRepository(User);
    await userRepository.update({ id: databaseUser.id }, { token });
    return token;
  }

  async logoutUser(id: any) {
    const userRepository = getRepository(User);
    await userRepository.update({ id }, { token: '' });
  }

  async createUser(credential: IUser) {
    const userRepository = getRepository(User);
    const user = userRepository.create(credential);

    const newUser = await userRepository.save(user);

    const token = this.getToken(newUser.id);
    await userRepository.update({ id: newUser.id }, { token });

    return { newUser, token };
  }

  async resetPassword(user: IUserData) {
    const temporaryPassword = randomstring.generate({ length: 8, charset: 'alphanumeric' });
    const userRepository = getRepository(User);
    const passwordHash = await hashPassword(temporaryPassword);
    await userRepository.update({ id: user.id }, { password: passwordHash });
    return { temporaryPassword, email: user.email };
  }

  async changePassword(user: IUserData, currentPassword: string, updatePassword: string) {
    const isValid = await isValidPassword(currentPassword, user.password);
    if (!isValid) {
      throw RequestError(400, 'Password wrong');
    }
    const passwordHash = await hashPassword(updatePassword);
    const userRepository = getRepository(User);
    await userRepository.update({ id: user.id }, { password: passwordHash });
    return { email: user.email };
  }
}

export const userService = new UserService();
