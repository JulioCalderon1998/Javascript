
/* Dados tres valores de items, se realiza la suma y se muestra el total */

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
