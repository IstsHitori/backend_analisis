import { Types } from "mongoose";
import jwt from "jsonwebtoken";
type PayloadProps = {
  id: Types.ObjectId;
};

export function generateToken(payload: PayloadProps): string {
  const token = jwt.sign(payload, process.env.JWT_SECRET!, {
    expiresIn: "10d",
  });
  return token;
}
