import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import TipoPendencia from '../typeorm/entities/TipoPendencia';
import { TipoPendenciaRepository } from '../typeorm/repositories/TipoPendenciaRepository';

interface IRequest {
    id: string;
    tipo: string;
    severidade: number;
}

class UpdateTipoPendenciaService {
    public async execute({
        id,
        tipo,
        severidade,
    }: IRequest): Promise<TipoPendencia> {
        const tipoPendenciaRepository = getCustomRepository(
            TipoPendenciaRepository,
        );

        const tp = await tipoPendenciaRepository.findById(id);
        const tipoPendenciaExists = await tipoPendenciaRepository.findByTipo(
            tipo,
        );

        if (tipoPendenciaExists && tipo != tp.tipo) {
            throw new AppError('Tipo já está cadastrado!');
        }

        tp.tipo = tipo;
        tp.severidade = severidade;

        await tipoPendenciaRepository.save(tp);

        return tp;
    }
}

export default UpdateTipoPendenciaService;
