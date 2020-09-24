import { Documento } from './documento.entity';
export declare class Receptor {
    id: number;
    Rut: string;
    CodigoCliente: string;
    Nombre: string;
    Direccion: string;
    Comuna: string;
    Ciudad: string;
    Giro: string;
    Documento: Documento;
}
