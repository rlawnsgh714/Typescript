import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController], //constrolles는 url을 가져와서 함수실행, express에서는 라우터의 개념
  providers: [AppService],
})
export class AppModule {}
