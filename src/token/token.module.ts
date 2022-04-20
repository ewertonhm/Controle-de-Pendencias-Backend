import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { UsersModule } from 'src/users/users.module';
import { Token } from './entities/token.entity';
import { TokenController } from './token.controller';
import { TokenService } from './token.service';

@Module({
  imports: [TypeOrmModule.forFeature([Token]), forwardRef(() => AuthModule), UsersModule],
  controllers: [TokenController],
  providers: [TokenService],
  exports: [TokenService]
})
export class TokenModule {}
