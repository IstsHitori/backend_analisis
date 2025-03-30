import { AuthMessages } from "../constants/authMessages";
import { IUser } from "../models/User";
import AuthRepository from "../repositories/AuthRepositorie";
import AppError from "../utils/AppError";
import { comparePassword } from "../utils/auth";
import { generateToken } from "../config/jwt";

export default class AuthService {
  private authRepository = new AuthRepository();

  async createAccount(userData: IUser) {
    const existingUser = await this.authRepository.findUserByEmail(
      userData.email
    );

    if (existingUser) throw new AppError(AuthMessages.USER_ALREADY_EXISTS, 409);
    return await this.authRepository.createAccount(userData);
  }

  async login(credentials: Pick<IUser, "email" | "password">) {
    const user = await this.authRepository.findUserByEmail(credentials.email);
    if (!user) throw new AppError(AuthMessages.USER_NOT_FOUND, 404);
    const isPasswordValid = await comparePassword(
      credentials.password,
      user.password
    );
    if (!isPasswordValid)
      throw new AppError(AuthMessages.PASSWORD_MISMATCH, 401);

    const token = generateToken({ id: user.id });

    return token;
  }

}
