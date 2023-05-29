export interface IUser {
  email: string;
  password: string;
}

export interface IUserData {
  id: any;
  email: string;
  password: string;
  token: string | null;
}
