import { User } from '../entities/User.entity';
import { IUser, IUserData } from '../types/user.type';
declare class UserService {
    getToken(id: number): string;
    loginUser(loggingInUser: IUser, databaseUser: IUserData): Promise<string>;
    logoutUser(id: any): Promise<void>;
    createUser(credential: IUser): Promise<{
        newUser: User;
        token: string;
    }>;
    resetPassword(user: IUserData): Promise<{
        temporaryPassword: string;
        email: string;
    }>;
    changePassword(user: IUserData, currentPassword: string, updatePassword: string): Promise<{
        email: string;
    }>;
}
export declare const userService: UserService;
export {};
