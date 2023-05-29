import { NavigateFunction } from 'react-router-dom';
import { ROUTER_KEYS } from '../../modules/common/consts/app-keys.const';
import { userService } from '../../modules/services/user.service';
import { TRemoveValue } from '../../modules/types/localstorage.types';

export const handleLogout = async (removeValue: TRemoveValue, navigate: NavigateFunction) => {
  const response = await userService.logout();
  if (response.status === 204) {
    userService.unsetToken();
    removeValue();
    navigate(ROUTER_KEYS.ROOT);
  }
};
