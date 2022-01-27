import { 
    BadRequestException, 
    ForbiddenException, 
    Injectable, 
    InternalServerErrorException, 
    Logger, 
    UnauthorizedException 
} from '@nestjs/common';
import LoginDto from './dto/login.dto';

@Injectable()
export class AuthService {

  getHello(): string {
    return 'Hello World!';
  }

  async login(loginDto:LoginDto) {
    const loginData = {
        name: loginDto.name,
        password: loginDto.password,
    };

    try {
        return loginData;
      } catch (err: any) {
  
        if (err.response !== undefined) {
          switch (err.response.status) {
            case 400:
              throw new BadRequestException('검증 오류');
  
            case 401:
              throw new UnauthorizedException('알맞지 않은 id 혹은 비밀번호 입니다');
  
            case 403:
              throw new ForbiddenException('회원가입 승인 대기중인 상태입니다. 승인 후 로그인이 가능합니다.');
  
            default:
              Logger.error(err);
              throw new InternalServerErrorException('로그인 서버 오류');
          }
        }
      }
    }
}
