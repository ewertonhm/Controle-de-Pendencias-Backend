import { Pendencia } from "src/pendencias/entities/pendencia.entity";
import { User } from "src/users/entities/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Andamento {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => User, user => user.id)
    user: User;

    @ManyToOne(() => Pendencia, pendencia => pendencia.id)
    pendencia: Pendencia;

    @Column({length: 500})
    andamento: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
