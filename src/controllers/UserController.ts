import { Request, Response, NextFunction } from "express";
import UserService from "../services/UserService";
import { UserMessages } from "../constants/userMessages";
import AppError from "../utils/AppError";

export default class UserController {
  static async getProfile(req: Request, res: Response, next: NextFunction) {
    try {
      const userService = new UserService();
      const user = await userService.getProfile(req);
      res.send(user);
    } catch (error) {
      next(error);
    }
  }
  static async updateProfile(req: Request, res: Response, next: NextFunction) {
    try {
      const userService = new UserService();
      const userUpdate = await userService.updateProfile(req);
      if (!userUpdate) {
        throw new AppError(UserMessages.PROFILE_NOT_FOUND, 404);
      }
      res.send(UserMessages.PROFILE_UPDATED_SUCCESS);
    } catch (error) {
      next(error);
    }
  }
  static async getUsers(req: Request, res: Response, next: NextFunction) {
    try {
      const userService = new UserService();
      const users = await userService.getUsers();
      res.json({ users });
    } catch (error) {
      next(error);
    }
  }
}
