import AppError from '@shared/errors/AppError';
import { compare, hash } from 'bcryptjs';
import { getCustomRepository } from 'typeorm';
import Usuario from '../typeorm/entities/Usuario';
import { UsuarioRepository } from '../typeorm/repositories/UsuarioRepository';

interface IRequest {
    email: string;
    senha: string;
}

interface IResponse {
    usuario: Usuario;
}

class CreateSessionService {
    public async execute({ email, senha }: IRequest): Promise<Usuario> {
        const usuarioRepository = getCustomRepository(UsuarioRepository);
        const usuario = await usuarioRepository.findByEmail(email);

        if (!usuario) {
            throw new AppError('Combinação de email/senha incorreto!', 401);
        }

        const passwodConfirmed = await compare(senha, usuario.senha);

        if (!passwodConfirmed) {
            throw new AppError('Combinação de email/senha incorreto!', 401);
        }

        return usuario;
    }
}

export default CreateSessionService;
