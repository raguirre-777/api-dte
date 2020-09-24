import { ApiProperty } from "@nestjs/swagger";

export class TotalesDto {

    @ApiProperty({
        title: 'Total Neto',
        example: '86112',
    })
    neto: string;

    @ApiProperty({
        title: 'Total Exento',
        example: '0',
    })
    exento: string;

    @ApiProperty({
        title: 'Total TasaIVA',
        example: '19',
    })
    tasaIVA: string;

    @ApiProperty({
        title: 'Total IVA',
        example: '16361',
    })
    iva: string;

    @ApiProperty({
        title: 'Total MntTotal',
        example: '102473',
    })
    mntTotal: string;


    toXml: any = () => {
        return ` <Totales> 
                            <Neto>`+ this.neto + `</Neto> 
                            <Exento>`+ this.exento + `</Exento> 
                            <TasaIVA>`+ this.tasaIVA + `</TasaIVA> 
                            <IVA>`+ this.iva + `</IVA> 
                            <MntTotal>`+ this.mntTotal + `</MntTotal> 
                        </Totales> `;
    }
}