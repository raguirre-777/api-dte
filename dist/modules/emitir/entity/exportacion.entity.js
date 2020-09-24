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
exports.Exportacion = void 0;
const typeorm_1 = require("typeorm");
const documento_entity_1 = require("./documento.entity");
let Exportacion = class Exportacion {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('increment'),
    __metadata("design:type", Number)
], Exportacion.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], Exportacion.prototype, "CodigoTransporte", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], Exportacion.prototype, "CodigoPaisReceptor", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], Exportacion.prototype, "CodigoPaisDestino", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], Exportacion.prototype, "TotalProductos", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], Exportacion.prototype, "TipoMoneda", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], Exportacion.prototype, "TipoCambio", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], Exportacion.prototype, "TotalMonedaExtranjera", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], Exportacion.prototype, "Origen", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], Exportacion.prototype, "Destino", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], Exportacion.prototype, "Operacion", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], Exportacion.prototype, "HblAwb", void 0);
__decorate([
    typeorm_1.OneToOne(() => documento_entity_1.Documento, (Documento) => Documento.Exportacion, {}),
    typeorm_1.JoinColumn({ name: 'documento_id' }),
    __metadata("design:type", documento_entity_1.Documento)
], Exportacion.prototype, "Documento", void 0);
Exportacion = __decorate([
    typeorm_1.Entity('exportacion')
], Exportacion);
exports.Exportacion = Exportacion;
//# sourceMappingURL=exportacion.entity.js.map