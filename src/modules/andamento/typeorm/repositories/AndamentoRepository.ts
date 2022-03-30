import Pendencia from '@modules/pendencia/typeorm/entities/Pendencia';
import Usuario from '@modules/usuario/typeorm/entities/Usuario';
import { EntityRepository, Repository } from 'typeorm';
import Andamento from '../entities/Andamento';

interface IRequest {
    usuario: Usuario;
    pendencia: Pendencia;
    andamento: string;
}

@EntityRepository(Andamento)
export class AndamentoRepository extends Repository<Andamento> {
    public async findById(id: string): Promise<Andamento | undefined> {
        const andamento = await this.findOne(id, {
            relations: ['pendencia', 'usuario'],
        });

        return andamento;
    }

    public async createAndamento({
        usuario,
        pendencia,
        andamento,
    }: IRequest): Promise<Andamento> {
        const andamentoEntry = this.create({
            usuario,
            pendencia,
            andamento,
        });

        await this.save(andamentoEntry);

        return andamentoEntry;
    }
}
