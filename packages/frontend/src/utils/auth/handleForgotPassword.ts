import { toast } from 'react-toastify';
import { IForgot } from '../../modules/types/forgot.types';
import { TForgotMutationResult } from '../../modules/types/user.types';

export const handlerForgotPasswordUser = async (
  values: IForgot,
  forgotPassword: TForgotMutationResult,
  setIsActive: (isActive: boolean) => void
) => {
  const response = await forgotPassword.mutateAsync(values);
  if (response.data) {
    toast.success('Your new password has been sent to your email!');
    setIsActive(false);
  }
};
