import { TipoPendencia } from "src/tipo_pendencias/entities/tipo_pendencia.entity";
import { User } from "src/users/entities/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Pendencia {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => TipoPendencia, tipoPendencia => tipoPendencia.id)
    tipoPendencia: TipoPendencia;

    @ManyToOne(() => User, userAbertura => userAbertura.id)
    userAbertura: User;

    @ManyToOne(() => User, userFechamento => userFechamento.id, {nullable: true})
    userFechamento: User;

    @Column()
    titulo: string;

    @Column({nullable: true})
    descricao: string;

    @Column()
    inicio: Date;

    @Column({nullable: true})
    previsao: Date;

    @Column({nullable: true})
    fim: Date;

    @Column({nullable: true})
    task: string;

    @Column({nullable: true})
    incidente: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
