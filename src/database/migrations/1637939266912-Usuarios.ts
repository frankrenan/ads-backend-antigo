import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Usuarios1637939266912 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "usuarios",
                columns: [
                    {
                        name: "id",
                        type: "varchar(200)",
                        isPrimary: true
                    },
                    {
                        name: "cpf",
                        type: "varchar",
                        isPrimary: true
                    },
                    {
                        name: "senha",
                        type: "varchar(200)",
                    },
                    {
                        name: "nome",
                        type: "varchar"
                    },
                    {
                        name: "administrador",
                        type: "boolean",
                        isNullable: true,
                        default: false
                    },
                    {
                        name: "email",
                        type: "varchar(200)",
                        isUnique: true
                    },
                    {
                        name: "ativo",
                        type: "boolean",
                        default: true
                    },
                    {
                        name: "matricula",
                        type: "varchar(12)",
                        isUnique: true
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
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("usuarios");
    }

}
