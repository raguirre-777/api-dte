import {
    Controller,
    Get,
    Param,
    Post,
    ParseIntPipe,
} from '@nestjs/common';
import { FolioService } from './folio.service';
import { Folio } from './folio.entity';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('Solicitar Folio para DTE')
@Controller('folios')
@ApiBearerAuth()
export class FolioController {
    constructor(private readonly _folioService: FolioService) { }

    @Get()
    async getFolios(): Promise<Folio[]> {
        const folios = await this._folioService.getAll();
        return folios;
    }

    @Post(':tipo')
    async create(@Param('tipo', ParseIntPipe) tipo: number): Promise<Folio> {
        const createdFolio = await this._folioService.create(tipo);
        return createdFolio;
    }


}