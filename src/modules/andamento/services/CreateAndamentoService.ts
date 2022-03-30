import { PendenciaRepository } from '@modules/pendencia/typeorm/repositories/PendenciaRepository';
import { UsuarioRepository } from '@modules/usuario/typeorm/repositories/UsuarioRepository';
import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { AndamentoRepository } from '../typeorm/repositories/AndamentoRepository';

interface IRequest {
    id_usuario: string;
    id_pendencia: string;
    andamento: string;
}

class CreateAndamentoService {
    public async execute({
        id_usuario,
        id_pendencia,
        andamento,
    }: IRequest): Promise<Andamento> {
        const andamentoRepository = getCustomRepository(AndamentoRepository);
        const usuarioRepository = getCustomRepository(UsuarioRepository);
        const pendenciaRepository = getCustomRepository(PendenciaRepository);

        const usuario = await usuarioRepository.findById(id_usuario);
        const pendencia = await pendenciaRepository.findById(id_pendencia);

        if (!usuario) {
            throw new AppError('Usuario informado não encontrado!');
        }

        if (!pendencia) {
            throw new AppError('Pèndencia informada não encontrada!');
        }

        const andamentoEntry = andamentoRepository.create(
            usuario.id,
            pendencia.id,
            andamento,
        );

        await andamentoRepository.save(andamentoEntry);

        return andamentoEntry;
    }
}

export default CreateAndamentoService;
