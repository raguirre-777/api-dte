import { FolioService } from './folio.service';
import { Folio } from './folio.entity';
export declare class FolioController {
    private readonly _folioService;
    constructor(_folioService: FolioService);
    getFolios(): Promise<Folio[]>;
    create(tipo: number): Promise<Folio>;
}
