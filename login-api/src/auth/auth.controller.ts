import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import BaseResponse from 'src/common/response';
import LoginDto from './dto/login.dto';
import registerDto from './dto/register.dto';

@Controller('/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  getHello(): string {
    return this.authService.getHello();
  }

  @Post('/login')
  async login(
    @Body() loginDto: LoginDto,
    ): Promise<BaseResponse> {
        const data = await this.authService.login(loginDto);

        return new BaseResponse(200, '로그인 성공', {
            name: data.name,
            password: data.password
        });
    }

  @Post('/join')
  async register(
    @Body() registerDto: registerDto,
    ): Promise<BaseResponse> {
        const data = await this.authService.register(registerDto);

        return new BaseResponse(200, '회원가입 성공', {
            name: data.name,
            password: data.password
        });
    }
}
