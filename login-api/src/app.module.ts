import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormConfig } from './config/ormconfig'
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormConfig),
    AuthModule,  
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
