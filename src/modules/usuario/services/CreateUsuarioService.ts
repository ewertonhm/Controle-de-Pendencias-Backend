import AppError from '@shared/errors/AppError';
import { hash } from 'bcryptjs';
import { getCustomRepository } from 'typeorm';
import Usuario from '../typeorm/entities/Usuario';
import { UsuarioRepository } from '../typeorm/repositories/UsuarioRepository';

interface IRequest {
    nome: string;
    sobrenome: string;
    email: string;
    senha: string;
    ativo: boolean;
    btv_usuario: string;
    btv_senha: string;
    id_bitrix: number;
}

class CreateUsuarioService {
    public async execute({
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
        const usuarioExists = await usuarioRepository.findByEmail(email);

        if (usuarioExists) {
            throw new AppError('Email já está em uso!');
        }

        const hashedPassword = await hash(senha, 8);

        const usuario = usuarioRepository.create({
            nome,
            sobrenome,
            email,
            senha: hashedPassword,
            ativo,
            btv_usuario,
            btv_senha,
            id_bitrix,
        });

        await usuarioRepository.save(usuario);

        return usuario;
    }
}

export default CreateUsuarioService;
