import { IUser } from "../models/User";
import bcrypt from "bcryptjs";

export async function hashPassword(
  password: IUser["password"]
): Promise<string> {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
}

export async function comparePassword(
  enteredPassword: string,
  storedHash: string
): Promise<boolean> {
  return await bcrypt.compare(enteredPassword, storedHash);
}
