import { IsNotEmpty, IsString } from "class-validator";

export default class UserDto {

  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsString()
  @IsNotEmpty()
  password!: string;
}