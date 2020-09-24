import {
    Controller,
    Get,
    Post,
    Body
} from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { DocumentoDto } from './dto/documento.dto';
import { Emitir } from './emitir.entity';
import { EmitirService } from './emitir.service';

@ApiTags('Emitir DTE')
@Controller('emitir')
@ApiBearerAuth()
export class EmitirController {
    constructor(private readonly _emitirService: EmitirService) { }



    @Post()
    async create(@Body() documento: DocumentoDto): Promise<Emitir> {
        const createdFolio = await this._emitirService.create(documento);
        return createdFolio;
    }



}