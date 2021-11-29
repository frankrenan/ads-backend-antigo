import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Permissoes1637939280376 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "permissoes",
                columns: [
                    {
                        name: "id",
                        type: "varchar(200)",
                        isPrimary: true
                    },
                    {
                        name: "desc_permissao",
                        type: "enum('ADMINISTRADOR', 'PIRARUCU', 'BORRACHA', 'PIACAVA', 'DOACAO_ONEROSA', 'FEIRAS_E_EVENTOS','PREME_E_PAF', 'PROMOVE', 'JUTA_E_MALVA','PESCADO_SOLIDARIO')"
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
        await queryRunner.dropTable("permissoes");
    }

}
