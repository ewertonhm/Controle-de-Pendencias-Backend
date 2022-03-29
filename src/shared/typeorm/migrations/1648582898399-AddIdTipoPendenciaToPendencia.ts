import {
    MigrationInterface,
    QueryRunner,
    TableColumn,
    TableForeignKey,
} from 'typeorm';

export class AddIdTipoPendenciaToPendencia1648582898399
    implements MigrationInterface
{
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'pendencia',
            new TableColumn({
                name: 'id_tipo_pendencia',
                type: 'uuid',
                isNullable: true,
            }),
        );
        await queryRunner.createForeignKey(
            'pendencia',
            new TableForeignKey({
                name: 'PendenciaTipoPendencia',
                columnNames: ['id_tipo_pendencia'],
                referencedTableName: 'tipo_pendencia',
                referencedColumnNames: ['id'],
                onDelete: 'SET NULL',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('pendencia', 'PendenciaTipoPendencia');
        await queryRunner.dropColumn('pendencia', 'id_tipo_pendencia');
    }
}
