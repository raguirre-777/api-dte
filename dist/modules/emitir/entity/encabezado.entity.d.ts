import { Documento } from './documento.entity';
export declare class Encabezado {
    id: number;
    CodDctoSap: string;
    CodigoEmpresa: string;
    Resolucion: string;
    TipoDocumento: string;
    Folio: string;
    FechaEmision: string;
    FechaVencimiento: string;
    CodigoSucursal: string;
    DireccionSucursal: string;
    ComunaSucursal: string;
    CiudadSucursal: string;
    Documento: Documento;
}
