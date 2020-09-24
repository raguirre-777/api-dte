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
exports.Documento = void 0;
const encabezado_entity_1 = require("./encabezado.entity");
const receptor_entity_1 = require("./receptor.entity");
const exportacion_entity_1 = require("./exportacion.entity");
const detalle_entity_1 = require("./detalle.entity");
const totales_entity_1 = require("./totales.entity");
const otra_moneda_entity_1 = require("./otra.moneda.entity");
const despacho_entity_1 = require("./despacho.entity");
const personalizados_entity_1 = require("./personalizados.entity");
const typeorm_1 = require("typeorm");
const emitir_entity_1 = require("../emitir.entity");
let Documento = class Documento {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('increment'),
    __metadata("design:type", Number)
], Documento.prototype, "id", void 0);
__decorate([
    typeorm_1.OneToOne(() => encabezado_entity_1.Encabezado, (Encabezado) => Encabezado.Documento),
    __metadata("design:type", encabezado_entity_1.Encabezado)
], Documento.prototype, "Encabezado", void 0);
__decorate([
    typeorm_1.OneToOne(() => receptor_entity_1.Receptor, (Receptor) => Receptor.Documento),
    __metadata("design:type", receptor_entity_1.Receptor)
], Documento.prototype, "Receptor", void 0);
__decorate([
    typeorm_1.OneToOne(() => exportacion_entity_1.Exportacion, (Exportacion) => Exportacion.Documento),
    __metadata("design:type", exportacion_entity_1.Exportacion)
], Documento.prototype, "Exportacion", void 0);
__decorate([
    typeorm_1.OneToMany(() => detalle_entity_1.Detalle, (Detalle) => Detalle.Documento, {}),
    __metadata("design:type", Array)
], Documento.prototype, "Detalle", void 0);
__decorate([
    typeorm_1.OneToOne(() => totales_entity_1.Totales, (Totales) => Totales.Documento),
    __metadata("design:type", totales_entity_1.Totales)
], Documento.prototype, "Totales", void 0);
__decorate([
    typeorm_1.OneToOne(() => otra_moneda_entity_1.OtraMoneda, (OtraMoneda) => OtraMoneda.Documento),
    __metadata("design:type", otra_moneda_entity_1.OtraMoneda)
], Documento.prototype, "OtraMoneda", void 0);
__decorate([
    typeorm_1.OneToOne(() => despacho_entity_1.Despacho, (Despacho) => Despacho.Documento),
    __metadata("design:type", despacho_entity_1.Despacho)
], Documento.prototype, "Despacho", void 0);
__decorate([
    typeorm_1.OneToOne(() => personalizados_entity_1.Personalizados, (Personalizados) => Personalizados.Documento),
    __metadata("design:type", personalizados_entity_1.Personalizados)
], Documento.prototype, "Personalizados", void 0);
__decorate([
    typeorm_1.OneToOne(() => emitir_entity_1.Emitir, (emitir) => emitir.documento),
    __metadata("design:type", emitir_entity_1.Emitir)
], Documento.prototype, "emitir", void 0);
Documento = __decorate([
    typeorm_1.Entity('documento')
], Documento);
exports.Documento = Documento;
//# sourceMappingURL=documento.entity.js.map