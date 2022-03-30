import {
    MigrationInterface,
    QueryRunner,
    TableColumn,
    TableForeignKey,
} from 'typeorm';

export class AddIdUsuarioFechamentoToPendencias1648658155997
    implements MigrationInterface
{
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'pendencia',
            new TableColumn({
                name: 'id_usuario_fechamento',
                type: 'uuid',
                isNullable: true,
            }),
        );
        await queryRunner.createForeignKey(
            'pendencia',
            new TableForeignKey({
                name: 'UsuarioPendenciaFechamento',
                columnNames: ['id_usuario_fechamento'],
                referencedTableName: 'usuario',
                referencedColumnNames: ['id'],
                onDelete: 'SET NULL',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey(
            'pendencia',
            'UsuarioPendenciaFechamento',
        );
        await queryRunner.dropColumn('pendencia', 'id_usuario_fechamento');
    }
}
