import { IsString, IsNotEmpty, MinLength } from "class-validator";
import { AuthMessages } from "../../constants/authMessages";
import { UserMessages } from "../../constants/userMessages";

export class UpdateProfileDTO {
  @IsString()
  @IsNotEmpty({ message: AuthMessages.NAME_REQUIRED })
  @MinLength(3, { message: AuthMessages.NAME_LENGTH })
  name!: string;

  @IsString()
  @IsNotEmpty({ message: UserMessages.CURRENT_STUDY_REQUIRED })
  currentStudy!: string;

  @IsString()
  @IsNotEmpty({ message: UserMessages.EDUCATIONAL_INSTITUTION_REQUIRED })
  educationalInstitution!: string;

  @IsString()
  @IsNotEmpty({ message: UserMessages.DATEBIRTH_REQUIRED })
  dateBirth!: Date;
}