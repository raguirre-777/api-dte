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
exports.PersonalizadosDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class PersonalizadosDto {
    constructor() {
        this.toXml = () => {
            return `<Personalizados> 
                        <RequiereImpresion>` + this.requiereImpresion + `</RequiereImpresion> 
                        <Cedible>` + this.cedible + `</Cedible> 
                        <Impresora>` + this.impresora + `</Impresora> 
                        <MontoLetras>` + this.montoLetras + `</MontoLetras> 
                        <CuentaCorriente>` + this.cuentaCorriente + `</CuentaCorriente> 
                    </Personalizados> `;
        };
    }
}
__decorate([
    swagger_1.ApiProperty({
        title: 'Requiere Impresora (N,S)',
        example: 'N',
    }),
    __metadata("design:type", String)
], PersonalizadosDto.prototype, "requiereImpresion", void 0);
__decorate([
    swagger_1.ApiProperty({
        title: 'Cedible (N,S)',
        example: 'S',
    }),
    __metadata("design:type", String)
], PersonalizadosDto.prototype, "cedible", void 0);
__decorate([
    swagger_1.ApiProperty({
        title: 'Impresora',
        example: 'LP01',
    }),
    __metadata("design:type", String)
], PersonalizadosDto.prototype, "impresora", void 0);
__decorate([
    swagger_1.ApiProperty({
        title: 'Monto dinero con letras',
        example: 'CIENTO DOS MIL CUATROCIENTOS SETENTA Y TRES',
    }),
    __metadata("design:type", String)
], PersonalizadosDto.prototype, "montoLetras", void 0);
__decorate([
    swagger_1.ApiProperty({
        title: 'Cuenta Corriente',
        example: '409313',
    }),
    __metadata("design:type", String)
], PersonalizadosDto.prototype, "cuentaCorriente", void 0);
exports.PersonalizadosDto = PersonalizadosDto;
//# sourceMappingURL=personalizados.dto.js.map