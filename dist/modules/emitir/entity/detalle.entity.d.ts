import { Documento } from './documento.entity';
export declare class Detalle {
    id: number;
    Linea: string;
    TipoDocumentoLiquidado: string;
    DetalleProducto: string;
    Cantidad: string;
    PrecioUnitario: string;
    PrecioDolar: string;
    TotalLinea: string;
    IndicaorRetenedor: string;
    CodigoImpuestoAdicional: string;
    Documento: Documento;
}
