import { getCustomRepository } from 'typeorm';
import TipoPendencia from '../typeorm/entities/TipoPendencia';
import { TipoPendenciaRepository } from '../typeorm/repositories/TipoPendenciaRepository';

class ListTipoPendenciaService {
    public async execute(): Promise<TipoPendencia[]> {
        const tipoPendenciaRepository = getCustomRepository(
            TipoPendenciaRepository,
        );

        const tipoPendencia = await tipoPendenciaRepository.find();

        return tipoPendencia;
    }
}

export default ListTipoPendenciaService;
