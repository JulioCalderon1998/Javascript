
/* Dados tres valores de items, se realiza la suma y se muestra el total */

/*
const item1 = Number(prompt("Ingrese valor de Item 1:")); 
const item2 = Number(prompt("Ingrese valor de Item 2:")); 
const item3 = Number(prompt("Ingrese valor de Item 3:")); 

var resultado = 0;

function sumadeitems(item1, item2, item3){
        for(let i = 1; i <= 3; i++)
        {
            switch(i)
            {
            case 1:
            resultado = resultado + item1;
            break;
            case 2:
            resultado = resultado + item2;
            break;
            case 3:
            resultado = resultado + item3;
            break;
            } 
        }
        return resultado;        
}


console.log("Total: " + sumadeitems(item1, item2, item3));

*/


/* La idea del proyecto es crear un algoritmo de facturacion para Ecommerce */


/* INICIO DE CABECERA DE FACTURA */

const numeroFactura = Number(prompt("Ingrese el numero de factura:")); 
const fecha = Date(prompt("Ingrese la fecha de hoy:")); 
const nombreCliente = prompt("Ingrese el nombre del cliente:"); 
const cedulaCliente = Number(prompt("Ingrese la cedula del cliente:")); 
const cantArticulos = Number(prompt("Ingrese la cantidad de articulos:"));
const lineaDeFactura = [];


/* FIN DE CABECERA DE FACTURA */


/* OBJETO FACTURA */

function NuevaFactura(numeroFactura, fecha, nombreCliente, cedulaCliente, cantArticulos, lineaDeFactura){

const Factura = {    
    numeroFactura: numeroFactura,
    fecha: fecha,
    nombreCliente: nombreCliente,
    cedulaCliente: cedulaCliente,
    cantArticulos: cantArticulos,
    lineaDeFactura: lineaDeFactura,
    totalFactura: 0,
}

for(let i = 1; i <= cantArticulos; i++)
{
    const nomArt = prompt("Ingrese el nombre del articulo nº " + i + ":");
    const preArt = Number(prompt("Ingrese el precio del articulo nº " + i + ":"));
    const cant = Number(prompt("Ingrese la cantidad del articulo nº " + i + ":"));

    lineaDeFactura[i-1] = {
    nombreArticulo: nomArt,
    precioArticulo: preArt,
    cantidad: cant,
    total: preArt * cant
    }

    Factura.totalFactura =  Factura.totalFactura + lineaDeFactura[i-1].total
}

    return Factura;
}



console.log(NuevaFactura(numeroFactura, fecha, nombreCliente, cedulaCliente, cantArticulos, lineaDeFactura));

