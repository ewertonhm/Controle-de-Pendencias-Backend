import {
    MigrationInterface,
    QueryRunner,
    TableColumn,
    TableForeignKey,
} from 'typeorm';

export class AddIdUsuarioToAndamento1648658627274
    implements MigrationInterface
{
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'andamento',
            new TableColumn({
                name: 'id_usuario',
                type: 'uuid',
                isNullable: true,
            }),
        );
        await queryRunner.createForeignKey(
            'andamento',
            new TableForeignKey({
                name: 'AndamentoUsuario',
                columnNames: ['id_usuario'],
                referencedTableName: 'usuario',
                referencedColumnNames: ['id'],
                onDelete: 'SET NULL',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('andamento', 'AndamentoUsuario');
        await queryRunner.dropColumn('andamento', 'id_usuario');
    }
}
