"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DespachoDto = void 0;
class DespachoDto {
    constructor() {
        this.toXml = () => {
            return `<Despacho> 
                            <IndicadorTraslado/> 
                            <DireccionDestino/> 
                            <ComunaDestino/> 
                            <CiudadDestino/> 
                            <Patente/> 
                            <Chofer/> 
                   </Despacho> `;
        };
    }
}
exports.DespachoDto = DespachoDto;
//# sourceMappingURL=despacho.dto.js.map