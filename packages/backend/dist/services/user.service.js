"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
const typeorm_1 = require("typeorm");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const randomstring_1 = __importDefault(require("randomstring"));
const User_entity_1 = require("../entities/User.entity");
const valid_password_1 = require("../helpers/valid-password");
const hash_password_1 = require("../helpers/hash-password");
const RequestError_1 = require("../helpers/RequestError");
class UserService {
    getToken(id) {
        const payload = { id };
        const { JWT_SECRET } = process.env;
        const token = jsonwebtoken_1.default.sign(payload, JWT_SECRET, { expiresIn: '1h' });
        return token;
    }
    async loginUser(loggingInUser, databaseUser) {
        const isValid = await (0, valid_password_1.isValidPassword)(loggingInUser.password, databaseUser.password);
        if (!isValid) {
            throw (0, RequestError_1.RequestError)(400, 'Password wrong');
        }
        const token = this.getToken(databaseUser.id);
        const userRepository = (0, typeorm_1.getRepository)(User_entity_1.User);
        await userRepository.update({ id: databaseUser.id }, { token });
        return token;
    }
    async logoutUser(id) {
        const userRepository = (0, typeorm_1.getRepository)(User_entity_1.User);
        await userRepository.update({ id }, { token: '' });
    }
    async createUser(credential) {
        const userRepository = (0, typeorm_1.getRepository)(User_entity_1.User);
        const user = userRepository.create(credential);
        const newUser = await userRepository.save(user);
        const token = this.getToken(newUser.id);
        await userRepository.update({ id: newUser.id }, { token });
        return { newUser, token };
    }
    async resetPassword(user) {
        const temporaryPassword = randomstring_1.default.generate({ length: 8, charset: 'alphanumeric' });
        const userRepository = (0, typeorm_1.getRepository)(User_entity_1.User);
        const passwordHash = await (0, hash_password_1.hashPassword)(temporaryPassword);
        await userRepository.update({ id: user.id }, { password: passwordHash });
        return { temporaryPassword, email: user.email };
    }
    async changePassword(user, currentPassword, updatePassword) {
        const isValid = await (0, valid_password_1.isValidPassword)(currentPassword, user.password);
        if (!isValid) {
            throw (0, RequestError_1.RequestError)(400, 'Password wrong');
        }
        const passwordHash = await (0, hash_password_1.hashPassword)(updatePassword);
        const userRepository = (0, typeorm_1.getRepository)(User_entity_1.User);
        await userRepository.update({ id: user.id }, { password: passwordHash });
        return { email: user.email };
    }
}
exports.userService = new UserService();
//# sourceMappingURL=user.service.js.map