"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.as1597664138369 = void 0;
class as1597664138369 {
    constructor() {
        this.name = 'as1597664138369';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "emitir" RENAME COLUMN "folio" TO "documento_id"`);
        await queryRunner.query(`ALTER TABLE "emitir" DROP COLUMN "documento_id"`);
        await queryRunner.query(`ALTER TABLE "emitir" ADD "documento_id" integer`);
        await queryRunner.query(`ALTER TABLE "emitir" ADD CONSTRAINT "UQ_16e3f7e9238cd0b8a2962e29279" UNIQUE ("documento_id")`);
        await queryRunner.query(`ALTER TABLE "emitir" ADD CONSTRAINT "FK_16e3f7e9238cd0b8a2962e29279" FOREIGN KEY ("documento_id") REFERENCES "documento"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "emitir" DROP CONSTRAINT "FK_16e3f7e9238cd0b8a2962e29279"`);
        await queryRunner.query(`ALTER TABLE "emitir" DROP CONSTRAINT "UQ_16e3f7e9238cd0b8a2962e29279"`);
        await queryRunner.query(`ALTER TABLE "emitir" DROP COLUMN "documento_id"`);
        await queryRunner.query(`ALTER TABLE "emitir" ADD "documento_id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "emitir" RENAME COLUMN "documento_id" TO "folio"`);
    }
}
exports.as1597664138369 = as1597664138369;
//# sourceMappingURL=1597664138369-as.js.map