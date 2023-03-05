//Ejercicio 1

console.log("Ejercicio 1:")

// Contador con for

let contadorFor = 0; 

for(let i = 0; i <= 10; i++) {
    console.log("contador con for: " + contadorFor);
    contadorFor++;
};

// Contador con while 
contadorWhile = 0;
while(contadorWhile <= 10) {
    console.log("contador con : " + contadorWhile );
    contadorWhile++;
};

// Ejercicio 2

console.log("Ejercicio 2:")

var continuar = prompt("¿Deseas continuar?");
var bandera = true; 

while (bandera) {    
      if (continuar === "S" || continuar === "s") 
        continuar = prompt("¿Desea continuar?");
      else if(continuar === "N" || continuar === "n") { 
        bandera = false;
      } else {
      continuar = prompt("Para poder continuar debe teclee el caracter S o s, para finalizar teclee N o n");         
      }
}
continuar = console.log("Programa Finalizado");

// Ejercicio 3

// console.log("Ejercicio 3: Con While  y con For")

// Creo las variables nececesarias para llevar las cuentas

let cantidadDeseadaAhorro = prompt("¿Cuánto deseas ahorrar?");
let ahorroDiario = 0;
let ahorroTotal = 0;

// Al pedirla por el prompt debemos cambiarla a int

cantidadDeseadaAhorro = parseInt(cantidadDeseadaAhorro);

while(ahorroTotal < cantidadDeseadaAhorro) {
    ahorroDiario = prompt("¿Cuánto has ahorrado hoy?");
    ahorroTotal += parseInt(ahorroDiario);
    console.log("Ahorro Total While " + ahorroTotal);
}
console.log("Felicidades");

// Reseteo las variables para hacerlo con For

cantidadDeseadaAhorro = prompt("¿Cuánto deseas ahorrar?");
ahorroDiario = 0;
ahorroTotal = 0;

// Al pedirla por el prompt debemos cambiarla a int

cantidadDeseadaAhorro = parseInt(cantidadDeseadaAhorro);


for( ;ahorroTotal < cantidadDeseadaAhorro; ){
    ahorroDiario = prompt("¿Cuánto has ahorrado hoy?");
    ahorroTotal += parseInt(ahorroDiario);
    console.log("Ahorro Total For " + ahorroTotal);
}
console.log("Felicidades");
