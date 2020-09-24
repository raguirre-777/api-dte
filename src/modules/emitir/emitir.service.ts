import {
    HttpException,
    HttpStatus,
    Injectable,
} from '@nestjs/common';
import { EmitirRepository } from './emitir.repository';
import { Emitir } from './emitir.entity';
import { Configuration } from '../../config/config.keys';
import { DocumentoDto } from './dto/documento.dto';
import { FolioService } from '../folio/folio.service';
import { Folio } from '../folio/folio.entity';

@Injectable()
export class EmitirService {
    constructor(
        private readonly _emitirRepository: EmitirRepository,
        private readonly _folioService: FolioService,
    ) { }

    async create(documento: DocumentoDto): Promise<Emitir> {
        const tipoDocto = Number(documento.encabezado.tipoDocumento);
        const folio: Folio = await this._folioService.create(tipoDocto);
        documento.encabezado.folio = "" + folio.folioDocumento;
        console.log("documento xml ")
        console.log(documento.despacho.toXml)
        const xml =
            `<![CDATA[
                    `+ documento.encabezado.toXml + `
            ]]>`;
        const options = {};
        const soap = require('strong-soap').soap;
        const url = Configuration.WSDL_DOCUMENTO;
        const requestArgs = {
            XmlEntrada: xml
        };
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
                const method = client.RecepcionXml;
                method(requestArgs, function (err, result, envelope, soapHeader) {
                    if (err) {
                        resolve({
                            error: true,
                            message: err,
                            folio: 0,
                        });
                    }
                    if (result.RecepcionXmlResult) {
                        resolve({
                            error: false,
                            message: 'Emitir cargado con exito',
                            folio: result.Folio,
                            mensaje: result.Mensaje,
                        });
                    } else {
                        resolve({
                            error: true,
                            message: 'No fue posible emitir',
                            folio: 0,
                        });
                    }
                    console.log('-----TRUE------');
                    console.log(result);
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

        // console.log(resultado);
        //     const documento = { tipoDocumento: tipo, folioDocumento: '' };
        //     return await this._emitirRepository.save(documento);

        // let documentoSave = await this._emitirRepository.save(f);
        return null;

    }

















    //async create(tipo: any): Promise<Emitir> {
    //     const encabezado = `  <Encabezado> 
    //                             <CodDctoSap>5705</CodDctoSap> 
    //                             <CodigoEmpresa>25</CodigoEmpresa>
    //                             <Resolucion>0</Resolucion>
    //                             <TipoDocumento>33</TipoDocumento>
    //                             <Folio>5705</Folio>
    //                             <FechaEmision>2019-09-26</FechaEmision> 
    //                             <FechaVencimiento>2019-09-25</FechaVencimiento> 
    //                             <CodigoSucursal/> 
    //                             <DireccionSucursal/>
    //                             <ComunaSucursal/> 
    //                             <CiudadSucursal/> 
    //                         </Encabezado> `;
    //     const receptor = `    <Receptor> 
    //                             <Rut>96570750-6</Rut> 
    //                             <CodigoCliente>0000409313</CodigoCliente> 
    //                             <Nombre>DSV AIR &amp; SEA</Nombre> 
    //                             <Direccion> ANDRES BELLO 2687, PISO 14</Direccion> 
    //                             <Comuna>SANTIAGO</Comuna> 
    //                             <Ciudad>LAS CONDES</Ciudad> 
    //                             <Giro>CARGA TRANSPORTE REGULAR</Giro> 
    //                         </Receptor> `;
    //     const exportacion = ` <Exportacion> 
    //                             <CodigoTransporte/> 
    //                             <CodigoPaisReceptor/> 
    //                             <CodigoPaisDestino/> 
    //                             <TotalProductos/> 
    //                             <TipoMoneda/> 
    //                             <TipoCambio/> 
    //                             <TotalMonedaExtranjera/> 
    //                             <Origen/> 
    //                             <Destino/> 
    //                             <Operacion/> 
    //                             <HblAwb/> 
    //                         </Exportacion> `;
    //     // debe ser un array
    //     const detalles = `<Detalle> 
    //                         <Linea> 2</Linea> 
    //                         <TipoDocumentoLiquidado/> 
    //                         <DetalleProducto>UBER</DetalleProducto> 
    //                         <Cantidad/> 
    //                         <PrecioUnitario/> 
    //                         <PrecioDolar/> 
    //                         <TotalLinea/> 
    //                         <IndicaorRetenedor/> 
    //                         <CodigoImpuestoAdicional/> 
    //                     </Detalle> `;

    //     const totales = ` <Totales> 
    //                         <Neto>86112</Neto> 
    //                         <Exento>0</Exento> 
    //                         <TasaIVA>19</TasaIVA> 
    //                         <IVA>16361</IVA> 
    //                         <MntTotal>102473</MntTotal> 
    //                     </Totales> `;

    //     const otra_moneda = `<OtraMoneda> 
    //                         <TipoMoneda>CLP</TipoMoneda> 
    //                         <TipoCambio> 0</TipoCambio> 
    //                         <TotalOtraMoneda> 0.00</TotalOtraMoneda> 
    //                        </OtraMoneda>`;

    //     const despacho = `    <Despacho> 
    //                             <IndicadorTraslado/> 
    //                             <DireccionDestino/> 
    //                             <ComunaDestino/> 
    //                             <CiudadDestino/> 
    //                             <Patente/> 
    //                             <Chofer/> 
    //                         </Despacho> `;

    //     const personalizados = `<Personalizados> 
    //                             <RequiereImpresion>N</RequiereImpresion> 
    //                             <Cedible>S</Cedible> 
    //                             <Impresora>LP01</Impresora> 
    //                             <MontoLetras>CIENTO DOS MIL CUATROCIENTOS SETENTA Y TRES</MontoLetras> 
    //                             <CuentaCorriente>409313</CuentaCorriente> 
    //                           </Personalizados> `;
    //     const xml =
    //         `<![CDATA[
    //             <Documento>
    //                 `+ encabezado + `
    //                 `+ receptor + `
    //                 `+ exportacion + `
    //                 `+ detalles + `
    //                 `+ totales + `
    //                 `+ otra_moneda + `
    //                 `+ despacho + `
    //                 `+ personalizados + `
    //             </Documento>
    //         ]]>`;
    //     const options = {};
    //     const soap = require('strong-soap').soap;
    //     const url = Configuration.WSDL_DOCUMENTO;
    //     const requestArgs = {
    //         XmlEntrada: xml
    //     };
    //     soap.createClient(url, options, function (err, client) {
    //         console.log(client);
    //         console.log(err);
    //         const method = client.RecepcionXml;
    //         method(requestArgs, function (err, result, _envelope, soapHeader) {
    //             console.log('-----TRUE------');
    //             console.log(result);
    //         });
    //     });
    //     const documento = { tipoDocumento: tipo, folioDocumento: '' };
    //     return await this._emitirRepository.save(documento);
    // }
}