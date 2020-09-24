import {
    Controller,
    Get,
    Param,
    ParseIntPipe,
    Post,
    Put,
} from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { Pdf } from './pdf.entity';
import { PdfService } from './pdf.service';

@ApiTags('Solicitar PDF para DTE')
@Controller('pdf')
@ApiBearerAuth()
export class PdfController {
    constructor(private readonly _pdfService: PdfService) { }

    @Put() // rut_emisor=76211240&tipo=39&folio=8306
    async create(): Promise<Observable<AxiosResponse<any[]>>> {
        return this._pdfService.create();;
    }

}