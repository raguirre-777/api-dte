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
exports.DetalleDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class DetalleDto {
    constructor() {
        this.toXml = () => {
            return `<Detalle> 
        <Linea>` + this.linea + `</Linea> 
        <TipoDocumentoLiquidado/> 
        <DetalleProducto>` + this.detalleProducto + `</DetalleProducto> 
        <Cantidad/> 
        <PrecioUnitario/> 
        <PrecioDolar/> 
        <TotalLinea/> 
        <IndicaorRetenedor/> 
        <CodigoImpuestoAdicional/> 
    </Detalle> `;
        };
    }
}
__decorate([
    swagger_1.ApiProperty({
        title: 'Linea',
        example: '2',
    }),
    __metadata("design:type", String)
], DetalleDto.prototype, "linea", void 0);
__decorate([
    swagger_1.ApiProperty({
        title: 'Detalle de Producto',
        example: 'UBER',
    }),
    __metadata("design:type", String)
], DetalleDto.prototype, "detalleProducto", void 0);
exports.DetalleDto = DetalleDto;
//# sourceMappingURL=detalle.dto.js.map