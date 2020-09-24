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
const swagger_1 = require("@nestjs/swagger");
class Encabezado {
    constructor() {
        this.xml = `<Encabezado> 
                            <CodDctoSap>` + this.folio + `</CodDctoSap> 
                            <CodigoEmpresa>25</CodigoEmpresa>
                            <Resolucion>0</Resolucion>
                            <TipoDocumento>33</TipoDocumento>
                            <Folio>` + this.folio + `</Folio>
                            <FechaEmision>2019-09-26</FechaEmision> 
                            <FechaVencimiento>2019-09-25</FechaVencimiento> 
                            <CodigoSucursal/> 
                            <DireccionSucursal/>
                            <ComunaSucursal/> 
                            <CiudadSucursal/> 
                        </Encabezado> `;
    }
}
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], Encabezado.prototype, "codDctoSap", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], Encabezado.prototype, "codigoEmpresa", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], Encabezado.prototype, "resolucion", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], Encabezado.prototype, "tipoDocumento", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], Encabezado.prototype, "folio", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], Encabezado.prototype, "fechaEmision", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], Encabezado.prototype, "fechaVencimiento", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], Encabezado.prototype, "codigoSucursal", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], Encabezado.prototype, "direccionSucursal", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], Encabezado.prototype, "comunaSucursal", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], Encabezado.prototype, "ciudadSucursal", void 0);
exports.Encabezado = Encabezado;
//# sourceMappingURL=encabezado.dto.js.map