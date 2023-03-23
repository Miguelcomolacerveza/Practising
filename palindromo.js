// Ejercicio 9: Define una función llamada "palindromo" que reciba un parámetro que sea una palabra y 
// retorne un valor booleano indicando si la palabra es un palíndromo o no.
// Un palíndromo es una palabra que se lee igual de izquierda a derecha que de derecha a izquierda.
 
function palindromo(cadena) {

  // Dejamos la cadena sin espacios ya que de lo contrario da error al hacer el bucle.
  // /s+ Se aplica para que afecte a uno o más espacios
  // /g se usa para comprobar todas las combinaciones posibles, en este caso espacios
  

  let cadenaSinEspacios = cadena.replace(/\s+/g, '');
  let cadenaInvertida = "";

  for (let i = cadenaSinEspacios.length - 1; i >= 0; i--) {
    // Invertimos la cadena para ver si son iguales
    cadenaInvertida += cadenaSinEspacios[i];
  }
  return cadenaSinEspacios.toLowerCase() === cadenaInvertida.toLowerCase();
}

console.log(palindromo("Arriba la birra")); // resultado esperado: true
console.log(palindromo("Hola mundo")); // resultado esperado: false
