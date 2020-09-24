export class DespachoDto {
    toXml: any = () => {
        return `<Despacho> 
                            <IndicadorTraslado/> 
                            <DireccionDestino/> 
                            <ComunaDestino/> 
                            <CiudadDestino/> 
                            <Patente/> 
                            <Chofer/> 
                   </Despacho> `;
    }
}