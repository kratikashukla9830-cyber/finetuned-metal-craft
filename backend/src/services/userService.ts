import { clearOtp, getByEmail, getById, saveOtp } from '../repository/userRepository';

export const saveUserOtp = async (userId: string, otp: string) => {
  const expiry = new Date(Date.now() + 5 * 60 * 1000);
  return await saveOtp(userId, otp, expiry);
};

export const clearUserOtp = async (userId: string) => {
  return await clearOtp(userId, 0, 0);
};

export const getUserById = async (userId: string) => {
  const user = await getById(userId);
  return user;
}

export const getUserByEmail = async (email: string) => {
  const user = await getByEmail(email);
  return user;
}