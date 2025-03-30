import { Request, Response, NextFunction } from "express";
import { AuthMessages } from "../constants/authMessages";
import AuthService from "../services/AuthService";

export default class AuthController {
  static async registerAccount(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const authService = new AuthService();
      await authService.createAccount(req.body);
      res.status(201).send(AuthMessages.USER_REGISTERED_SUCCESSFULLY);
    } catch (error) {
      next(error);
    }
  }
  static async login(req: Request, res: Response, next: NextFunction) {
    try {
      const authService = new AuthService();
      const { email, password } = req.body;
      const token = await authService.login({ email, password });
      res.status(200).send(token);
    } catch (error) {
      next(error);
    }
  }

}
