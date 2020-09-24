import { Module } from '@nestjs/common';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';
import { DatabaseModule } from './database/database.module';
import { EmitirModule } from './modules/emitir/emitir.module';
import { FolioModule } from './modules/folio/folio.module';
import { PdfModule } from './modules/pdf/pdf.module';

@Module({
  imports: [ConfigModule, DatabaseModule, EmitirModule, FolioModule, PdfModule],
})
export class AppModule {
  static port: number | string;

  constructor(private readonly _configService: ConfigService) {
    AppModule.port = this._configService.get('PORT');
  }
}
