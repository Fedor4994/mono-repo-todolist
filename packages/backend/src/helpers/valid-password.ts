import bcrypt from 'bcryptjs';

export const isValidPassword = async (newPassword: string, password: string) => {
  const isValid = await bcrypt.compare(newPassword, password);
  return isValid;
};
