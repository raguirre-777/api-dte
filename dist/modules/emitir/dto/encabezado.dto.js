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
exports.EncabezadoDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class EncabezadoDto {
    constructor() {
        this.toXml = () => {
            return `<Encabezado> 
            <CodDctoSap>` + this.folio + `</CodDctoSap> 
            <CodigoEmpresa>` + this.codigoEmpresa + `</CodigoEmpresa>
            <Resolucion>0` + this.resolucion + `</Resolucion>
            <TipoDocumento>` + this.tipoDocumento + `</TipoDocumento>
            <Folio>` + this.folio + `</Folio>
            <FechaEmision>` + this.fechaEmision + `</FechaEmision> 
            <FechaVencimiento>` + this.fechaVencimiento + `</FechaVencimiento> 
            <CodigoSucursal/> 
            <DireccionSucursal/>
            <ComunaSucursal/> 
            <CiudadSucursal/> 
            </Encabezado> `;
        };
    }
}
__decorate([
    swagger_1.ApiProperty({
        title: 'CodDctoSap',
        example: '5705',
    }),
    __metadata("design:type", String)
], EncabezadoDto.prototype, "codDctoSap", void 0);
__decorate([
    swagger_1.ApiProperty({
        title: 'Codigo de la Empresa (egt 25)',
        example: '25',
    }),
    __metadata("design:type", String)
], EncabezadoDto.prototype, "codigoEmpresa", void 0);
__decorate([
    swagger_1.ApiProperty({
        title: 'Resolucion',
        example: '0',
    }),
    __metadata("design:type", String)
], EncabezadoDto.prototype, "resolucion", void 0);
__decorate([
    swagger_1.ApiProperty({
        title: 'Tipo de Documento (33,39)',
        example: '39',
    }),
    __metadata("design:type", String)
], EncabezadoDto.prototype, "tipoDocumento", void 0);
__decorate([
    swagger_1.ApiProperty({
        title: 'Folio',
        example: '5705',
    }),
    __metadata("design:type", String)
], EncabezadoDto.prototype, "folio", void 0);
__decorate([
    swagger_1.ApiProperty({
        title: 'Fecha de Emision',
        example: '2019-09-26',
    }),
    __metadata("design:type", String)
], EncabezadoDto.prototype, "fechaEmision", void 0);
__decorate([
    swagger_1.ApiProperty({
        title: 'Fecha de Vencimiento',
        example: '2019-09-25',
    }),
    __metadata("design:type", String)
], EncabezadoDto.prototype, "fechaVencimiento", void 0);
exports.EncabezadoDto = EncabezadoDto;
//# sourceMappingURL=encabezado.dto.js.map