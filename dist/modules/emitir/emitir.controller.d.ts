import { DocumentoDto } from './dto/documento.dto';
import { Emitir } from './emitir.entity';
import { EmitirService } from './emitir.service';
export declare class EmitirController {
    private readonly _emitirService;
    constructor(_emitirService: EmitirService);
    create(documento: DocumentoDto): Promise<Emitir>;
}
