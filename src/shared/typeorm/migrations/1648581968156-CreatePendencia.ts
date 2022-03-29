import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreatePendencia1648581968156 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'pendencia',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'titulo',
                        type: 'varchar',
                    },
                    {
                        name: 'descricao',
                        type: 'varchar',
                    },
                    {
                        name: 'inicio',
                        type: 'timestamp with time zone',
                        default: 'now()',
                    },
                    {
                        name: 'previsao',
                        type: 'timestamp with time zone',
                    },
                    {
                        name: 'fim',
                        type: 'timestamp with time zone',
                    },
                    {
                        name: 'task',
                        type: 'varchar',
                    },
                    {
                        name: 'incidente',
                        type: 'varchar',
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp with time zone',
                        default: 'now()',
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp with time zone',
                        default: 'now()',
                    },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('pendencia');
    }
}
