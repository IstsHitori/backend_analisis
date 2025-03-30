import { IsString, IsEmail, IsNotEmpty, MinLength } from "class-validator";
import { AuthMessages } from "../../constants/authMessages";

export class LoginDTO {
  @IsEmail({}, { message: AuthMessages.EMAIL_INVALID })
  @IsNotEmpty({ message: AuthMessages.EMAIL_REQUIRED })
  @IsString()
  email!: string;

  @IsString()
  @IsNotEmpty({ message: AuthMessages.PASSWORD_REQUIRED })
  @MinLength(6, { message: AuthMessages.PASSWORD_LENGTH })
  password!: string;
}
