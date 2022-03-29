import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import TipoPendencia from '../typeorm/entities/TipoPendencia';
import { TipoPendenciaRepository } from '../typeorm/repositories/TipoPendenciaRepository';

interface IRequest {
    tipo: string;
    severidade: number;
}

class CreateTipoPendenciaService {
    public async execute({
        tipo,
        severidade,
    }: IRequest): Promise<TipoPendencia> {
        const tipoPendenciaRepository = getCustomRepository(
            TipoPendenciaRepository,
        );
        const tipoPendenciaExists = await tipoPendenciaRepository.findByTipo(
            tipo,
        );

        if (tipoPendenciaExists) {
            throw new AppError('Tipo já está cadastrado!');
        }

        const tipoPendencia = tipoPendenciaRepository.create({
            tipo,
            severidade,
        });

        await tipoPendenciaRepository.save(tipoPendencia);

        return tipoPendencia;
    }
}

export default CreateTipoPendenciaService;
