import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormConfig } from 'src/config/ormconfig';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [
      TypeOrmModule.forRoot(ormConfig)
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
