export class Exportacion {
    CodigoTransporte: string;
    CodigoPaisReceptor: string;
    CodigoPaisDestino: string;
    TotalProductos: string;
    TipoMoneda: string;
    TipoCambio: string;
    TotalMonedaExtranjera: string;
    Origen: string;
    Destino: string;
    Operacion: string;
    HblAwb: string;


    xml: string = ` <Exportacion> 
                                <CodigoTransporte/> 
                                <CodigoPaisReceptor/> 
                                <CodigoPaisDestino/> 
                                <TotalProductos/> 
                                <TipoMoneda/> 
                                <TipoCambio/> 
                                <TotalMonedaExtranjera/> 
                                <Origen/> 
                                <Destino/> 
                                <Operacion/> 
                                <HblAwb/> 
                            </Exportacion> `;
}