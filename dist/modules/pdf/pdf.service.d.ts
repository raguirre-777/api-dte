import { PdfRepository } from './pdf.repository';
import { Pdf } from './pdf.entity';
export declare class PdfService {
    private readonly _pdfRepository;
    constructor(_pdfRepository: PdfRepository);
    getAll(): Promise<Pdf[]>;
}
