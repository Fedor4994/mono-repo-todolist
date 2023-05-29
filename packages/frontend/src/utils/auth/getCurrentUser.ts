import { userService } from '../../modules/services/user.service';
import {
  ILocalStorageResult,
  TRemoveValue,
  TSetValueFunction
} from '../../modules/types/localstorage.types';

export const currentUser = async (
  result: Partial<ILocalStorageResult>,
  setValue: TSetValueFunction,
  removeValue: TRemoveValue
) => {
  const token = result.value;
  if (token) {
    try {
      userService.setToken(token);
      const response = await userService.getCurrent();
      if (response.data.token === token) {
        setValue(token);
        userService.setToken(token);
      }
    } catch (error) {
      removeValue();
      userService.unsetToken();
    }
  }
};
