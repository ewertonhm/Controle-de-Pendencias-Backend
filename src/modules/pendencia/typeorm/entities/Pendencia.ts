import TipoPendencia from '@modules/tipo_pendencia/typeorm/entities/TipoPendencia';
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

@Entity('pendencia')
class Pendencia {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => TipoPendencia)
    @JoinColumn({ name: 'id_tipo_pendencia' })
    tipoPendencia: TipoPendencia;

    @Column()
    id_tipo_pendencia: string;

    @ManyToOne(() => Usuario)
    @JoinColumn({ name: 'id_usuario_abertura' })
    usuarioAbertura: Usuario;

    @Column()
    id_usuario_abertura: string;

    @ManyToOne(() => Usuario)
    @JoinColumn({ name: 'id_usuario_fechamento' })
    usuarioFechamento: Usuario;

    @Column()
    id_usuario_fechamento: string;

    @Column()
    titulo: string;

    @Column()
    descricao: string;

    @Column()
    inicio: Date;

    @Column()
    previsao: Date;

    @Column()
    fim: Date;

    @Column()
    task: string;

    @Column()
    incidente: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Pendencia;
