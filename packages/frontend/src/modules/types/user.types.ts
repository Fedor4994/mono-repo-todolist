import { AxiosResponse } from 'axios';
import { UseMutationResult } from 'react-query';
import { IForgot } from './forgot.types';

export interface IUser {
  email: string;
  password: string;
  token?: string;
}

export type IForgotPasswordUser = {
  email: string;
  isSend: boolean;
};
export interface IChangePasswordUser {
  email: string;
  currentPassword: string;
  updatePassword: string;
}

export interface UserForgotComponentPropsFunc {
  user: IForgotPasswordUser;
  success?: boolean;
  message?: string;
}

export type TLoginMutationResult = UseMutationResult<
  AxiosResponse<IUser, IUser>,
  unknown,
  IUser,
  unknown
>;

export type TSignupMutationResult = UseMutationResult<
  AxiosResponse<IUser, IUser>,
  unknown,
  IUser,
  unknown
>;

export type TForgotMutationResult = UseMutationResult<
  AxiosResponse<IForgotPasswordUser>,
  unknown,
  IForgot,
  unknown
>;

export type TChangeMutationResult = UseMutationResult<
  AxiosResponse<IForgotPasswordUser>,
  unknown,
  IChangePasswordUser,
  unknown
>;
