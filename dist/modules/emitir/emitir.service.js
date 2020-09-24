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
let EmitirService = class EmitirService {
    constructor(_emitirRepository) {
        this._emitirRepository = _emitirRepository;
    }
    async getAll() {
        const folios = await this._emitirRepository.find();
        return folios;
    }
    async create(tipo) {
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
        let xml = `<![CDATA[
                <Documento>
                    ` + encabezado + `
                    ` + receptor + `
                    ` + exportacion + `
                    ` + detalles + `
                    ` + totales + `
                    ` + otra_moneda + `
                    ` + despacho + `
                    ` + personalizados + `
                </Documento>
            ]]>`;
        var options = {};
        var soap = require('strong-soap').soap;
        var url = config_keys_1.Configuration.WSDL_DOCUMENTO;
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
};
EmitirService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [emitir_repository_1.EmitirRepository])
], EmitirService);
exports.EmitirService = EmitirService;
//# sourceMappingURL=emitir.service.js.map