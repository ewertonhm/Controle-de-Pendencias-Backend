import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Usuario from '../typeorm/entities/Usuario';
import { UsuarioRepository } from '../typeorm/repositories/UsuarioRepository';

interface IRequest {
    id: string;
}

class ShowUsuarioService {
    public async execute({ id }: IRequest): Promise<Usuario> {
        const usuarioRepository = getCustomRepository(UsuarioRepository);

        const usuario = await usuarioRepository.findOne(id);

        if (!usuario) {
            throw new AppError('Usuario não encontrado.');
        }

        return usuario;
    }
}

export default ShowUsuarioService;
