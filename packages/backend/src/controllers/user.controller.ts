import { Response, Request } from 'express';
import { emailService } from '../services/email.service';
import { userService } from '../services/user.service';
import { IUserData } from '../types/user.type';

class UserController {
  async loginUser(req: Request, res: Response) {
    const databaseUser = req.user;
    const loggingInUser = req.body;
    if (loggingInUser && databaseUser) {
      const token = await userService.loginUser(loggingInUser, <IUserData>databaseUser);
      res.status(200).json({
        email: loggingInUser.email,
        token
      });
    }
  }

  async logoutUser(req: Request, res: Response) {
    const { user } = req;
    if (user && (user as IUserData).id) {
      await userService.logoutUser((user as IUserData).id);
      res.status(204).json({
        message: 'success'
      });
    }
  }

  async signupUser(req: Request, res: Response) {
    const credential = req.body;
    const { newUser, token } = await userService.createUser(credential);
    const { email } = newUser;

    res.status(201).json({ email, token });
  }

  async currentUser(req: Request, res: Response) {
    const { user } = req;
    if (user) {
      const { email, token } = user as IUserData;
      res.status(200).json({ email, token });
    }
  }

  async resetPassword(req: Request, res: Response) {
    const { user } = req;
    if (user) {
      const { temporaryPassword, email } = await userService.resetPassword(<IUserData>user);
      const isSend = await emailService.sendEmailPassword(email, temporaryPassword);
      res.status(201).json({ email, isSend });
    }
  }

  async changePassword(req: Request, res: Response) {
    const { user } = req;
    const { currentPassword, updatePassword } = req.body;
    if (user) {
      const { email } = await userService.changePassword(
        <IUserData>user,
        currentPassword,
        updatePassword
      );
      const isSend = await emailService.sendEmailPassword(email, updatePassword);
      res.status(201).json({ email, isSend });
    }
  }
}
export const userController = new UserController();
