
// Ejercicio 1.1

let a = 5;
let b = 10;
let temporal;

console.log("Valores iniciales:");
console.log("a = " + a + ", b = " + b);

temporal = a;
a = b;
b = temporal;

console.log("Valores intercambiados:");
console.log("a = " + a + ", b = " + b);

//Ejercicio 1.2

let ab = 10;
let bb = 20;

// Intercambio los valores de a y b
[ab, bb] = [bb, ab];

// Imprimo los nuevos valores de a y b
console.log("a = " + a );
console.log("b = " + b );

// Ejercicio 2

// Guardo precios de todas las cryptos

let btcPrecio = 100000;
let ethPrecio = 24000;
let maticPrecio = 10;
let bnbPrecio = 1000;
let cartera = 24000;

// Calculo cuantas cryptos puedo comprar de cada tipo

let btcCantidad = cartera / btcPrecio;
let ethCantidad = cartera / ethPrecio;
let maticCantidad = cartera / maticPrecio;
let bnbCantidad = cartera / bnbPrecio;

// Muestro por pantalla los resultados
console.log("Con "+ cartera +" dólares puedes comprar " + btcCantidad + " BTC, " + ethCantidad + " ETH, " + maticCantidad + " MATIC y " + bnbCantidad + " BNB.");

// Ejercicio 3

// Defino los arrays y las notas.

let asignaturas = ["mates","lengua", "programación", "inglés", "naturales", "química"];
let notas = [4,8,10,9,6,5];
let marcaAsignatura;

for( let i = 0; i <= asignaturas.length-1; i++ ){
   
    if (notas[i] < 5) {
    marcaAsignatura = "Suspenso";
    } else if (notas[i] >= 5 && notas[i] < 7) {
    marcaAsignatura = "Bien";
    } else if (notas[i] >= 7 && notas[i] < 9) {
    marcaAsignatura = "Muy bien";
    } else if (notas[i] >= 9 && notas[i] <= 10) {
    marcaAsignatura = "Excelente";
    } 
    // Voy mostrando por pantalla la relación asignatura/nota
    console.log("En la asignatura de " + asignaturas[i] + " has sacado un " + marcaAsignatura);
}