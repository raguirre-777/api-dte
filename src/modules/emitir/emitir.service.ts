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
import { EncabezadoDto } from './dto/encabezado.dto';
import { DetalleDto } from './dto/detalle.dto';
import { OtraMonedaDto } from './dto/otra-moneda.dto';
import { TotalesDto } from './dto/totales.dto';
import { ReceptorDto } from './dto/receptor.dto';
import { PersonalizadosDto } from './dto/personalizados.dto';

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
        const xml =
            `<![CDATA[
                    `+ this.xmlDocumento(documento) + `
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
                            estado: result.RecepcionXmlResult.Estado,
                            mensaje: result.RecepcionXmlResult.Mensaje,
                        });
                    }
                    if (result.RecepcionXmlResult) {
                        resolve({
                            error: false,
                            message: 'Emitir cargado con exito',
                            folio: result.RecepcionXmlResult.Folio,
                            tipoDocumento: result.RecepcionXmlResult.TipoDocumento,
                            estado: result.RecepcionXmlResult.Estado,
                            mensaje: result.RecepcionXmlResult.Mensaje,
                        });
                    } else {
                        resolve({
                            error: true,
                            message: 'No fue posible emitir',
                            folio: 0,
                            estado: result.RecepcionXmlResult.Estado,
                            mensaje: result.RecepcionXmlResult.Mensaje,
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
        return await this._emitirRepository.save(resultado);

    }

    xmlDocumento(documento: DocumentoDto): string {
        return `<Documento>
                        `+ this.xmlEncabezado(documento.encabezado) + `
                        `+ this.xmlReceptor(documento.receptor) + `
                        `+ this.xmlExportacion() + `
                        `+ this.xmlDetalles(documento.detalles) + `
                        `+ this.xmlTotales(documento.totales) + `
                        `+ this.xmlOtraMoneda(documento.otraMoneda) + `
                        `+ this.xmlDespacho() + `
                        `+ this.xmlPersonalizados(documento.personalizados) + `
                </Documento>`;
    }

    xmlDespacho(): string {
        return ` <Despacho> 
                    <IndicadorTraslado/> 
                    <DireccionDestino/> 
                    <ComunaDestino/> 
                    <CiudadDestino/> 
                    <Patente/> 
                    <Chofer/> 
                </Despacho> `;
    }

    xmlDetalles(detalle: DetalleDto): string {
        return `<Detalle> 
                    <Linea>`+ detalle.linea + `</Linea> 
                    <TipoDocumentoLiquidado/> 
                    <DetalleProducto>`+ detalle.detalleProducto + `</DetalleProducto> 
                    <Cantidad/> 
                    <PrecioUnitario/> 
                    <PrecioDolar/> 
                    <TotalLinea/> 
                    <IndicaorRetenedor/> 
                    <CodigoImpuestoAdicional/> 
                </Detalle> `;
    }

    xmlEncabezado(encabezado: EncabezadoDto): string {
        return `<Encabezado> 
                <CodDctoSap>`+ encabezado.folio + `</CodDctoSap> 
                <CodigoEmpresa>`+ encabezado.codigoEmpresa + `</CodigoEmpresa>
                <Resolucion>0`+ encabezado.resolucion + `</Resolucion>
                <TipoDocumento>`+ encabezado.tipoDocumento + `</TipoDocumento>
                <Folio>`+ encabezado.folio + `</Folio>
                <FechaEmision>`+ encabezado.fechaEmision + `</FechaEmision> 
                <FechaVencimiento>`+ encabezado.fechaVencimiento + `</FechaVencimiento> 
                <CodigoSucursal/> 
                <DireccionSucursal/>
                <ComunaSucursal/> 
                <CiudadSucursal/> 
                </Encabezado> `;
    }

    xmlExportacion(): string {
        return ` <Exportacion> 
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
    }

    xmlOtraMoneda(otraMoneda: OtraMonedaDto): string {
        return `<OtraMoneda> 
                    <TipoMoneda>`+ otraMoneda.tipoMoneda + `</TipoMoneda> 
                    <TipoCambio> `+ otraMoneda.tipoCambio + `</TipoCambio> 
                    <TotalOtraMoneda> `+ otraMoneda.totalOtraMoneda + `</TotalOtraMoneda>                           
                </OtraMoneda>`;
    }

    xmlPersonalizados(personalizados: PersonalizadosDto): string {
        return `<Personalizados> 
                    <RequiereImpresion>`+ personalizados.requiereImpresion + `</RequiereImpresion> 
                    <Cedible>`+ personalizados.cedible + `</Cedible> 
                    <Impresora>`+ personalizados.impresora + `</Impresora> 
                    <MontoLetras>`+ personalizados.montoLetras + `</MontoLetras> 
                    <CuentaCorriente>`+ personalizados.cuentaCorriente + `</CuentaCorriente> 
                </Personalizados> `;
    }

    xmlReceptor(receptor: ReceptorDto): string {
        return `    <Receptor> 
                        <Rut>`+ receptor.rut + `</Rut> 
                        <CodigoCliente>`+ receptor.codigoCliente + `</CodigoCliente> 
                        <Nombre>`+ receptor.nombre + `</Nombre> 
                        <Direccion> `+ receptor.direccion + `</Direccion> 
                        <Comuna>`+ receptor.comuna + `</Comuna> 
                        <Ciudad>`+ receptor.ciudad + `</Ciudad> 
                        <Giro>`+ receptor.giro + `</Giro> 
                    </Receptor> `;
    }

    xmlTotales(totales: TotalesDto): string {
        return ` <Totales> 
                    <Neto>`+ totales.neto + `</Neto> 
                    <Exento>`+ totales.exento + `</Exento> 
                    <TasaIVA>`+ totales.tasaIVA + `</TasaIVA> 
                    <IVA>`+ totales.iva + `</IVA> 
                    <MntTotal>`+ totales.mntTotal + `</MntTotal> 
                </Totales> `;
    }

}