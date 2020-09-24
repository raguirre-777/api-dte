import { ApiProperty } from "@nestjs/swagger";

export class OtraMonedaDto {
    @ApiProperty({
        title: 'Tipo Moneda ',
        example: 'CLP',
    })
    tipoMoneda: string;
    @ApiProperty({
        title: 'Tipo Cambio ',
        example: '0',
    })
    tipoCambio: string;
    @ApiProperty({
        title: 'Total Otra Moneda',
        example: '0.00',
    })
    totalOtraMoneda: string;
    toXml: any = () => {
        return `<OtraMoneda> 
                            <TipoMoneda>`+ this.tipoMoneda + `</TipoMoneda> 
                            <TipoCambio> `+ this.tipoCambio + `</TipoCambio> 
                            <TotalOtraMoneda> `+ this.totalOtraMoneda + `</TotalOtraMoneda>                           
                           </OtraMoneda>`;
    }
}