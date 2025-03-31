import { Request, Response, NextFunction } from "express";
import User from "../models/User";

export const updateLastActive = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.User) {
    await User.findByIdAndUpdate(req.User.id, { lastActiveAt: new Date() });
  }
  next();
};
