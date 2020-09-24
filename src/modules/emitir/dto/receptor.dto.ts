import { ApiProperty } from "@nestjs/swagger";

export class ReceptorDto {

    @ApiProperty({
        title: 'Rut Receptor',
        example: '96570750-6',
    })
    rut: string;
    @ApiProperty({
        title: 'Código Cliente',
        example: '0000409313',
    })
    codigoCliente: string;
    @ApiProperty({
        title: 'Nombre Cliente',
        example: 'DSV AIR',
    })
    nombre: string;
    @ApiProperty({
        title: 'Dirección Cliente',
        example: 'ANDRES BELLO 2687, PISO 14',
    })
    direccion: string;
    @ApiProperty({
        title: 'Comuna Cliente',
        example: 'SANTIAGO',
    })
    comuna: string;
    @ApiProperty({
        title: 'Ciudad Cliente',
        example: 'LAS CONDES',
    })
    ciudad: string;

    @ApiProperty({
        title: 'Giro Cliente',
        example: 'CARGA TRANSPORTE REGULAR',
    })
    giro: string;

    toXml: any = () => {
        return `    <Receptor> 
                            <Rut>`+ this.rut + `</Rut> 
                            <CodigoCliente>`+ this.codigoCliente + `</CodigoCliente> 
                            <Nombre>`+ this.nombre + `</Nombre> 
                            <Direccion> `+ this.direccion + `</Direccion> 
                            <Comuna>`+ this.comuna + `</Comuna> 
                            <Ciudad>`+ this.ciudad + `</Ciudad> 
                            <Giro>`+ this.giro + `</Giro> 
                        </Receptor> `;
    }
}