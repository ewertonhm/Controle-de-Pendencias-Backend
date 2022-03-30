import TipoPendencia from '@modules/tipo_pendencia/typeorm/entities/TipoPendencia';
import Usuario from '@modules/usuario/typeorm/entities/Usuario';
import { EntityRepository, Repository } from 'typeorm';
import Pendencia from '../entities/Pendencia';

interface IRequest {
    tipoPendencia: string;
    usuarioAbertura: string;
    usuarioFechamento: string;
    titulo: string;
    descricao: string;
    inicio: Date;
    previsao: Date;
    fim: Date;
    task: Date;
    incidente: Date;
}

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

    public async createPendencia({
        tipoPendencia,
        usuarioAbertura,
        usuarioFechamento,
        titulo,
        descricao,
        inicio,
        previsao,
        fim,
        task,
        incidente,
    }: IRequest): Promise<Pendencia> {
        const pendencia = this.create({
            tipoPendencia,
            usuarioAbertura,
            usuarioFechamento,
            titulo,
            descricao,
            inicio,
            previsao,
            fim,
            task,
            incidente,
        });

        await this.save(pendencia);

        return pendencia;
    }
}
