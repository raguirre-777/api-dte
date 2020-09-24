import { FolioRepository } from "./folio.repository";
import {
    Injectable,
    HttpException,
    HttpStatus,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Folio } from "./folio.entity";
import { Configuration } from '../../config/config.keys';
import { FolioDto } from "./folio.dto";


@Injectable()
export class FolioService {
    constructor(
        @InjectRepository(FolioRepository)
        private readonly _folioRepository: FolioRepository,
    ) { }

    async getAll(): Promise<Folio[]> {
        const folios: Folio[] = await this._folioRepository.find();

        return folios;
    }

    async create(tipo: number): Promise<any> { // 33 , 39 badrequet 400
        let f: FolioDto;
        if (tipo === 33 || tipo === 39) {
            const soap = require('strong-soap').soap;
            const url = Configuration.WSDL_FOLIO;
            const requestArgs = {
                empresa: Configuration.RUT_EGT,
                qty: Configuration.QTY,
                resolucion: tipo,
                token: Configuration.TOKEN_ENTEL,
            };
            const options = {};
            const resultado = await new Promise<any>((resolve: any) => {
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
                        } else {
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
                throw new HttpException(
                    {
                        status: HttpStatus.BAD_REQUEST,
                        error: resultado.message,
                    },
                    400,
                )
            }
            f = resultado.folio;
        } else {
            throw new HttpException(
                {
                    status: HttpStatus.BAD_REQUEST,
                    error: 'Error Tipo Documento. Debe ser Boleta o Factura (33/39)',
                },
                400,
            );
        }
        //     soap.createClient(url, options, function (err, client) {
        //         console.log(client);
        //         const method = client.getFolioBasic;
        //         method(requestArgs, function (err, result, envelope, soapHeader) {
        //             if (result.getFolioBasicResult.outResult) {
        //                 f = result.getFolioBasicResult;
        //                 console.log('-----TRUE------');
        //                 console.log(f);
        //             }
        //         });
        //     });
        // } else {
        //     throw new HttpException(
        //         {
        //             status: HttpStatus.BAD_REQUEST,
        //             error: 'Error Tipo Documento. Debe ser Boleta o Factura (33/39)',
        //         },
        //         400,
        //     );
        // }

        if (f == undefined || f == null) {
            throw new HttpException(
                {
                    status: HttpStatus.INTERNAL_SERVER_ERROR,
                    error: 'Error fatal',
                },
                404,
            );
        }
        const folio = { tipoDocumento: tipo, folioDocumento: f.description };
        return this._folioRepository.save(folio);
    }

    async update(id: number, folio: Folio): Promise<void> {
        await this._folioRepository.update(id, folio);
    }

}