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
exports.TotalesDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class TotalesDto {
    constructor() {
        this.toXml = () => {
            return ` <Totales> 
                            <Neto>` + this.neto + `</Neto> 
                            <Exento>` + this.exento + `</Exento> 
                            <TasaIVA>` + this.tasaIVA + `</TasaIVA> 
                            <IVA>` + this.iva + `</IVA> 
                            <MntTotal>` + this.mntTotal + `</MntTotal> 
                        </Totales> `;
        };
    }
}
__decorate([
    swagger_1.ApiProperty({
        title: 'Total Neto',
        example: '86112',
    }),
    __metadata("design:type", String)
], TotalesDto.prototype, "neto", void 0);
__decorate([
    swagger_1.ApiProperty({
        title: 'Total Exento',
        example: '0',
    }),
    __metadata("design:type", String)
], TotalesDto.prototype, "exento", void 0);
__decorate([
    swagger_1.ApiProperty({
        title: 'Total TasaIVA',
        example: '19',
    }),
    __metadata("design:type", String)
], TotalesDto.prototype, "tasaIVA", void 0);
__decorate([
    swagger_1.ApiProperty({
        title: 'Total IVA',
        example: '16361',
    }),
    __metadata("design:type", String)
], TotalesDto.prototype, "iva", void 0);
__decorate([
    swagger_1.ApiProperty({
        title: 'Total MntTotal',
        example: '102473',
    }),
    __metadata("design:type", String)
], TotalesDto.prototype, "mntTotal", void 0);
exports.TotalesDto = TotalesDto;
//# sourceMappingURL=totales.dto.js.map