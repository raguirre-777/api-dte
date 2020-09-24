import {MigrationInterface, QueryRunner} from "typeorm";

export class aaaa1600935967513 implements MigrationInterface {
    name = 'aaaa1600935967513'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "emitir" DROP CONSTRAINT "FK_16e3f7e9238cd0b8a2962e29279"`);
        await queryRunner.query(`ALTER TABLE "emitir" DROP CONSTRAINT "UQ_16e3f7e9238cd0b8a2962e29279"`);
        await queryRunner.query(`ALTER TABLE "emitir" DROP COLUMN "documento_id"`);
        await queryRunner.query(`ALTER TABLE "emitir" ADD "folio" character varying`);
        await queryRunner.query(`ALTER TABLE "emitir" ADD "estado" character varying`);
        await queryRunner.query(`ALTER TABLE "emitir" ADD "mensaje" character varying`);
        await queryRunner.query(`ALTER TABLE "emitir" ALTER COLUMN "tipoDocumento" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "emitir" ALTER COLUMN "tipoDocumento" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "emitir" DROP COLUMN "mensaje"`);
        await queryRunner.query(`ALTER TABLE "emitir" DROP COLUMN "estado"`);
        await queryRunner.query(`ALTER TABLE "emitir" DROP COLUMN "folio"`);
        await queryRunner.query(`ALTER TABLE "emitir" ADD "documento_id" integer`);
        await queryRunner.query(`ALTER TABLE "emitir" ADD CONSTRAINT "UQ_16e3f7e9238cd0b8a2962e29279" UNIQUE ("documento_id")`);
        await queryRunner.query(`ALTER TABLE "emitir" ADD CONSTRAINT "FK_16e3f7e9238cd0b8a2962e29279" FOREIGN KEY ("documento_id") REFERENCES "documento"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
