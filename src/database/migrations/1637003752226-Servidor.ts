import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Servidor1637003752226 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "servidor",
                columns: [
                    {
                        name: "id",
                        type: "varchar(200)",
                        isPrimary: true
                    },
                    {
                        name: "id_conta",
                        type: "varchar(200)",
                    },
                    {
                        name: "cpf_conta",
                        type: "varchar",
                    },
                    {
                        name: "id_perfil",
                        type: "varchar(200)"
                    },
                    {
                        name: "nome",
                        type: "varchar"
                    },
                    {
                        name: "matricula",
                        type: "varchar(12)"
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: "now()"
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: "now()"
                    }
                ],
                foreignKeys: [
                    {
                        name: "FKServidorConta",
                        referencedTableName: "conta",
                        referencedColumnNames: ["id", "cpf"],
                        columnNames: ["id_conta", "cpf_conta"],      
                    },
                    {
                        name: "FKServidorPerfil",
                        referencedTableName: "perfil",
                        referencedColumnNames: ["id"],
                        columnNames: ["id_perfil"],  
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('servidor');
    }

}
