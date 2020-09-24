import { ApiProperty } from "@nestjs/swagger";

export class DetalleDto {
    @ApiProperty({
        title: 'Linea',
        example: '2',
    })
    linea?: string;
    @ApiProperty({
        title: 'Detalle de Producto',
        example: 'UBER',
    })
    detalleProducto?: string;


    toXml: any = () => {
        return `<Detalle> 
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

}