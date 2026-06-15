import { User } from '../model/User';

export const saveOtp = async (userId: string, otp: string, expiry: Date) => {
  return await User.findByIdAndUpdate(userId, { 
    otpCode: otp, 
    otpExpiry: expiry 
  });
};

export const clearOtp = async (userId: string, otpCode: number, otpExpiry: number) => {
  return await User.findByIdAndUpdate(userId, { 
    $unset: { otpCode: "", otpExpiry: "" }
  });
};

export const getById = async (userId: string) => {
  const user = await User.findById(userId);
  return user;
};

export const getByEmail = async (email: string) => {
  const user = await User.findOne({ email });
  return user;
};