import { Injectable } from '@nestjs/common';
import { compare } from 'bcrypt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService) {}

    async auth(email: string, senha: string): Promise<any> {
        const user = await this.usersService.findOneByEmail(email);
        if(user && await compare(senha, user.senha)) {
            const { senha, ...result } = user;
            return result;
        }
        return null;
    }
}
