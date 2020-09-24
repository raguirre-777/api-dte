"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmitirModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const emitir_repository_1 = require("./emitir.repository");
const emitir_service_1 = require("./emitir.service");
const emitir_controller_1 = require("./emitir.controller");
let EmitirModule = class EmitirModule {
};
EmitirModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([emitir_repository_1.EmitirRepository])
        ],
        providers: [emitir_service_1.EmitirService],
        controllers: [emitir_controller_1.EmitirController],
    })
], EmitirModule);
exports.EmitirModule = EmitirModule;
//# sourceMappingURL=emitir.module.js.map