import { forwardRef, HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthService } from 'src/auth/auth.service';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { Token } from './entities/token.entity';

@Injectable()
export class TokenService {
  constructor(@InjectRepository(Token) 
  private model: Repository<Token>,
  private userService: UsersService,
  @Inject(forwardRef(() => AuthService))
  private authService: AuthService,
  ) {}

  async save(hash: string, username: string): Promise<void>{
    let objToken = await this.model.findOne({where: {username}});
    if(objToken){
      await this.model.update(
        objToken.id, 
        {hash: hash}
      );
    } else {
      await this.model.insert({
        hash: hash,
        username: username,
      });
    }
  }
  async refreshToken(oldToken: string): Promise<{ acess_token: string; } | HttpException> {
    let objToken = await this.model.findOne({where: {hash: oldToken}});
    if(objToken){
      let user = await this.userService.findOneByEmail(objToken.username);
      return this.authService.login(user);
      
    } else { // é uma requisição invalida
      return new HttpException({
        errorMessage: 'Token inválido'
      }, HttpStatus.UNAUTHORIZED)
    }
  }

}
