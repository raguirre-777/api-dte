import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmitirRepository } from './emitir.repository';
import { EmitirService } from './emitir.service';
import { EmitirController } from './emitir.controller';
import { FolioModule } from '../folio/folio.module';


@Module({
    imports: [
        TypeOrmModule.forFeature([EmitirRepository]),
        FolioModule
    ],
    providers: [EmitirService],
    controllers: [EmitirController],
})
export class EmitirModule { }
