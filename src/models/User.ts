import mongoose, { Schema, Document, Model } from "mongoose";
import bcrypt from "bcryptjs";

export enum rolesStatus {
  ADMIN = "admin",
  USER = "usuario",
}
export type typeRolesStatus = (typeof rolesStatus)[keyof typeof rolesStatus];
export const validRoles = Object.values(rolesStatus);

export interface IUser extends Document {
  name: string;
  email: string;
  currentStudy: string;
  educationalInstitution: string;
  password: string;
  dateCreated: Date;
  dateBirth: Date;
  role: typeRolesStatus;
  lastActiveAt: Date;
}

const UserSchema: Schema<IUser> = new Schema({
  name: {
    type: String,
    required: true,
  },
  currentStudy: {
    type: String,
    default: "Sin estudios",
  },
  educationalInstitution: {
    type: String,
    default: "Sin institución educativa",
  },
  dateBirth: {
    type: Date,
    default: function () {
      return new Date();
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  dateCreated: {
    type: Date,
    default: function () {
      return new Date();
    },
  },
  role: {
    type: String,
    enum: validRoles,
    default: rolesStatus.USER,
  },
  lastActiveAt: {
    type: Date,
    default: function () {
      return new Date();
    },
  },
});

UserSchema.pre<IUser>("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const User: Model<IUser> = mongoose.model<IUser>("User", UserSchema);
export default User;
