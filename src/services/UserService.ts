import UserRepository from "../repositories/UserRepositorie";
import { Request } from "express";
import AppError from "../utils/AppError";
import { AuthMessages } from "../constants/authMessages";
export default class UserService {
  private userRepository = new UserRepository();

  async getProfile(req: Request) {
    const { User } = req;
    if (!User) {
      throw new AppError(AuthMessages.USER_NOT_FOUND, 404);
    }
    return User;
  }

  async updateProfile(req: Request) {
    const { User:UserReq } = req;
    if (!UserReq) {
      throw new AppError(AuthMessages.USER_NOT_FOUND, 404);
    }
    return await this.userRepository.updateProfile(UserReq.id, req.body);
  }
}
