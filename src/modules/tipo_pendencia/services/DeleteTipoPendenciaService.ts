import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { TipoPendenciaRepository } from '../typeorm/repositories/TipoPendenciaRepository';

interface IRequest {
    id: string;
}

class DeleteTipoPendenciaService {
    public async execute({ id }: IRequest): Promise<void> {
        const tipoPendenciaRepository = getCustomRepository(
            TipoPendenciaRepository,
        );

        const tipoPendencia = await tipoPendenciaRepository.findOne(id);

        if (!tipoPendencia) {
            throw new AppError('Tipo não encontrado.');
        }

        await tipoPendenciaRepository.remove(tipoPendencia);
    }
}

export default DeleteTipoPendenciaService;
