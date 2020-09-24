import {MigrationInterface, QueryRunner} from "typeorm";

export class as1597664138369 implements MigrationInterface {
    name = 'as1597664138369'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "emitir" RENAME COLUMN "folio" TO "documento_id"`);
        await queryRunner.query(`ALTER TABLE "emitir" DROP COLUMN "documento_id"`);
        await queryRunner.query(`ALTER TABLE "emitir" ADD "documento_id" integer`);
        await queryRunner.query(`ALTER TABLE "emitir" ADD CONSTRAINT "UQ_16e3f7e9238cd0b8a2962e29279" UNIQUE ("documento_id")`);
        await queryRunner.query(`ALTER TABLE "emitir" ADD CONSTRAINT "FK_16e3f7e9238cd0b8a2962e29279" FOREIGN KEY ("documento_id") REFERENCES "documento"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "emitir" DROP CONSTRAINT "FK_16e3f7e9238cd0b8a2962e29279"`);
        await queryRunner.query(`ALTER TABLE "emitir" DROP CONSTRAINT "UQ_16e3f7e9238cd0b8a2962e29279"`);
        await queryRunner.query(`ALTER TABLE "emitir" DROP COLUMN "documento_id"`);
        await queryRunner.query(`ALTER TABLE "emitir" ADD "documento_id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "emitir" RENAME COLUMN "documento_id" TO "folio"`);
    }

}
