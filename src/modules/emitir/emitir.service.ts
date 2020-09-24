import {
    Injectable,
    BadRequestException,
    NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getConnection, Repository } from 'typeorm';
import { EmitirRepository } from './emitir.repository';
import { Emitir } from './emitir.entity';
import { Configuration } from '../../config/config.keys';


@Injectable()
export class EmitirService {
    constructor(
        private readonly _emitirRepository: EmitirRepository
    ) { }

    async getAll(): Promise<Emitir[]> {
        const folios: Emitir[] = await this._emitirRepository.find();
        return folios;
    }
    async create(tipo: any): Promise<Emitir> {
        let encabezado = `  <Encabezado> 
                                <CodDctoSap>5705</CodDctoSap> 
                                <CodigoEmpresa>25</CodigoEmpresa>
                                <Resolucion>0</Resolucion>
                                <TipoDocumento>33</TipoDocumento>
                                <Folio>5705</Folio>
                                <FechaEmision>2019-09-26</FechaEmision> 
                                <FechaVencimiento>2019-09-25</FechaVencimiento> 
                                <CodigoSucursal/> 
                                <DireccionSucursal/>
                                <ComunaSucursal/> 
                                <CiudadSucursal/> 
                            </Encabezado> `;
        let receptor = `    <Receptor> 
                                <Rut>96570750-6</Rut> 
                                <CodigoCliente>0000409313</CodigoCliente> 
                                <Nombre>DSV AIR &amp; SEA</Nombre> 
                                <Direccion> ANDRES BELLO 2687, PISO 14</Direccion> 
                                <Comuna>SANTIAGO</Comuna> 
                                <Ciudad>LAS CONDES</Ciudad> 
                                <Giro>CARGA TRANSPORTE REGULAR</Giro> 
                            </Receptor> `;
        let exportacion = ` <Exportacion> 
                                <CodigoTransporte/> 
                                <CodigoPaisReceptor/> 
                                <CodigoPaisDestino/> 
                                <TotalProductos/> 
                                <TipoMoneda/> 
                                <TipoCambio/> 
                                <TotalMonedaExtranjera/> 
                                <Origen/> 
                                <Destino/> 
                                <Operacion/> 
                                <HblAwb/> 
                            </Exportacion> `;
        // debe ser un array
        let detalles = `<Detalle> 
                            <Linea> 2</Linea> 
                            <TipoDocumentoLiquidado/> 
                            <DetalleProducto>UBER</DetalleProducto> 
                            <Cantidad/> 
                            <PrecioUnitario/> 
                            <PrecioDolar/> 
                            <TotalLinea/> 
                            <IndicaorRetenedor/> 
                            <CodigoImpuestoAdicional/> 
                        </Detalle> `;

        let totales = ` <Totales> 
                            <Neto>86112</Neto> 
                            <Exento>0</Exento> 
                            <TasaIVA>19</TasaIVA> 
                            <IVA>16361</IVA> 
                            <MntTotal>102473</MntTotal> 
                        </Totales> `;

        let otra_moneda = `<OtraMoneda> 
                            <TipoMoneda>CLP</TipoMoneda> 
                            <TipoCambio> 0</TipoCambio> 
                            <TotalOtraMoneda> 0.00</TotalOtraMoneda> 
                           </OtraMoneda>`;

        let despacho = `    <Despacho> 
                                <IndicadorTraslado/> 
                                <DireccionDestino/> 
                                <ComunaDestino/> 
                                <CiudadDestino/> 
                                <Patente/> 
                                <Chofer/> 
                            </Despacho> `;

        let personalizados = `<Personalizados> 
                                <RequiereImpresion>N</RequiereImpresion> 
                                <Cedible>S</Cedible> 
                                <Impresora>LP01</Impresora> 
                                <MontoLetras>CIENTO DOS MIL CUATROCIENTOS SETENTA Y TRES</MontoLetras> 
                                <CuentaCorriente>409313</CuentaCorriente> 
                              </Personalizados> `;
        let xml =
            `<![CDATA[
                <Documento>
                    `+ encabezado + `
                    `+ receptor + `
                    `+ exportacion + `
                    `+ detalles + `
                    `+ totales + `
                    `+ otra_moneda + `
                    `+ despacho + `
                    `+ personalizados + `
                </Documento>
            ]]>`;
        var options = {};
        var soap = require('strong-soap').soap;
        var url = Configuration.WSDL_DOCUMENTO;
        var requestArgs = {
            XmlEntrada: xml
        };
        soap.createClient(url, options, function (err, client) {
            console.log(client);
            console.log(err);
            var method = client.RecepcionXml;
            method(requestArgs, function (err, result, envelope, soapHeader) {
                console.log('-----TRUE------');
                console.log(result);
            });
        });
        const documento = { tipoDocumento: tipo, folioDocumento: '' };
        return await this._emitirRepository.save(documento);
    }
}