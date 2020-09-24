import { EmitirRepository } from './emitir.repository';
import { Emitir } from './emitir.entity';
export declare class EmitirService {
    private readonly _emitirRepository;
    constructor(_emitirRepository: EmitirRepository);
    getAll(): Promise<Emitir[]>;
    create(tipo: any): Promise<Emitir>;
}
