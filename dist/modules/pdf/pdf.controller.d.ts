import { Pdf } from './pdf.entity';
import { PdfService } from './pdf.service';
export declare class PdfController {
    private readonly _pdfService;
    constructor(_pdfService: PdfService);
    getPdf(): Promise<Pdf[]>;
}
