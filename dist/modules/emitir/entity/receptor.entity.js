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
exports.Receptor = void 0;
const typeorm_1 = require("typeorm");
const documento_entity_1 = require("./documento.entity");
let Receptor = class Receptor {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('increment'),
    __metadata("design:type", Number)
], Receptor.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], Receptor.prototype, "Rut", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], Receptor.prototype, "CodigoCliente", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], Receptor.prototype, "Nombre", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], Receptor.prototype, "Direccion", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], Receptor.prototype, "Comuna", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], Receptor.prototype, "Ciudad", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], Receptor.prototype, "Giro", void 0);
__decorate([
    typeorm_1.OneToOne(() => documento_entity_1.Documento, (Documento) => Documento.Receptor, {}),
    typeorm_1.JoinColumn({ name: 'documento_id' }),
    __metadata("design:type", documento_entity_1.Documento)
], Receptor.prototype, "Documento", void 0);
Receptor = __decorate([
    typeorm_1.Entity('receptor')
], Receptor);
exports.Receptor = Receptor;
//# sourceMappingURL=receptor.entity.js.map