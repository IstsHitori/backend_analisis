import { Request, Response, NextFunction } from "express";
import AppError from "../utils/AppError";
import { AuthMessages } from "../constants/authMessages";
import { rolesStatus } from "../models/User";
export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
  if (!req.User) throw new AppError(AuthMessages.USER_UNAUTHORIZED, 401);
  if (req.User.role !== rolesStatus.ADMIN)
    throw new AppError(AuthMessages.FORBIDDEN, 403);
  next();
};
