import { AxiosResponse } from 'axios/index';
import { IUser, IChangePasswordUser, IForgotPasswordUser } from './user.types';
import { IForgot } from './forgot.types';

export type TUserLogin = (user: IUser) => Promise<AxiosResponse<IUser>>;
export type TSignupUser = (user: IUser) => Promise<AxiosResponse<IUser>>;
export type TChangePassword = (
  data: IChangePasswordUser
) => Promise<AxiosResponse<IForgotPasswordUser>>;
export type TForgotPassword = (credential: IForgot) => Promise<AxiosResponse<IForgotPasswordUser>>;
