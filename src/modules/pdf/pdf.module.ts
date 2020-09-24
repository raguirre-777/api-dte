import { Module } from '@nestjs/common';
import { PdfRepository } from './pdf.repository';
import { PdfService } from './pdf.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PdfController } from './pdf.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([PdfRepository])
    ],
    providers: [PdfService],
    controllers: [PdfController],

})
export class PdfModule { }
