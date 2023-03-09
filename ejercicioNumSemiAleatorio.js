// Ejercicio Numero SemiAleatorio

// Creamos función para convertir los datos que introduce el usuario en int

function convertirCadenaNumero(cadena) {
    let numero = prompt(cadena);
    numero = parseInt(numero);
    return numero;
}

// Creamos Numero Aleatorio y lo redondeo

let numeroAleatorio = (Math.random() * 10);
let numeroRedondeado = Math.floor(numeroAleatorio);

// Creamos bandera/condición para el bucle

let banderaPreguntarAlUsuario = true;

while(banderaPreguntarAlUsuario) {
    
    // Pedimos numero al usuario
    
    let numeroDelUsuario = convertirCadenaNumero("Inserta un número");
    
    // Comprobamos si ha acertado o no y lo mostramos por pantalla

    if(numeroDelUsuario === numeroRedondeado){
        console.log("Has acertado! Enhorabuena!");
        banderaPreguntarAlUsuario = false;
    } else if(numeroDelUsuario < numeroRedondeado){
        console.log("No has acertado, el número es mayor que el insertado");   
    } else {
        console.log("No has acertado, el número es menor que el insertado"); 
    }
}
