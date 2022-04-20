import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Token {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({type: "varchar", length: 256})
    hash: string;

    @Column({type: "varchar", length: 120})
    username: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
