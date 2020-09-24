import {
    Injectable,
    BadRequestException,
    NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getConnection, Repository } from 'typeorm';
import { PdfRepository } from './pdf.repository';
import { Pdf } from './pdf.entity';


@Injectable()
export class PdfService {
    constructor(
        private readonly _pdfRepository: PdfRepository
    ) { }

    async getAll(): Promise<Pdf[]> {
        const folios: Pdf[] = await this._pdfRepository.find();

        return folios;
    }

}