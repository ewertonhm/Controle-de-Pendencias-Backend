import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Usuario from '../typeorm/entities/Usuario';
import { UsuarioRepository } from '../typeorm/repositories/UsuarioRepository';

interface IRequest {
    id: string;
    nome: string;
    sobrenome: string;
    email: string;
    senha: string;
    ativo: boolean;
    btv_usuario: string;
    btv_senha: string;
    id_bitrix: number;
}

class UpdateUsuarioService {
    public async execute({
        id,
        nome,
        sobrenome,
        email,
        senha,
        ativo,
        btv_usuario,
        btv_senha,
        id_bitrix,
    }: IRequest): Promise<Usuario> {
        const usuarioRepository = getCustomRepository(UsuarioRepository);

        const usuario = await usuarioRepository.findById(id);
        const usuarioExists = await usuarioRepository.findByEmail(email);

        if (!usuario) {
            throw new AppError('Usuario não encontrado.');
        }

        if (usuarioExists && email != usuario.email) {
            throw new AppError('Email já está em uso!');
        }

        usuario.nome = nome;
        usuario.sobrenome = sobrenome;
        usuario.email = email;
        usuario.senha = senha;
        usuario.ativo = ativo;
        usuario.btv_senha = btv_senha;
        usuario.btv_usuario = btv_usuario;
        usuario.id_bitrix = id_bitrix;

        await usuarioRepository.save(usuario);

        return usuario;
    }
}

export default UpdateUsuarioService;
