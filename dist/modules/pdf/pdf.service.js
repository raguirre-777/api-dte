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
exports.PdfService = void 0;
const common_1 = require("@nestjs/common");
const pdf_repository_1 = require("./pdf.repository");
let PdfService = class PdfService {
    constructor(_pdfRepository) {
        this._pdfRepository = _pdfRepository;
    }
    async getAll() {
        const folios = await this._pdfRepository.find();
        return folios;
    }
};
PdfService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [pdf_repository_1.PdfRepository])
], PdfService);
exports.PdfService = PdfService;
//# sourceMappingURL=pdf.service.js.map