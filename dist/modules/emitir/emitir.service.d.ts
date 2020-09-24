import { EmitirRepository } from './emitir.repository';
import { Emitir } from './emitir.entity';
import { DocumentoDto } from './dto/documento.dto';
import { FolioService } from '../folio/folio.service';
import { EncabezadoDto } from './dto/encabezado.dto';
import { DetalleDto } from './dto/detalle.dto';
import { OtraMonedaDto } from './dto/otra-moneda.dto';
import { TotalesDto } from './dto/totales.dto';
import { ReceptorDto } from './dto/receptor.dto';
import { PersonalizadosDto } from './dto/personalizados.dto';
export declare class EmitirService {
    private readonly _emitirRepository;
    private readonly _folioService;
    constructor(_emitirRepository: EmitirRepository, _folioService: FolioService);
    create(documento: DocumentoDto): Promise<Emitir>;
    xmlDocumento(documento: DocumentoDto): string;
    xmlDespacho(): string;
    xmlDetalles(detalle: DetalleDto): string;
    xmlEncabezado(encabezado: EncabezadoDto): string;
    xmlExportacion(): string;
    xmlOtraMoneda(otraMoneda: OtraMonedaDto): string;
    xmlPersonalizados(personalizados: PersonalizadosDto): string;
    xmlReceptor(receptor: ReceptorDto): string;
    xmlTotales(totales: TotalesDto): string;
}
