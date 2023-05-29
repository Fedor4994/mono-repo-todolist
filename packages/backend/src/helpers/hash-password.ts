import bcrypt from 'bcryptjs';

export const hashPassword = async (password: string): Promise<string> => {
  const { SALT } = process.env;
  const salt = await bcrypt.genSalt(Number(SALT));
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};
