import { NavigateFunction } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';
import { userService } from '../../modules/services/user.service';
import { TSetValueFunction } from '../../modules/types/localstorage.types';
import { IUser, TLoginMutationResult } from '../../modules/types/user.types';
import { ROUTER_KEYS } from '../../modules/common/consts/app-keys.const';

export const handleLogin = async (
  values: IUser,
  loginUser: TLoginMutationResult,
  setValue: TSetValueFunction,
  navigate: NavigateFunction
) => {
  try {
    const response = await loginUser.mutateAsync(values);
    const { token } = response.data;
    if (token) {
      userService.setToken(token);
      setValue(token);
      navigate(ROUTER_KEYS.ROOT);
    }
  } catch (error) {
    if (error instanceof AxiosError) {
      toast.error(error.response?.data.message);
    }
  }
};
