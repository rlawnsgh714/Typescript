import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from './enetity/user.entity';


@Controller('/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('list')
  async findAll(): Promise<User[]> {
    const userList = await this.authService.findAll();
    return Object.assign({
      data: userList,
      statusCode: 200,
      statusMsg: `모든 데이터 조회 성공!`,
    });
  }
  @Get(':userId')
  async findOne(@Param('userId') id: string): Promise<User> {
    const foundUser = await this.authService.findOne(id);
    return Object.assign({
      data: foundUser,
      statusCode: 200,
      statusMsg: `데이터 조회 성공!`,
    });
  }
  @Post('join')
  async register(@Body() user: User): Promise<string> {
    await this.authService.register(user);
    return Object.assign({
      data: { ...user },
      statusCode: 201,
      message: `회원가입 성공!`,
    });
  }
  @Post('login')
  async login(@Body() user: User): Promise<string> {
    await this.authService.login(user);
    return Object.assign({
      data: { ...user },
      statusCode: 201,
      message: `로그인 성공!`,
    });
  }
  @Delete(':userId')
  async deleteUser(@Param('userId') id: string): Promise<string> {
    await this.authService.deleteUser(id);
    return Object.assign({
      data: { userId: id },
      statusCode: 201,
      statusMsg: `유저 삭제 성공!`,
    });
  }
}
