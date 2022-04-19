import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({type: "varchar", length: 120})
    nome: string;

    @Column({type: "varchar", length: 120})
    sobrenome: string;

    @Column({type: "varchar", length: 120, unique: true})
    email: string;

    @Column({type: "varchar", length: 255})
    senha: string;
    
    @Column({type: "bool", nullable: true})
    ativo: boolean;

    @Column({type: "varchar", length: 30, nullable: true})
    btv_usuario: string;

    @Column({type: "varchar", length: 64, nullable: true})
    btv_senha: string;

    @Column({type: "int", nullable: true})
    id_bitrix: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
