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
exports.EmitirService = void 0;
const common_1 = require("@nestjs/common");
const emitir_repository_1 = require("./emitir.repository");
const config_keys_1 = require("../../config/config.keys");
const folio_service_1 = require("../folio/folio.service");
let EmitirService = class EmitirService {
    constructor(_emitirRepository, _folioService) {
        this._emitirRepository = _emitirRepository;
        this._folioService = _folioService;
    }
    async create(documento) {
        const tipoDocto = Number(documento.encabezado.tipoDocumento);
        const folio = await this._folioService.create(tipoDocto);
        documento.encabezado.folio = "" + folio.folioDocumento;
        const xml = `<![CDATA[
                    ` + this.xmlDocumento(documento) + `
            ]]>`;
        const options = {};
        const soap = require('strong-soap').soap;
        const url = config_keys_1.Configuration.WSDL_DOCUMENTO;
        const requestArgs = {
            XmlEntrada: xml
        };
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
                    }
                    else {
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
            throw new common_1.HttpException({
                status: common_1.HttpStatus.BAD_REQUEST,
                error: resultado.message,
            }, 400);
        }
        console.log(resultado);
        return await this._emitirRepository.save(resultado);
    }
    xmlDocumento(documento) {
        return `<Documento>
                        ` + this.xmlEncabezado(documento.encabezado) + `
                        ` + this.xmlReceptor(documento.receptor) + `
                        ` + this.xmlExportacion() + `
                        ` + this.xmlDetalles(documento.detalles) + `
                        ` + this.xmlTotales(documento.totales) + `
                        ` + this.xmlOtraMoneda(documento.otraMoneda) + `
                        ` + this.xmlDespacho() + `
                        ` + this.xmlPersonalizados(documento.personalizados) + `
                </Documento>`;
    }
    xmlDespacho() {
        return ` <Despacho> 
                    <IndicadorTraslado/> 
                    <DireccionDestino/> 
                    <ComunaDestino/> 
                    <CiudadDestino/> 
                    <Patente/> 
                    <Chofer/> 
                </Despacho> `;
    }
    xmlDetalles(detalle) {
        return `<Detalle> 
                    <Linea>` + detalle.linea + `</Linea> 
                    <TipoDocumentoLiquidado/> 
                    <DetalleProducto>` + detalle.detalleProducto + `</DetalleProducto> 
                    <Cantidad/> 
                    <PrecioUnitario/> 
                    <PrecioDolar/> 
                    <TotalLinea/> 
                    <IndicaorRetenedor/> 
                    <CodigoImpuestoAdicional/> 
                </Detalle> `;
    }
    xmlEncabezado(encabezado) {
        return `<Encabezado> 
                <CodDctoSap>` + encabezado.folio + `</CodDctoSap> 
                <CodigoEmpresa>` + encabezado.codigoEmpresa + `</CodigoEmpresa>
                <Resolucion>0` + encabezado.resolucion + `</Resolucion>
                <TipoDocumento>` + encabezado.tipoDocumento + `</TipoDocumento>
                <Folio>` + encabezado.folio + `</Folio>
                <FechaEmision>` + encabezado.fechaEmision + `</FechaEmision> 
                <FechaVencimiento>` + encabezado.fechaVencimiento + `</FechaVencimiento> 
                <CodigoSucursal/> 
                <DireccionSucursal/>
                <ComunaSucursal/> 
                <CiudadSucursal/> 
                </Encabezado> `;
    }
    xmlExportacion() {
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
    xmlOtraMoneda(otraMoneda) {
        return `<OtraMoneda> 
                    <TipoMoneda>` + otraMoneda.tipoMoneda + `</TipoMoneda> 
                    <TipoCambio> ` + otraMoneda.tipoCambio + `</TipoCambio> 
                    <TotalOtraMoneda> ` + otraMoneda.totalOtraMoneda + `</TotalOtraMoneda>                           
                </OtraMoneda>`;
    }
    xmlPersonalizados(personalizados) {
        return `<Personalizados> 
                    <RequiereImpresion>` + personalizados.requiereImpresion + `</RequiereImpresion> 
                    <Cedible>` + personalizados.cedible + `</Cedible> 
                    <Impresora>` + personalizados.impresora + `</Impresora> 
                    <MontoLetras>` + personalizados.montoLetras + `</MontoLetras> 
                    <CuentaCorriente>` + personalizados.cuentaCorriente + `</CuentaCorriente> 
                </Personalizados> `;
    }
    xmlReceptor(receptor) {
        return `    <Receptor> 
                        <Rut>` + receptor.rut + `</Rut> 
                        <CodigoCliente>` + receptor.codigoCliente + `</CodigoCliente> 
                        <Nombre>` + receptor.nombre + `</Nombre> 
                        <Direccion> ` + receptor.direccion + `</Direccion> 
                        <Comuna>` + receptor.comuna + `</Comuna> 
                        <Ciudad>` + receptor.ciudad + `</Ciudad> 
                        <Giro>` + receptor.giro + `</Giro> 
                    </Receptor> `;
    }
    xmlTotales(totales) {
        return ` <Totales> 
                    <Neto>` + totales.neto + `</Neto> 
                    <Exento>` + totales.exento + `</Exento> 
                    <TasaIVA>` + totales.tasaIVA + `</TasaIVA> 
                    <IVA>` + totales.iva + `</IVA> 
                    <MntTotal>` + totales.mntTotal + `</MntTotal> 
                </Totales> `;
    }
};
EmitirService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [emitir_repository_1.EmitirRepository,
        folio_service_1.FolioService])
], EmitirService);
exports.EmitirService = EmitirService;
//# sourceMappingURL=emitir.service.js.map