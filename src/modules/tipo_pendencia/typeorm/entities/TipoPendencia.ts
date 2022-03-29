import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity('tipo_pendencia')
class TipoPendencia {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    tipo: string;

    @Column()
    severidade: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default TipoPendencia;
