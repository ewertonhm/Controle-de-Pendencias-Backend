import {
    MigrationInterface,
    QueryRunner,
    TableColumn,
    TableForeignKey,
} from 'typeorm';

export class AddIdPendenciaToAndamento1648658639372
    implements MigrationInterface
{
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'andamento',
            new TableColumn({
                name: 'id_pendencia',
                type: 'uuid',
                isNullable: true,
            }),
        );
        await queryRunner.createForeignKey(
            'andamento',
            new TableForeignKey({
                name: 'AndamentoPendencia',
                columnNames: ['id_pendencia'],
                referencedTableName: 'usuario',
                referencedColumnNames: ['id'],
                onDelete: 'SET NULL',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('andamento', 'AndamentoPendencia');
        await queryRunner.dropColumn('andamento', 'id_pendencia');
    }
}
