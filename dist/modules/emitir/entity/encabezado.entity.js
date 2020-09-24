"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Encabezado = void 0;
const typeorm_1 = require("typeorm");
const documento_entity_1 = require("./documento.entity");
let Encabezado = class Encabezado {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('increment'),
    __metadata("design:type", Number)
], Encabezado.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], Encabezado.prototype, "CodDctoSap", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], Encabezado.prototype, "CodigoEmpresa", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], Encabezado.prototype, "Resolucion", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], Encabezado.prototype, "TipoDocumento", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], Encabezado.prototype, "Folio", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], Encabezado.prototype, "FechaEmision", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], Encabezado.prototype, "FechaVencimiento", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], Encabezado.prototype, "CodigoSucursal", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], Encabezado.prototype, "DireccionSucursal", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], Encabezado.prototype, "ComunaSucursal", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], Encabezado.prototype, "CiudadSucursal", void 0);
__decorate([
    typeorm_1.OneToOne(() => documento_entity_1.Documento, (Documento) => Documento.Encabezado, {}),
    typeorm_1.JoinColumn({ name: 'documento_id' }),
    __metadata("design:type", documento_entity_1.Documento)
], Encabezado.prototype, "Documento", void 0);
Encabezado = __decorate([
    typeorm_1.Entity('encabezado')
], Encabezado);
exports.Encabezado = Encabezado;
//# sourceMappingURL=encabezado.entity.js.map