import { Request, Response, NextFunction } from "express";
import AppError from "../utils/AppError";

const errorHandler = (
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { message, statusCode } = err;

  if (!(err instanceof AppError)) {
    console.error(`Error no controlado: ${err}`);
    statusCode = 500;
    message = "Error interno del servidor";
  }

  res.status(statusCode || 500).json({ success: false, message });
  return;
};

export default errorHandler;
