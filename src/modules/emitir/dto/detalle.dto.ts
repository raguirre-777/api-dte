import { ApiProperty } from "@nestjs/swagger";

export class Detalle {
    @ApiProperty()
    linea?: string;
    @ApiProperty()
    tipoDocumentoLiquidado?: string;
    @ApiProperty()
    detalleProducto?: string;
    @ApiProperty()
    cantidad?: string;
    @ApiProperty()
    precioUnitario?: string;
    @ApiProperty()
    precioDolar?: string;
    @ApiProperty()
    totalLinea?: string;
    @ApiProperty()
    indicaorRetenedor?: string;
    @ApiProperty()
    codigoImpuestoAdicional?: string;


    xml: string = `<Detalle> 
                            <Linea>`+ this.linea + `</Linea> 
                            <TipoDocumentoLiquidado/> 
                            <DetalleProducto>`+ this.detalleProducto + `</DetalleProducto> 
                            <Cantidad/> 
                            <PrecioUnitario/> 
                            <PrecioDolar/> 
                            <TotalLinea/> 
                            <IndicaorRetenedor/> 
                            <CodigoImpuestoAdicional/> 
                        </Detalle> `;
}