import { ApiProperty } from '@nestjs/swagger';
export class Despacho {
    @ApiProperty()
    indicadorTraslado?: string;
    @ApiProperty()
    direccionDestino?: string;
    @ApiProperty()
    comunaDestino?: string;
    @ApiProperty()
    ciudadDestino?: string;
    @ApiProperty()
    patente?: string;
    @ApiProperty()
    chofer?: string;

    xml: string = `<Despacho> 
                            <IndicadorTraslado/> 
                            <DireccionDestino/> 
                            <ComunaDestino/> 
                            <CiudadDestino/> 
                            <Patente/> 
                            <Chofer/> 
                   </Despacho> `;
}