import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import { Document, Types } from 'mongoose';
import User from '../models/User';
import {
  generateAccessToken,
  generateRefreshToken,
} from '../utils/generateTokens';

interface IUser extends Document {
  _id: Types.ObjectId;
  username: string;
  email: string;
  password: string;
  refreshToken?: string;
}

export const register = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { username, password, email } = req.body;

  try {
    if (!username || !password || !email) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const userExists = await User.findOne({ username });
    if (userExists) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      password: hashedPassword,
      email,
    }) as IUser;

    await newUser.save();

    const userId = newUser._id.toString();

    const accessToken = generateAccessToken(userId);
    const refreshToken = generateRefreshToken(userId);

    newUser.refreshToken = refreshToken;
    await newUser.save();

    return res.status(201).json({ accessToken, refreshToken });
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const login = async (req: Request, res: Response): Promise<Response> => {
  const { username, password } = req.body;

  try {
    const user = (await User.findOne({ username })) as IUser | null;

    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    const accessToken = generateAccessToken(user._id.toString());
    const refreshToken = generateRefreshToken(user._id.toString());

    user.refreshToken = refreshToken;
    await user.save();

    return res.json({ accessToken, refreshToken });
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const refreshToken = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { token } = req.body;

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.REFRESH_TOKEN as string) as {
      userId: string;
    };

    const user = (await User.findById(decoded.userId)) as IUser | null;

    if (!user || user.refreshToken !== token) {
      return res.status(403).json({ message: 'Invalid refresh token' });
    }

    const newAccessToken = generateAccessToken(user._id.toString());
    const newRefreshToken = generateRefreshToken(user._id.toString());

    user.refreshToken = newRefreshToken;
    await user.save();

    return res.json({
      accessToken: newAccessToken,
      refreshToken: newRefreshToken,
    });
  } catch (error) {
    return res.status(403).json({ message: 'Token expired or invalid' });
  }
};

export const logout = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { token } = req.body;

  try {
    const user = (await User.findOne({ refreshToken: token })) as IUser | null;

    if (!user) {
      return res.sendStatus(204);
    }

    user.refreshToken = undefined;
    await user.save();

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};
