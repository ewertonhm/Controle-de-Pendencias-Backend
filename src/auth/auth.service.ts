import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
        ) {}

    async ValidateUser(email: string, senha: string): Promise<any> {
        const user = await this.usersService.findOneByEmail(email);
        if(user && await compare(senha, user.senha)) {
            const { senha, ...result } = user;
            return result;
        }
        return null;
    }

    async login(user: any) {
        const payload = { username: user.email, sub: user.id};
        return{
            acess_token: this.jwtService.sign(payload),
        }
    }

}
