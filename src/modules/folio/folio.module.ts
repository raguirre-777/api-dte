import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FolioRepository } from './folio.repository';
import { FolioService } from './folio.service';
import { FolioController } from './folio.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([FolioRepository])
    ],
    providers: [FolioService],
    exports: [FolioService],
    controllers: [FolioController],

})
export class FolioModule { }

