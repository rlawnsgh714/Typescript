import { 
    BadRequestException, 
    Injectable, 
    InternalServerErrorException, 
    Logger, 
} from '@nestjs/common';
import LoginDto from './dto/login.dto';
import registerDto from './dto/register.dto';
import { UserRepository } from './repository/auth.repository';

@Injectable()
export class AuthService {
  UserRepository: UserRepository;

  getHello(): string {
    return 'Hello'; 
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
            default:
              Logger.error(err);
              throw new InternalServerErrorException('로그인 서버 오류');
          }
        }
      }
  }

  async register(registerDto:registerDto) {
    const registerData = {
        name: registerDto.name,
        password: registerDto.password,
    };

    try {
      const User = this.UserRepository.create(registerData);
        await this.UserRepository.save(registerData);
        return registerData;
      } catch (err: any) {
        if (err.response !== undefined) {
          switch (err.response.status) {
            case 400:
              throw new BadRequestException('검증 오류');
            default:
              Logger.error(err);
              throw new InternalServerErrorException('로그인 서버 오류');
          }
        }
      }
  }
}
