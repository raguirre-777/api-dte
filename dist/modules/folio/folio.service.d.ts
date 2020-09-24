import { FolioRepository } from "./folio.repository";
import { Folio } from "./folio.entity";
export declare class FolioService {
    private readonly _folioRepository;
    constructor(_folioRepository: FolioRepository);
    getAll(): Promise<Folio[]>;
    create(tipo: number): Promise<Folio>;
    update(id: number, folio: Folio): Promise<void>;
}
