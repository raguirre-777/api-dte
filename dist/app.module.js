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
var AppModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_module_1 = require("./config/config.module");
const config_service_1 = require("./config/config.service");
const database_module_1 = require("./database/database.module");
const emitir_module_1 = require("./modules/emitir/emitir.module");
const folio_module_1 = require("./modules/folio/folio.module");
const pdf_module_1 = require("./modules/pdf/pdf.module");
let AppModule = AppModule_1 = class AppModule {
    constructor(_configService) {
        this._configService = _configService;
        AppModule_1.port = this._configService.get('PORT');
    }
};
AppModule = AppModule_1 = __decorate([
    common_1.Module({
        imports: [config_module_1.ConfigModule, database_module_1.DatabaseModule, emitir_module_1.EmitirModule, folio_module_1.FolioModule, pdf_module_1.PdfModule],
    }),
    __metadata("design:paramtypes", [config_service_1.ConfigService])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map