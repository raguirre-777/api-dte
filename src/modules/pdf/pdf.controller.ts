import {
    Controller,
    Get,
} from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { Pdf } from './pdf.entity';
import { PdfService } from './pdf.service';

@ApiTags('Solicitar PDF para DTE')
@Controller('pdf')
@ApiBearerAuth()
export class PdfController {
    constructor(private readonly _pdfService: PdfService) { }

    @Get()
    async getPdf(): Promise<Pdf[]> {
        const pdf = await this._pdfService.getAll();
        return pdf;
    }

}