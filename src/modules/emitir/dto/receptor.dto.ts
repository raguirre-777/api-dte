export class Receptor {
    Rut: string;
    CodigoCliente: string;
    Nombre: string;
    Direccion: string;
    Comuna: string;
    Ciudad: string;
    Giro: string;


    xml: string = `    <Receptor> 
                            <Rut>96570750-6</Rut> 
                            <CodigoCliente>0000409313</CodigoCliente> 
                            <Nombre>DSV AIR &amp; SEA</Nombre> 
                            <Direccion> ANDRES BELLO 2687, PISO 14</Direccion> 
                            <Comuna>SANTIAGO</Comuna> 
                            <Ciudad>LAS CONDES</Ciudad> 
                            <Giro>CARGA TRANSPORTE REGULAR</Giro> 
                        </Receptor> `;
}