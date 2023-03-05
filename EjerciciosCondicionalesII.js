// Ejercicios Condicionales II

// Ejercicio 1

console.log("Ejercicio 1");

/* Creo una función para comprobar que el número introducido 
por el usuario es válido para hacer el calculo del área */

function verificacionSiEsNumero(numero){   
    for(let i = 0; i < numero.length;i++){
        if(numero!="0" && numero!=0){ //Indico !=0 ya que si insertas más de un 0 lo acepta y num*0 = 0 
            if(numero[i]>="0" && numero[i]<="9"){ //Solo válidos números del 1 al 9
            } else {
                console.log("No es un número válido");    
                break;
            } 
        } else {
            console.log("No es un número válido"); 
            break;
        }
    }
    if(bandera){
        return numero;
    } else {
        numero = false;
        return numero; 
    }
}

/*
Nota: Al pasarle un número a través del prompt realmente estoy pasando a la función verificaciónSiEsNumero()
un carácter con forma de número pero javascript al ser un lenguaje no tipado, lo acepta y funciona.
*/

let baseUsuario = false;
let alturaUsuario = false;
let banderaAltura = false;
let banderaBase = false;

//Preguntamos al usuario la base y la altura. Guardamos la información

while(!baseUsuario){
    if(banderaBase == false){ 
        baseUsuario = verificacionSiEsNumero(prompt("Inserta la base"));
        banderaBase = true; //Si banderaBase es true sigue pidiendo un numero correcto.
    } else {
        baseUsuario = verificacionSiEsNumero(prompt("Por favor inserte un número válido para la base."));
        //En el momento que el número sea un número correcto sale del bucle.
    }
}

while(!alturaUsuario){
    if(banderaAltura == false){
        alturaUsuario = verificacionSiEsNumero(prompt("Inserta la altura"));
        banderaAltura = true;//Si banderaAltura es true sigue pidiendo un numero correcto.
    } else {
        alturaUsuario = verificacionSiEsNumero(prompt("Por favor inserte un número válido para la altura."));
        //En el momento que el número sea un número correcto sale del bucle.
    }
}

let areaNum = parseInt(baseUsuario);
let alturaNum = parseInt(alturaUsuario);

let areaTotal = areaNum * alturaNum;

console.log("Area = " + areaTotal + " Metros Cuadrados");

// Ejercicio 2

console.log("Ejercicio 2");

// Calculo el descuento y lo resto

let descuento = 400*0.15;
let precioFinal = 400-descuento;
console.log("Precio Final con descuento " + precioFinal);

//Ejercicio 3

console.log("Ejercicio 3");

//Pido coordenadas por parámetros

let x = prompt("Inserte Coordenada X");
let y = prompt("Inserte Coordenada Y");

//Averiguo el cuadrante y lo muestro por pantalla

if(x > 0 && y > 0){
    console.log("Estamos en el cuadrante 1");
} else if(x > 0 && y < 0){
    console.log("Estamos en el cuadrante 2");
} else if(x < 0 && y < 0){
    console.log("Estamos en el cuadrante 3");
} else if(x < 0 && y > 0){
    console.log("Estamos en el cuadrante 4");
}
