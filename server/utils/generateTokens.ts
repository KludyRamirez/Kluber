import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const generateAccessToken = (userId: string): string => {
  return jwt.sign({ userId }, process.env.ACCESS_TOKEN as string, {
    expiresIn: '15m',
  });
};

export const generateRefreshToken = (userId: string): string => {
  return jwt.sign({ userId }, process.env.REFRESH_TOKEN as string, {
    expiresIn: '7d',
  });
};
