import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { PdfService } from './pdf.service';
export declare class PdfController {
    private readonly _pdfService;
    constructor(_pdfService: PdfService);
    create(): Promise<Observable<AxiosResponse<any[]>>>;
}
