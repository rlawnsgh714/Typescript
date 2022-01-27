import { IsNotEmpty, IsString } from "class-validator";

export default class LoginDto {

  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsString()
  @IsNotEmpty()
  password!: string;
}