import { Documento } from './documento.entity';
export declare class Despacho {
    id: number;
    IndicadorTraslado: string;
    DireccionDestino: string;
    ComunaDestino: string;
    CiudadDestino: string;
    Patente: string;
    Chofer: string;
    Documento: Documento;
}
