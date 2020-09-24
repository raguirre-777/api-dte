import { ApiProperty } from "@nestjs/swagger";

export class EncabezadoDto {
    @ApiProperty({
        title: 'CodDctoSap',
        example: '5705',
    })
    codDctoSap?: string;
    @ApiProperty({
        title: 'Codigo de la Empresa (egt 25)',
        example: '25',
    })
    codigoEmpresa?: string;
    @ApiProperty({
        title: 'Resolucion',
        example: '0',
    })
    resolucion?: string;
    @ApiProperty({
        title: 'Tipo de Documento (33,39)',
        example: '39',
    })
    tipoDocumento?: string;
    @ApiProperty({
        title: 'Folio',
        example: '5705',
    })
    folio?: string;
    @ApiProperty({
        title: 'Fecha de Emision',
        example: '2019-09-26',
    })
    fechaEmision?: string;
    @ApiProperty({
        title: 'Fecha de Vencimiento',
        example: '2019-09-25',
    })
    fechaVencimiento?: string;


    toXml: any = () => {
        return `<Encabezado> 
            <CodDctoSap>`+ this.folio + `</CodDctoSap> 
            <CodigoEmpresa>`+ this.codigoEmpresa + `</CodigoEmpresa>
            <Resolucion>0`+ this.resolucion + `</Resolucion>
            <TipoDocumento>`+ this.tipoDocumento + `</TipoDocumento>
            <Folio>`+ this.folio + `</Folio>
            <FechaEmision>`+ this.fechaEmision + `</FechaEmision> 
            <FechaVencimiento>`+ this.fechaVencimiento + `</FechaVencimiento> 
            <CodigoSucursal/> 
            <DireccionSucursal/>
            <ComunaSucursal/> 
            <CiudadSucursal/> 
            </Encabezado> `;
    }
}