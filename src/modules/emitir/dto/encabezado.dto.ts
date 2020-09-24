import { ApiProperty } from "@nestjs/swagger";

export class Encabezado {
    @ApiProperty()
    codDctoSap?: string;
    @ApiProperty()
    codigoEmpresa?: string;
    @ApiProperty()
    resolucion?: string;
    @ApiProperty()
    tipoDocumento?: string;
    @ApiProperty()
    folio?: string;
    @ApiProperty()
    fechaEmision?: string;
    @ApiProperty()
    fechaVencimiento?: string;
    @ApiProperty()
    codigoSucursal?: string;
    @ApiProperty()
    direccionSucursal?: string;
    @ApiProperty()
    comunaSucursal?: string;
    @ApiProperty()
    ciudadSucursal?: string;

    xml: string = `<Encabezado> 
                            <CodDctoSap>`+ this.folio + `</CodDctoSap> 
                            <CodigoEmpresa>25</CodigoEmpresa>
                            <Resolucion>0</Resolucion>
                            <TipoDocumento>33</TipoDocumento>
                            <Folio>`+ this.folio + `</Folio>
                            <FechaEmision>2019-09-26</FechaEmision> 
                            <FechaVencimiento>2019-09-25</FechaVencimiento> 
                            <CodigoSucursal/> 
                            <DireccionSucursal/>
                            <ComunaSucursal/> 
                            <CiudadSucursal/> 
                        </Encabezado> `;
}