import {
  IsString,
  IsEmail,
  IsNotEmpty,
  MinLength,
} from "class-validator";
import { AuthMessages } from "../constants/authMessages";

export class CreateRaffleDTO {
  @IsString()
  @IsNotEmpty({ message: AuthMessages.NAME_REQUIRED })
  @MinLength(3, { message: AuthMessages.NAME_LENGTH })
  name!: string;

  @IsEmail({}, { message: AuthMessages.EMAIL_INVALID })
  @IsNotEmpty({ message: AuthMessages.EMAIL_REQUIRED })
  email!: string;

  @IsString()
  @IsNotEmpty({ message: AuthMessages.PASSWORD_REQUIRED })
  @MinLength(6, { message: AuthMessages.PASSWORD_LENGTH })
  password!: string;

}
