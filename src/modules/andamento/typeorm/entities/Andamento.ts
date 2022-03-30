import Pendencia from '@modules/pendencia/typeorm/entities/Pendencia';
import Usuario from '@modules/usuario/typeorm/entities/Usuario';
import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity('andamento')
class Andamento {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => Pendencia)
    @JoinColumn({ name: 'id_pendencia' })
    pendencia: Pendencia;

    @Column()
    id_pendencia: string;

    @ManyToOne(() => Usuario)
    @JoinColumn({ name: 'id_usuario' })
    usuario: Usuario;

    @Column()
    id_usuario: string;

    @Column()
    andamento: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Andamento;
