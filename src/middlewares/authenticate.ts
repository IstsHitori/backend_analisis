import { IUser } from "../models/User";
import User from "../models/User";
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import AppError from "../utils/AppError";

declare global {
  namespace Express {
    interface Request {
      User?: IUser;
    }
  }
}

export async function authenticate(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const bearer = req.headers.authorization;
    if (!bearer) {
      throw new AppError("No autorizado", 401);
    }
    const token = bearer.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);

    if (typeof decoded === "object" && decoded.id) {
      const user = await User.findById(decoded.id).select(
        "_id name currentStudy educationalInstitution email role dateBirth "
      );
      if (!user) {
        throw new AppError("Token no válido", 500);
      }
      req.User = user;
    }
    next();
  } catch (error) {
    res.status(500).json({ error: "Token no valido" });
  }
}
