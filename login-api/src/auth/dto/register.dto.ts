import { IsNotEmpty, IsString } from "class-validator";

export default class registerDto {

  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsString()
  @IsNotEmpty()
  password!: string;
}