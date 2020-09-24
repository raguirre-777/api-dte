/* eslint-disable @typescript-eslint/no-unused-vars */
import { EncabezadoDto } from "./encabezado.dto";
import { ReceptorDto } from "./receptor.dto";
import { ExportacionDto } from "./exportacion.dto";
import { DetalleDto } from "./detalle.dto";
import { TotalesDto } from "./totales.dto";
import { OtraMonedaDto } from "./otra-moneda.dto";
import { DespachoDto } from "./despacho.dto";
import { PersonalizadosDto } from "./personalizados.dto";
import { ApiProperty } from "@nestjs/swagger";

export class DocumentoDto {
    @ApiProperty()
    encabezado: EncabezadoDto;
    @ApiProperty()
    receptor: ReceptorDto;
    @ApiProperty()
    exportacion: ExportacionDto;
    @ApiProperty()
    detalles: DetalleDto[];
    @ApiProperty()
    totales: TotalesDto;
    @ApiProperty()
    otraMoneda: OtraMonedaDto;
    @ApiProperty()
    despacho: DespachoDto;
    @ApiProperty()
    personalizados: PersonalizadosDto;

    toXml: any = () => {
        return `<Documento>
                            `+ this.encabezado.toXml + `
                            `+ this.receptor.toXml + `
                            `+ this.exportacion.toXml + `
                            `+ this.detalles.forEach(function (detalle) { ` ` + this.detalle.toXml + ` `; }); + `
                            `+ this.totales.toXml + `
                            `+ this.otraMoneda.toXml + `
                            `+ this.despacho.toXml + `
                            `+ this.personalizados.toXml + `
                   </Documento>`;
    }


}