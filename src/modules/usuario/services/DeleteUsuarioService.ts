import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { UsuarioRepository } from '../typeorm/repositories/UsuarioRepository';

interface IRequest {
    id: string;
}

class DeleteUsuarioService {
    public async execute({ id }: IRequest): Promise<void> {
        const usuarioRepository = getCustomRepository(UsuarioRepository);

        const usuario = await usuarioRepository.findOne(id);

        if (!usuario) {
            throw new AppError('Usuario não encontrado.');
        }

        await usuarioRepository.remove(usuario);
    }
}

export default DeleteUsuarioService;
