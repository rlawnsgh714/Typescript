import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import BaseResponse from 'src/common/response';
import LoginDto from './dto/login.dto';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  getHello(): string {
    return this.authService.getHello();
  }

  @Post()
  async login(
    @Body() loginDto: LoginDto,
    ): Promise<BaseResponse> {
        const data = await this.authService.login(loginDto);

        return new BaseResponse(200, '로그인 성공', {
            name: data.name,
            password: data.password
        });
    }
}
