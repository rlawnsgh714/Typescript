import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() //app.get() 이것과 같은 역할
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/hello') // /hello로 들어온다면 sayHello 함수 실행
  sayHello(): string {
    return 'Hello everyone.';
  }
}
