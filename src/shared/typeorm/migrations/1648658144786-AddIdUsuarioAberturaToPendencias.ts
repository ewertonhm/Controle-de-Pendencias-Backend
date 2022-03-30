import {
    MigrationInterface,
    QueryRunner,
    TableColumn,
    TableForeignKey,
} from 'typeorm';

export class AddIdUsuarioAberturaToPendencias1648658144786
    implements MigrationInterface
{
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'pendencia',
            new TableColumn({
                name: 'id_usuario_abertura',
                type: 'uuid',
                isNullable: true,
            }),
        );
        await queryRunner.createForeignKey(
            'pendencia',
            new TableForeignKey({
                name: 'UsuarioPendenciaAbertura',
                columnNames: ['id_usuario_abertura'],
                referencedTableName: 'usuario',
                referencedColumnNames: ['id'],
                onDelete: 'SET NULL',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey(
            'pendencia',
            'UsuarioPendenciaAbertura',
        );
        await queryRunner.dropColumn('pendencia', 'id_usuario_abertura');
    }
}
