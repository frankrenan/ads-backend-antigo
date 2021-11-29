import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class UsuarioPermissao1638204577932 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "usuario_permissao",
                columns: [
                    {
                        name: "id",
                        type: "varchar",
                        isPrimary: true
                    },
                    {
                        name: "id_usuario",
                        type: "varchar(200)"
                    },
                    {
                        name: "id_permissao",
                        type: "varchar(200)"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ],
                foreignKeys: [
                    {
                        name: "FKUsuarioPermissoesID",
                        referencedTableName: "usuarios",
                        referencedColumnNames: ["id"],
                        columnNames: ["id_usuario"]
                    },
                    {
                        name: "FKPermissaoUsuarioID",
                        referencedTableName: "permissoes",
                        referencedColumnNames: ["id"],
                        columnNames: ["id_permissao"]
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("usuario_permissao");
    }

}
