import { BaseEntity } from 'typeorm';
export declare class Emitir extends BaseEntity {
    id: number;
    tipoDocumento: number;
    folio: string;
    estado: string;
    mensaje: string;
}
