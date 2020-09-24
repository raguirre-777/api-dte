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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmitirController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const emitir_service_1 = require("./emitir.service");
let EmitirController = class EmitirController {
    constructor(_emitirService) {
        this._emitirService = _emitirService;
    }
    async getFolios() {
        const folios = await this._emitirService.getAll();
        return folios;
    }
    async create(tipo) {
        const createdFolio = await this._emitirService.create(tipo);
        return createdFolio;
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EmitirController.prototype, "getFolios", null);
__decorate([
    common_1.Post(':tipo'),
    __param(0, common_1.Param('tipo', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], EmitirController.prototype, "create", null);
EmitirController = __decorate([
    swagger_1.ApiTags('Emitir DTE'),
    common_1.Controller('emitir'),
    swagger_1.ApiBearerAuth(),
    __metadata("design:paramtypes", [emitir_service_1.EmitirService])
], EmitirController);
exports.EmitirController = EmitirController;
//# sourceMappingURL=emitir.controller.js.map