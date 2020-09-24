"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Documento = void 0;
class Documento {
    constructor() {
        this.xml = `<Documento>
                            ` + this.encabezado.xml + `
                            ` + this.receptor.xml + `
                            ` + this.exportacion.xml + `
                            ` + this.detalle.xml + `
                            ` + this.totales.xml + `
                            ` + this.otraMoneda.xml + `
                            ` + this.despacho.xml + `
                            ` + this.personalizados.xml + `
                   </Documento>`;
    }
}
exports.Documento = Documento;
//# sourceMappingURL=documento.dto.js.map