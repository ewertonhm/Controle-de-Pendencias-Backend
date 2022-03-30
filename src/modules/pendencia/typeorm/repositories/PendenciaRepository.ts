import { EntityRepository, Repository } from 'typeorm';
import Pendencia from '../entities/Pendencia';

@EntityRepository(Pendencia)
export class PendenciaRepository extends Repository<Pendencia> {
    public async findById(id: string): Promise<Pendencia | undefined> {
        const pendencia = await this.findOne(id, {
            relations: [
                'tipoPendencia',
                'usuarioAbertura',
                'usuarioFechamento',
            ],
        });

        return pendencia;
    }
}
