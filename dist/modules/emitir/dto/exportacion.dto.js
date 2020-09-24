"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExportacionDto = void 0;
class ExportacionDto {
    constructor() {
        this.toXml = () => {
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
        };
    }
}
exports.ExportacionDto = ExportacionDto;
//# sourceMappingURL=exportacion.dto.js.map