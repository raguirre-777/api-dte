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
exports.Totales = void 0;
const typeorm_1 = require("typeorm");
const documento_entity_1 = require("./documento.entity");
let Totales = class Totales {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('increment'),
    __metadata("design:type", Number)
], Totales.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], Totales.prototype, "Neto", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], Totales.prototype, "Exento", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], Totales.prototype, "TasaIVA", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], Totales.prototype, "IVA", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], Totales.prototype, "MntTotal", void 0);
__decorate([
    typeorm_1.OneToOne(() => documento_entity_1.Documento, (Documento) => Documento.Totales, {}),
    typeorm_1.JoinColumn({ name: 'documento_id' }),
    __metadata("design:type", documento_entity_1.Documento)
], Totales.prototype, "Documento", void 0);
Totales = __decorate([
    typeorm_1.Entity('totales')
], Totales);
exports.Totales = Totales;
//# sourceMappingURL=totales.entity.js.map