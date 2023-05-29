import axios from 'axios';
import { IChangePasswordUser, IUser } from '../types/user.types';

const { REACT_APP_BASE_URL } = process.env;

class UserService {
  setToken(token: string) {
    axios.defaults.headers.Authorization = `Bearer ${token}`;
  }

  unsetToken() {
    axios.defaults.headers.Authorization = '';
  }

  async login(credential: IUser) {
    const response = await axios.post<IUser>(`${REACT_APP_BASE_URL}/user/login`, credential);
    return response;
  }

  async signup(credential: IUser) {
    const response = await axios.post<IUser>(`${REACT_APP_BASE_URL}/user/signup`, credential);
    return response;
  }

  async logout() {
    const response = await axios.get(`${REACT_APP_BASE_URL}/user/logout`);
    return response;
  }

  async resetPassword(credential: { email: string }) {
    const response = await axios.post(`${REACT_APP_BASE_URL}/user/reset-password`, credential);
    return response;
  }

  async changePassword(credential: IChangePasswordUser) {
    const response = await axios.post(`${REACT_APP_BASE_URL}/user/change-password`, credential);
    return response;
  }

  async getCurrent() {
    const response = await axios.get<IUser>(`${REACT_APP_BASE_URL}/user/current`);
    return response;
  }
}
export const userService = new UserService();
