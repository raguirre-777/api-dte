import { EmitirRepository } from './emitir.repository';
import { Emitir } from './emitir.entity';
import { DocumentoDto } from './dto/documento.dto';
import { FolioService } from '../folio/folio.service';
export declare class EmitirService {
    private readonly _emitirRepository;
    private readonly _folioService;
    constructor(_emitirRepository: EmitirRepository, _folioService: FolioService);
    create(documento: DocumentoDto): Promise<Emitir>;
}
