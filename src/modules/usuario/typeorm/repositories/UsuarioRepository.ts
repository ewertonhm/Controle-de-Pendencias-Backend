import { EntityRepository, Repository } from 'typeorm';
import Usuario from '../entities/Usuario';

@EntityRepository(Usuario)
export class UsuarioRepository extends Repository<Usuario> {
    public async findByName(
        nome: string,
        sobrenome: string,
    ): Promise<Usuario | undefined> {
        const usuario = await this.findOne({
            where: {
                nome,
                sobrenome,
            },
        });
        return usuario;
    }
    public async findByEmail(email: string): Promise<Usuario | undefined> {
        const usuario = await this.findOne({
            where: {
                email,
            },
        });
        return usuario;
    }

    public async fundById(id: string): Promise<Usuario | undefined> {
        const usuario = await this.findOne({
            where: {
                id,
            },
        });

        return usuario;
    }
}
