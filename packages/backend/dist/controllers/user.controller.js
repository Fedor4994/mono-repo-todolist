"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const email_service_1 = require("../services/email.service");
const user_service_1 = require("../services/user.service");
class UserController {
    async loginUser(req, res) {
        const databaseUser = req.user;
        const loggingInUser = req.body;
        if (loggingInUser && databaseUser) {
            const token = await user_service_1.userService.loginUser(loggingInUser, databaseUser);
            res.status(200).json({
                email: loggingInUser.email,
                token
            });
        }
    }
    async logoutUser(req, res) {
        const { user } = req;
        if (user && user.id) {
            await user_service_1.userService.logoutUser(user.id);
            res.status(204).json({
                message: 'success'
            });
        }
    }
    async signupUser(req, res) {
        const credential = req.body;
        const { newUser, token } = await user_service_1.userService.createUser(credential);
        const { email } = newUser;
        res.status(201).json({ email, token });
    }
    async currentUser(req, res) {
        const { user } = req;
        if (user) {
            const { email, token } = user;
            res.status(200).json({ email, token });
        }
    }
    async resetPassword(req, res) {
        const { user } = req;
        if (user) {
            const { temporaryPassword, email } = await user_service_1.userService.resetPassword(user);
            const isSend = await email_service_1.emailService.sendEmailPassword(email, temporaryPassword);
            res.status(201).json({ email, isSend });
        }
    }
    async changePassword(req, res) {
        const { user } = req;
        const { currentPassword, updatePassword } = req.body;
        if (user) {
            const { email } = await user_service_1.userService.changePassword(user, currentPassword, updatePassword);
            const isSend = await email_service_1.emailService.sendEmailPassword(email, updatePassword);
            res.status(201).json({ email, isSend });
        }
    }
}
exports.userController = new UserController();
//# sourceMappingURL=user.controller.js.map