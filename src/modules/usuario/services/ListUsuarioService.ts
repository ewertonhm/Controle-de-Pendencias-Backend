import { getCustomRepository } from 'typeorm';
import Usuario from '../typeorm/entities/Usuario';
import { UsuarioRepository } from '../typeorm/repositories/UsuarioRepository';

class ListUsuarioService {
    public async execute(): Promise<Usuario[]> {
        const usuarioRepository = getCustomRepository(UsuarioRepository);

        const usuarios = await usuarioRepository.find();

        return usuarios;
    }
}

export default ListUsuarioService;
