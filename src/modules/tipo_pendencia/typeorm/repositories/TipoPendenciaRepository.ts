import { EntityRepository, Repository } from 'typeorm';
import TipoPendencia from '../entities/TipoPendencia';

@EntityRepository(TipoPendencia)
export class TipoPendenciaRepository extends Repository<TipoPendencia> {
    public async findByTipo(tipo: string): Promise<TipoPendencia | undefined> {
        const tipoPendencia = await this.findOne({
            where: {
                tipo,
            },
        });
        return tipoPendencia;
    }

    public async findById(id: string): Promise<TipoPendencia | undefined> {
        const tipoPendencia = await this.findOne({
            where: {
                id,
            },
        });

        return tipoPendencia;
    }
}
