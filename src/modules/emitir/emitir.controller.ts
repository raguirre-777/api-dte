import {
    Controller,
    Get,
    Param,
    Post,
    ParseIntPipe,
} from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { Emitir } from './emitir.entity';
import { EmitirService } from './emitir.service';

@ApiTags('Emitir DTE')
@Controller('emitir')
@ApiBearerAuth()
export class EmitirController {
    constructor(private readonly _emitirService: EmitirService) { }

    @Get()
    async getFolios(): Promise<Emitir[]> {
        const folios = await this._emitirService.getAll();
        return folios;
    }

    @Post(':tipo')
    async create(@Param('tipo', ParseIntPipe) tipo: number): Promise<Emitir> {
        const createdFolio = await this._emitirService.create(tipo);
        return createdFolio;
    }



}