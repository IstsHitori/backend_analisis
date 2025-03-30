import { IUser } from "../models/User";
import User from "../models/User";

export default class AuthRepository {
  async createAccount(userData: Partial<IUser>): Promise<IUser> {
    
    const newUser = new User(userData);
    return await newUser.save();
  }

  async findUserByEmail(email: IUser["email"]): Promise<IUser | null> {
    return User.findOne({ email });
  }

  async loginUser(credentials: any): Promise<any> {
    return { success: true };
  }
}
