import { ApiProperty } from "@nestjs/swagger";

export class PersonalizadosDto {
    @ApiProperty({
        title: 'Requiere Impresora (N,S)',
        example: 'N',
    })
    requiereImpresion: string;

    @ApiProperty({
        title: 'Cedible (N,S)',
        example: 'S',
    })
    cedible: string;

    @ApiProperty({
        title: 'Impresora',
        example: 'LP01',
    })
    impresora: string;
    @ApiProperty({
        title: 'Monto dinero con letras',
        example: 'CIENTO DOS MIL CUATROCIENTOS SETENTA Y TRES',
    })
    montoLetras: string;
    @ApiProperty({
        title: 'Cuenta Corriente',
        example: '409313',
    })
    cuentaCorriente: string;

    toXml: any = () => {
        return `<Personalizados> 
                        <RequiereImpresion>`+ this.requiereImpresion + `</RequiereImpresion> 
                        <Cedible>`+ this.cedible + `</Cedible> 
                        <Impresora>`+ this.impresora + `</Impresora> 
                        <MontoLetras>`+ this.montoLetras + `</MontoLetras> 
                        <CuentaCorriente>`+ this.cuentaCorriente + `</CuentaCorriente> 
                    </Personalizados> `;
    }
}