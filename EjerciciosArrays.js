
// Ejercicios Arrays 1

//Ejercicio 1

let numeros = [5,4,6,8,9];

for(let i = 0; i < numeros.length; i++) {
    console.log("Array posicion For: " + i + " Número: " + numeros[i]);
}

console.log(numeros[0]);
console.log(numeros[2]);
console.log(numeros[3]);

let numerosWhile = [1,4,23,9,6];
let contador = 0;

console.log(numerosWhile);
while(contador < numerosWhile.length) {
    console.log("Array posicion While: " + contador + " Número: " + numerosWhile[contador]);
    console.log("contador " + contador);
    contador++;
}

console.log(numerosWhile[0]);
console.log(numerosWhile[2]);
console.log(numerosWhile[3]);

// Ejercicio 2

// Creo el array para los nombres y la cantidad de nombres

let listaNombres = [];
let cantidadNombres = 5;

for(let i = 0; i < cantidadNombres; i++) {
    // Tomo los nombres, los guardo y los muestro por consola
    let nombreNuevo = prompt("¿Introduce un nombre. Debes introducir 5 nombres en total:")
    listaNombres[i] = nombreNuevo;
    console.log(listaNombres[i]);
}
// Cambio nombre de la tercera posición y la muestro por consola

listaNombres[2] = "Pepito";
console.log(listaNombres);

// Ejercicio 3

// Defino los arrays y las notas.

let asignaturas = ["mates","lengua", "programación", "inglés", "naturales", "química"];
let notas = [3,9,10,7,5,6];
let marcaAsignatura;

for( let i = 0; i <= asignaturas.length-1; i++ ){
    if(notas[i] < 5){
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
