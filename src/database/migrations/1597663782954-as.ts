import {MigrationInterface, QueryRunner} from "typeorm";

export class as1597663782954 implements MigrationInterface {
    name = 'as1597663782954'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "encabezado" ("id" SERIAL NOT NULL, "CodDctoSap" character varying, "CodigoEmpresa" character varying, "Resolucion" character varying, "TipoDocumento" character varying, "Folio" character varying, "FechaEmision" character varying, "FechaVencimiento" character varying, "CodigoSucursal" character varying, "DireccionSucursal" character varying, "ComunaSucursal" character varying, "CiudadSucursal" character varying, "documento_id" integer, CONSTRAINT "REL_3d592443affd339dff92296418" UNIQUE ("documento_id"), CONSTRAINT "PK_7d62d0d1a00966a3c85195f2cda" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "receptor" ("id" SERIAL NOT NULL, "Rut" character varying, "CodigoCliente" character varying, "Nombre" character varying, "Direccion" character varying, "Comuna" character varying, "Ciudad" character varying, "Giro" character varying, "documento_id" integer, CONSTRAINT "REL_bf08ef2a4ffd2c67779d876c05" UNIQUE ("documento_id"), CONSTRAINT "PK_5287651399f92c6cb0012ad3a16" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "exportacion" ("id" SERIAL NOT NULL, "CodigoTransporte" character varying, "CodigoPaisReceptor" character varying, "CodigoPaisDestino" character varying, "TotalProductos" character varying, "TipoMoneda" character varying, "TipoCambio" character varying, "TotalMonedaExtranjera" character varying, "Origen" character varying, "Destino" character varying, "Operacion" character varying, "HblAwb" character varying, "documento_id" integer, CONSTRAINT "REL_27fc1333438b66dc999adab302" UNIQUE ("documento_id"), CONSTRAINT "PK_383b8d4e885a2595419fb37280e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "detalle" ("id" SERIAL NOT NULL, "Linea" character varying, "TipoDocumentoLiquidado" character varying, "DetalleProducto" character varying, "Cantidad" character varying, "PrecioUnitario" character varying, "PrecioDolar" character varying, "TotalLinea" character varying, "IndicaorRetenedor" character varying, "CodigoImpuestoAdicional" character varying, "documento_id" integer, CONSTRAINT "PK_3343de9a42dc2c61dfb58699dff" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "totales" ("id" SERIAL NOT NULL, "Neto" character varying, "Exento" character varying, "TasaIVA" character varying, "IVA" character varying, "MntTotal" character varying, "documento_id" integer, CONSTRAINT "REL_bb6d58e9ba0e0634f3ea194854" UNIQUE ("documento_id"), CONSTRAINT "PK_1cd4a91b8056b75dd6dcd75d217" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "otra_moneda" ("id" SERIAL NOT NULL, "TipoMoneda" character varying, "TipoCambio" character varying, "TotalOtraMoneda" character varying, "documento_id" integer, CONSTRAINT "REL_9fc93b025b65a56f69ee35ae9c" UNIQUE ("documento_id"), CONSTRAINT "PK_6e3336b50d1dfd25285b034b41d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "personalizados" ("id" SERIAL NOT NULL, "RequiereImpresion" character varying, "Cedible" character varying, "Impresora" character varying, "MontoLetras" character varying, "CuentaCorriente" character varying, "RutIva" character varying, "documento_id" integer, CONSTRAINT "REL_496a807e3921fb4eaa833a18be" UNIQUE ("documento_id"), CONSTRAINT "PK_4e8fb1884a1fc3666e901e7ca84" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "documento" ("id" SERIAL NOT NULL, CONSTRAINT "PK_14a00534ba5a1136f420342c965" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "despacho" ("id" SERIAL NOT NULL, "IndicadorTraslado" character varying, "DireccionDestino" character varying, "ComunaDestino" character varying, "CiudadDestino" character varying, "Patente" character varying, "Chofer" character varying, "documento_id" integer, CONSTRAINT "REL_8e2375193ae1fe39b0a72a051c" UNIQUE ("documento_id"), CONSTRAINT "PK_7173d81c4956b1a2c21c30d447d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "encabezado" ADD CONSTRAINT "FK_3d592443affd339dff92296418d" FOREIGN KEY ("documento_id") REFERENCES "documento"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "receptor" ADD CONSTRAINT "FK_bf08ef2a4ffd2c67779d876c051" FOREIGN KEY ("documento_id") REFERENCES "documento"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "exportacion" ADD CONSTRAINT "FK_27fc1333438b66dc999adab3022" FOREIGN KEY ("documento_id") REFERENCES "documento"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "detalle" ADD CONSTRAINT "FK_42c74f9d1d39b6445accb0a4b3a" FOREIGN KEY ("documento_id") REFERENCES "documento"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "totales" ADD CONSTRAINT "FK_bb6d58e9ba0e0634f3ea1948544" FOREIGN KEY ("documento_id") REFERENCES "documento"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "otra_moneda" ADD CONSTRAINT "FK_9fc93b025b65a56f69ee35ae9c9" FOREIGN KEY ("documento_id") REFERENCES "documento"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "personalizados" ADD CONSTRAINT "FK_496a807e3921fb4eaa833a18be4" FOREIGN KEY ("documento_id") REFERENCES "documento"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "despacho" ADD CONSTRAINT "FK_8e2375193ae1fe39b0a72a051c1" FOREIGN KEY ("documento_id") REFERENCES "documento"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "despacho" DROP CONSTRAINT "FK_8e2375193ae1fe39b0a72a051c1"`);
        await queryRunner.query(`ALTER TABLE "personalizados" DROP CONSTRAINT "FK_496a807e3921fb4eaa833a18be4"`);
        await queryRunner.query(`ALTER TABLE "otra_moneda" DROP CONSTRAINT "FK_9fc93b025b65a56f69ee35ae9c9"`);
        await queryRunner.query(`ALTER TABLE "totales" DROP CONSTRAINT "FK_bb6d58e9ba0e0634f3ea1948544"`);
        await queryRunner.query(`ALTER TABLE "detalle" DROP CONSTRAINT "FK_42c74f9d1d39b6445accb0a4b3a"`);
        await queryRunner.query(`ALTER TABLE "exportacion" DROP CONSTRAINT "FK_27fc1333438b66dc999adab3022"`);
        await queryRunner.query(`ALTER TABLE "receptor" DROP CONSTRAINT "FK_bf08ef2a4ffd2c67779d876c051"`);
        await queryRunner.query(`ALTER TABLE "encabezado" DROP CONSTRAINT "FK_3d592443affd339dff92296418d"`);
        await queryRunner.query(`DROP TABLE "despacho"`);
        await queryRunner.query(`DROP TABLE "documento"`);
        await queryRunner.query(`DROP TABLE "personalizados"`);
        await queryRunner.query(`DROP TABLE "otra_moneda"`);
        await queryRunner.query(`DROP TABLE "totales"`);
        await queryRunner.query(`DROP TABLE "detalle"`);
        await queryRunner.query(`DROP TABLE "exportacion"`);
        await queryRunner.query(`DROP TABLE "receptor"`);
        await queryRunner.query(`DROP TABLE "encabezado"`);
    }

}
