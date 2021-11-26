import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Administrador1637006612072 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "administrador",
                columns: [
                    {
                        name: "id",
                        type: "varchar(200)",
                        isPrimary: true
                    },
                    {
                        name: "id_perfil",
                        type: "varchar(200)",
                    },
                    {
                        name: "id_conta",
                        type: "varchar(200)",
                    },
                    {
                        name: "cpf_conta",
                        type: "varchar"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ],
                foreignKeys: [
                    {
                        name: "FKAdministradorPerfil",
                        referencedTableName: "perfil",
                        referencedColumnNames: ["id"],
                        columnNames: ["id_perfil"],
                    },
                    {
                        name: "FKAdministradorConta",
                        referencedTableName: "conta",
                        referencedColumnNames: ["id", "cpf"],
                        columnNames: ["id_conta", "cpf_conta"]
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('administrador');
    }

}
