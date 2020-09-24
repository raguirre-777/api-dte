import { Encabezado } from "./encabezado.dto";
import { Receptor } from "./receptor.dto";
import { Exportacion } from "./exportacion.dto";
import { Detalle } from "./detalle.dto";
import { Totales } from "./totales.dto";
import { OtraMoneda } from "./otra.moneda.dto";
import { Despacho } from "./despacho.dto";
import { Personalizados } from "./personalizados.dto";

export class Documento {
    encabezado: Encabezado;
    receptor: Receptor;
    exportacion: Exportacion;
    //detalle: Detalle[];
    detalle: Detalle;
    totales: Totales;
    otraMoneda: OtraMoneda;
    despacho: Despacho;
    personalizados: Personalizados;

    xml: string = `<Documento>
                            `+ this.encabezado.xml + `
                            `+ this.receptor.xml + `
                            `+ this.exportacion.xml + `
                            `+ this.detalle.xml + `
                            `+ this.totales.xml + `
                            `+ this.otraMoneda.xml + `
                            `+ this.despacho.xml + `
                            `+ this.personalizados.xml + `
                   </Documento>`;
}