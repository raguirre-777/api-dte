import { Encabezado } from "./encabezado.entity";
import { Receptor } from "./receptor.entity";
import { Exportacion } from "./exportacion.entity";
import { Detalle } from "./detalle.entity";
import { Totales } from "./totales.entity";
import { OtraMoneda } from "./otra.moneda.entity";
import { Despacho } from "./despacho.entity";
import { Personalizados } from "./personalizados.entity";
import { Emitir } from "../emitir.entity";
export declare class Documento {
    id: number;
    Encabezado: Encabezado;
    Receptor: Receptor;
    Exportacion: Exportacion;
    Detalle: Detalle[];
    Totales: Totales;
    OtraMoneda: OtraMoneda;
    Despacho: Despacho;
    Personalizados: Personalizados;
    emitir: Emitir;
}
