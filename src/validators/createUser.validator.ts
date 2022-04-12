import { IsEmail, IsOptional, IsString } from "class-validator";
export class CreateUserValidator {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  password: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsOptional()
  userName: string;
}
