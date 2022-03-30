import { EntityRepository, Repository } from 'typeorm';
import Andamento from '../entities/Andamento';

@EntityRepository(Andamento)
export class AndamentoRepository extends Repository<Andamento> {
    public async findById(id: string): Promise<Andamento | undefined> {
        const andamento = await this.findOne(id, {
            relations: ['pendencia', 'usuario'],
        });

        return andamento;
    }
}
