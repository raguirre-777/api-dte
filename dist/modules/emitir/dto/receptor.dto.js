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
exports.ReceptorDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class ReceptorDto {
    constructor() {
        this.toXml = () => {
            return `    <Receptor> 
                            <Rut>` + this.rut + `</Rut> 
                            <CodigoCliente>` + this.codigoCliente + `</CodigoCliente> 
                            <Nombre>` + this.nombre + `</Nombre> 
                            <Direccion> ` + this.direccion + `</Direccion> 
                            <Comuna>` + this.comuna + `</Comuna> 
                            <Ciudad>` + this.ciudad + `</Ciudad> 
                            <Giro>` + this.giro + `</Giro> 
                        </Receptor> `;
        };
    }
}
__decorate([
    swagger_1.ApiProperty({
        title: 'Rut Receptor',
        example: '96570750-6',
    }),
    __metadata("design:type", String)
], ReceptorDto.prototype, "rut", void 0);
__decorate([
    swagger_1.ApiProperty({
        title: 'Código Cliente',
        example: '0000409313',
    }),
    __metadata("design:type", String)
], ReceptorDto.prototype, "codigoCliente", void 0);
__decorate([
    swagger_1.ApiProperty({
        title: 'Nombre Cliente',
        example: 'DSV AIR',
    }),
    __metadata("design:type", String)
], ReceptorDto.prototype, "nombre", void 0);
__decorate([
    swagger_1.ApiProperty({
        title: 'Dirección Cliente',
        example: 'ANDRES BELLO 2687, PISO 14',
    }),
    __metadata("design:type", String)
], ReceptorDto.prototype, "direccion", void 0);
__decorate([
    swagger_1.ApiProperty({
        title: 'Comuna Cliente',
        example: 'SANTIAGO',
    }),
    __metadata("design:type", String)
], ReceptorDto.prototype, "comuna", void 0);
__decorate([
    swagger_1.ApiProperty({
        title: 'Ciudad Cliente',
        example: 'LAS CONDES',
    }),
    __metadata("design:type", String)
], ReceptorDto.prototype, "ciudad", void 0);
__decorate([
    swagger_1.ApiProperty({
        title: 'Giro Cliente',
        example: 'CARGA TRANSPORTE REGULAR',
    }),
    __metadata("design:type", String)
], ReceptorDto.prototype, "giro", void 0);
exports.ReceptorDto = ReceptorDto;
//# sourceMappingURL=receptor.dto.js.map