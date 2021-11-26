import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Conta1636999806175 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "conta",
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
                        type: "varchar",
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
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('conta');
    }

}
