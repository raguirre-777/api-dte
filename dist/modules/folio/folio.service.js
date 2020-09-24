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
exports.FolioService = void 0;
const folio_repository_1 = require("./folio.repository");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const config_keys_1 = require("../../config/config.keys");
let FolioService = class FolioService {
    constructor(_folioRepository) {
        this._folioRepository = _folioRepository;
    }
    async getAll() {
        const folios = await this._folioRepository.find();
        return folios;
    }
    async create(tipo) {
        let f;
        if (tipo === 33 || tipo === 39) {
            const soap = require('strong-soap').soap;
            const url = config_keys_1.Configuration.WSDL_FOLIO;
            const requestArgs = {
                empresa: config_keys_1.Configuration.RUT_EGT,
                qty: config_keys_1.Configuration.QTY,
                resolucion: tipo,
                token: config_keys_1.Configuration.TOKEN_ENTEL,
            };
            const options = {};
            const resultado = await new Promise((resolve) => {
                soap.createClient(url, options, function (err, client) {
                    if (err) {
                        resolve({
                            error: true,
                            message: err,
                            folio: 0,
                        });
                        return;
                    }
                    const method = client.getFolioBasic;
                    method(requestArgs, function (err, result, envelope, soapHeader) {
                        if (err) {
                            resolve({
                                error: true,
                                message: err,
                                folio: 0,
                            });
                        }
                        if (result.getFolioBasicResult.outResult) {
                            resolve({
                                error: false,
                                message: 'Folio cargado con exito',
                                folio: result.getFolioBasicResult,
                            });
                        }
                        else {
                            resolve({
                                error: true,
                                message: 'No fue posible cargar folio',
                                folio: 0,
                            });
                        }
                    });
                });
            });
            if (resultado.error) {
                throw new common_1.HttpException({
                    status: common_1.HttpStatus.BAD_REQUEST,
                    error: resultado.message,
                }, 400);
            }
            f = resultado.folio;
        }
        else {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.BAD_REQUEST,
                error: 'Error Tipo Documento. Debe ser Boleta o Factura (33/39)',
            }, 400);
        }
        if (f == undefined || f == null) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                error: 'Error fatal',
            }, 404);
        }
        const folio = { tipoDocumento: tipo, folioDocumento: f.description };
        return this._folioRepository.save(folio);
    }
    async update(id, folio) {
        await this._folioRepository.update(id, folio);
    }
};
FolioService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(folio_repository_1.FolioRepository)),
    __metadata("design:paramtypes", [folio_repository_1.FolioRepository])
], FolioService);
exports.FolioService = FolioService;
//# sourceMappingURL=folio.service.js.map