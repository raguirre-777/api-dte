import { Encabezado } from "./encabezado.dto";
import { Receptor } from "./receptor.dto";
import { Exportacion } from "./exportacion.dto";
import { Detalle } from "./detalle.dto";
import { Totales } from "./totales.dto";
import { OtraMoneda } from "./otra.moneda.dto";
import { Despacho } from "./despacho.dto";
import { Personalizados } from "./personalizados.dto";
export declare class Documento {
    encabezado: Encabezado;
    receptor: Receptor;
    exportacion: Exportacion;
    detalle: Detalle;
    totales: Totales;
    otraMoneda: OtraMoneda;
    despacho: Despacho;
    personalizados: Personalizados;
    xml: string;
}
