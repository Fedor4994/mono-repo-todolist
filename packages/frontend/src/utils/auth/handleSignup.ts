import { NavigateFunction } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';
import { TSetValueFunction } from '../../modules/types/localstorage.types';
import { IUser, TSignupMutationResult } from '../../modules/types/user.types';
import { userService } from '../../modules/services/user.service';
import { ROUTER_KEYS } from '../../modules/common/consts/app-keys.const';

export const handlerSignup = async (
  values: IUser,
  signupUser: TSignupMutationResult,
  setValue: TSetValueFunction,
  navigate: NavigateFunction
) => {
  try {
    const response = await signupUser.mutateAsync(values);
    const { token } = response.data;
    if (token) {
      userService.setToken(token);
      setValue(token);
      navigate(ROUTER_KEYS.ROOT);
    }
  } catch (error) {
    if (error instanceof AxiosError) {
      toast.error('User with same email already exists');
    }
  }
};
