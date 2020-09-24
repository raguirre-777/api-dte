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
exports.DocumentoDto = void 0;
const encabezado_dto_1 = require("./encabezado.dto");
const receptor_dto_1 = require("./receptor.dto");
const exportacion_dto_1 = require("./exportacion.dto");
const detalle_dto_1 = require("./detalle.dto");
const totales_dto_1 = require("./totales.dto");
const otra_moneda_dto_1 = require("./otra-moneda.dto");
const despacho_dto_1 = require("./despacho.dto");
const personalizados_dto_1 = require("./personalizados.dto");
const swagger_1 = require("@nestjs/swagger");
class DocumentoDto {
    constructor() {
        this.toXml = () => {
            return `<Documento>
                            ` + this.encabezado.toXml + `
                            ` + this.receptor.toXml + `
                            ` + this.exportacion.toXml + `
                            ` + this.detalles.toXml + `
                            ` + this.totales.toXml + `
                            ` + this.otraMoneda.toXml + `
                            ` + this.despacho.toXml + `
                            ` + this.personalizados.toXml + `
                   </Documento>`;
        };
    }
}
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", encabezado_dto_1.EncabezadoDto)
], DocumentoDto.prototype, "encabezado", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", receptor_dto_1.ReceptorDto)
], DocumentoDto.prototype, "receptor", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", exportacion_dto_1.ExportacionDto)
], DocumentoDto.prototype, "exportacion", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", detalle_dto_1.DetalleDto)
], DocumentoDto.prototype, "detalles", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", totales_dto_1.TotalesDto)
], DocumentoDto.prototype, "totales", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", otra_moneda_dto_1.OtraMonedaDto)
], DocumentoDto.prototype, "otraMoneda", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", despacho_dto_1.DespachoDto)
], DocumentoDto.prototype, "despacho", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", personalizados_dto_1.PersonalizadosDto)
], DocumentoDto.prototype, "personalizados", void 0);
exports.DocumentoDto = DocumentoDto;
//# sourceMappingURL=documento.dto.js.map