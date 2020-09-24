import { Emitir } from './emitir.entity';
import { EmitirService } from './emitir.service';
export declare class EmitirController {
    private readonly _emitirService;
    constructor(_emitirService: EmitirService);
    getFolios(): Promise<Emitir[]>;
    create(tipo: number): Promise<Emitir>;
}
