import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Perfil1637002773207 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "perfil",
                columns: [
                    {
                        name: "id",
                        type: "varchar(200)",
                        isPrimary: true
                    },
                    {
                        name: "tipo_perfil",
                        type: "enum('ADMINISTRADOR', 'PREMEPAF', 'PIRARUCU')"
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
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('perfil');
    }

}
