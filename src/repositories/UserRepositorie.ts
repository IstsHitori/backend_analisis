import User, { IUser } from "../models/User";

export default class UserRepository {
  async updateProfile(userId: string, data: Partial<IUser>) {
    return await User.findByIdAndUpdate(userId, data, {
      new: true,
      runValidators: true,
    });
  }

  async getUsers() {
    return await User.find({}).select("-password");
  }
}
