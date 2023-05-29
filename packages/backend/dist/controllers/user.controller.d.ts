import { Response, Request } from 'express';
declare class UserController {
    loginUser(req: Request, res: Response): Promise<void>;
    logoutUser(req: Request, res: Response): Promise<void>;
    signupUser(req: Request, res: Response): Promise<void>;
    currentUser(req: Request, res: Response): Promise<void>;
    resetPassword(req: Request, res: Response): Promise<void>;
    changePassword(req: Request, res: Response): Promise<void>;
}
export declare const userController: UserController;
export {};
