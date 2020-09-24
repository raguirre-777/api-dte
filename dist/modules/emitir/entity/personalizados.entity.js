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
exports.Personalizados = void 0;
const typeorm_1 = require("typeorm");
const documento_entity_1 = require("./documento.entity");
let Personalizados = class Personalizados {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('increment'),
    __metadata("design:type", Number)
], Personalizados.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], Personalizados.prototype, "RequiereImpresion", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], Personalizados.prototype, "Cedible", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], Personalizados.prototype, "Impresora", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], Personalizados.prototype, "MontoLetras", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], Personalizados.prototype, "CuentaCorriente", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], Personalizados.prototype, "RutIva", void 0);
__decorate([
    typeorm_1.OneToOne(() => documento_entity_1.Documento, (Documento) => Documento.Personalizados, {}),
    typeorm_1.JoinColumn({ name: 'documento_id' }),
    __metadata("design:type", documento_entity_1.Documento)
], Personalizados.prototype, "Documento", void 0);
Personalizados = __decorate([
    typeorm_1.Entity('personalizados')
], Personalizados);
exports.Personalizados = Personalizados;
//# sourceMappingURL=personalizados.entity.js.map