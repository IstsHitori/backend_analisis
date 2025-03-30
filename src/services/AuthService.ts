import { AuthMessages } from "../constants/authMessages";
import { IUser } from "../models/User";
import AuthRepository from "../repositories/AuthRepositorie";
import AppError from "../utils/AppError";

export default class AuthService {
  private authRepository = new AuthRepository();

  async createAccount(userData: IUser) {
    
    const existingUser = await this.authRepository.findUserByEmail(
      userData.email
    );

    if (existingUser) throw new AppError(AuthMessages.USER_ALREADY_EXISTS, 409);
    return await this.authRepository.createAccount(userData);
  }
}
