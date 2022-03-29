import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import TipoPendencia from '../typeorm/entities/TipoPendencia';
import { TipoPendenciaRepository } from '../typeorm/repositories/TipoPendenciaRepository';

interface IRequest {
    id: string;
}

class ShowTipoPendenciaService {
    public async execute({ id }: IRequest): Promise<TipoPendencia> {
        const tipoPendenciaRepository = getCustomRepository(
            TipoPendenciaRepository,
        );

        const tipoPendencia = await tipoPendenciaRepository.findOne(id);

        if (!tipoPendencia) {
            throw new AppError('Tipo não encontrado.');
        }

        return tipoPendencia;
    }
}

export default ShowTipoPendenciaService;
