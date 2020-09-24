import { EncabezadoDto } from "./encabezado.dto";
import { ReceptorDto } from "./receptor.dto";
import { ExportacionDto } from "./exportacion.dto";
import { DetalleDto } from "./detalle.dto";
import { TotalesDto } from "./totales.dto";
import { OtraMonedaDto } from "./otra-moneda.dto";
import { DespachoDto } from "./despacho.dto";
import { PersonalizadosDto } from "./personalizados.dto";
export declare class DocumentoDto {
    encabezado: EncabezadoDto;
    receptor: ReceptorDto;
    exportacion: ExportacionDto;
    detalles: DetalleDto;
    totales: TotalesDto;
    otraMoneda: OtraMonedaDto;
    despacho: DespachoDto;
    personalizados: PersonalizadosDto;
    toXml: any;
}
