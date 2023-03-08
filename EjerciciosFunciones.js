// Ejercicios Funciones

// Ejercicio 1

console.log("Ejercicio 1");

// Creo función para convertir los datos que introduce el usuario en int

function convertirCadenaNumero(cadena) {
    let numero = prompt(cadena);
    numero = parseInt(numero);
    return numero;
}

// Creo función para sumar los números pares

function sumaPares(numeroDelUsuario) {
    let sumaTotal = 0;
    let numerosQueSeSuman = "";
    for(let i = 1; i <= numeroDelUsuario; i++){
            if((i % 2) == 0){
                  sumaTotal += i;
                  numerosQueSeSuman+= "" + i + " "
            }
        }    
    console.log(numerosQueSeSuman);
    return sumaTotal;
}

// Llamo a la función para convertir número
let numeroUsuario = convertirCadenaNumero("Inserta un numero");

/* Llamo a la función que calcula la suma de los pares
 y muestro el resultado por pantalla */

let sumaTotalSumaPares = sumaPares(numeroUsuario);
console.log("La suma total de los numeros es " + sumaTotalSumaPares);

// Ejercicio 2

console.log("Ejercicio 2");

// Creo función para calcular el area del triángulo
function areaTriangulo(base,altura) {
    let area = (base * altura) / 2;
    return area;
}
// Pido los datos por consola para calcular el area y los convierto en int
let baseTriangulo = convertirCadenaNumero("Inserta la base");
let alturaTriangulo = convertirCadenaNumero("Inserta la altura");

// Muestro por pantalla el area del triángulo 

console.log("El area total del triángulo es: " + areaTriangulo(baseTriangulo,alturaTriangulo));

// Ejercicio 3

console.log("Ejercicio 3");


function factorial(numeroDelUsuario) {
    let factorialDelNumero = 1;
    let numerosQueSeMultiplican = "";
    for(let i = 1; i <= numeroDelUsuario; i++){
    // Todos los números que se multiplican
                  factorialDelNumero *= i;
                  numerosQueSeMultiplican+= "" + i + " "
        }    
    console.log(numerosQueSeMultiplican);
    return factorialDelNumero;
}

  let numeroFactorialUsuario = convertirCadenaNumero("Inserta un numero");

// Llamo a la función que calcula el factorial del numero insertado
  let factorialTotal = factorial(numeroFactorialUsuario);
//
 console.log("El factorial del numero " + numeroFactorialUsuario + " es: " + factorialTotal);
