import { Documento } from './documento.entity';
export declare class Exportacion {
    id: number;
    CodigoTransporte: string;
    CodigoPaisReceptor: string;
    CodigoPaisDestino: string;
    TotalProductos: string;
    TipoMoneda: string;
    TipoCambio: string;
    TotalMonedaExtranjera: string;
    Origen: string;
    Destino: string;
    Operacion: string;
    HblAwb: string;
    Documento: Documento;
}
