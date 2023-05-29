import { NavigateFunction } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';
import { IProfile } from '../../modules/types/profile.types';
import { TChangeMutationResult } from '../../modules/types/user.types';
import { TRemoveValue } from '../../modules/types/localstorage.types';
import { ROUTER_KEYS } from '../../modules/common/consts/app-keys.const';

export const handlerChangePasswordUser = async (
  values: IProfile,
  changePassword: TChangeMutationResult,
  removeValue: TRemoveValue,
  navigate: NavigateFunction
) => {
  try {
    const response = await changePassword.mutateAsync(values);
    if (response.data.isSend) {
      toast.success('Your password has been successfully changed');
      removeValue();
      navigate(ROUTER_KEYS.AUTH);
    }
  } catch (error) {
    if (error instanceof AxiosError) {
      toast.error(error.response?.data.message);
    }
  }
};
