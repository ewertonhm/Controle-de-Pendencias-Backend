import AppError from '@shared/errors/AppError';
import { compare, hash } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { userInfo } from 'os';
import { getCustomRepository } from 'typeorm';
import Usuario from '../typeorm/entities/Usuario';
import { UsuarioRepository } from '../typeorm/repositories/UsuarioRepository';
import authConfig from '@config/auth';

interface IRequest {
    email: string;
    senha: string;
}

interface IResponse {
    usuario: Usuario;
    token: string;
}

class CreateSessionService {
    public async execute({ email, senha }: IRequest): Promise<IResponse> {
        const usuarioRepository = getCustomRepository(UsuarioRepository);
        const usuario = await usuarioRepository.findByEmail(email);

        if (!usuario) {
            throw new AppError('Combinação de email/senha incorreto!', 401);
        }

        const passwodConfirmed = await compare(senha, usuario.senha);

        if (!passwodConfirmed) {
            throw new AppError('Combinação de email/senha incorreto!', 401);
        }

        const token = sign({}, authConfig.jwt.secret, {
            subject: usuario.id,
            expiresIn: authConfig.jwt.expiresIn,
        });

        return {
            usuario,
            token,
        };
    }
}

export default CreateSessionService;
