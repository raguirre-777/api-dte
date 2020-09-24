import { BaseEntity } from 'typeorm';
export declare class Folio extends BaseEntity {
    id: number;
    tipoDocumento: number;
    folioDocumento: string;
}
