// Función para comprobar si es hombre o mujer
export function averiguarSexo() {
    let ejecutaPreguntaSexo = true;
    let sexo;
    while(ejecutaPreguntaSexo) {
        sexo = prompt("Inserta tu sexo (H/h) para hombre, (M/m) para mujer");
        if(sexo == 'H' || sexo == 'h') {
            //Es un hombre
            sexo = 'Hombre';
            ejecutaPreguntaSexo = false;
        } else if(sexo == 'M' || sexo == 'M') {
            // Es una mujer
            sexo = 'Mujer';
            ejecutaPreguntaSexo = false;
        } else {
            // No nos han introducido un sexo valido
            console.log("Eso no funciono! vuelve a intentarlo");
        }
    }
    return sexo;
}

// Función averiguar objetivo

export function averiguarObjetivo(){
    ejecutaPreguntaObjetivo = true;
    let objetivoPersona;
    while(ejecutaPreguntaObjetivo) {
        objetivoPersona = parseInt(prompt("Inserta tu objetivo"));
        if(objetivoPersona === 1 || objetivoPersona === 2 || objetivoPersona === 3) {
            ejecutaPreguntaObjetivo = false;
        } else {
            // No nos han introducido un objetivo valido
            console.log("Eso no funciono! Vuelve a intentarlo!");
        }
    }
    return objetivoPersona;
}

// Función para comprobar cuanto ejercicio realiza

export function averiguarEjercicio(){
        // Pedimos el objetivo
        let ejecutaPreguntaEjercicio = true;
        let ejercicioPersona;
        while(ejecutaPreguntaEjercicio) {
            ejercicioPersona = parseInt(prompt("¿Cuanto ejercicio haces?"));
            if(ejercicioPersona === 1 || ejercicioPersona === 2 || ejercicioPersona === 3 || ejercicioPersona === 4 || ejercicioPersona === 5) {
                 ejecutaPreguntaEjercicio = false;
            } else {
                // No nos han introducido un objetivo valido
                console.log("Eso no funciono! Vuelve a intentarlo! Introduce cuanto ejercicio haces de nuevo");
            }
        }
        return ejercicioPersona;
}

// Función para comprobar cual es su objetivo 

export function averiguarObjetivos(){
    let ejecutaPreguntaObjetivo = true;
    while(ejecutaPreguntaObjetivo) {
        objetivoPersona = parseInt(prompt("Inserta tu objetivo"));
        if(objetivoPersona === 1 || objetivoPersona === 2 || objetivoPersona === 3) {
            ejecutaPreguntaObjetivo = false;
        } else {
            // No nos han introducido un objetivo valido
            console.log("Eso no funciono! Vuelve a intentarlo!");
        }
    }
    return objetivoPersona;
}

/*Función para comprobar peso, edad y altura
  Dato solicitado puede ser peso, edad o altura */

export function averiguarDatos(datoSolicitado, minimo, maximo){
    let ejecutaPreguntaDatos = true;
    let datoUsuario; 
    while(ejecutaPreguntaDatos) {
        datoUsuario = parseInt(prompt("Inserta tu " + datoSolicitado));
        if(datoUsuario < minimo || datoUsuario > maximo) {
            console.log("Eso no funciono! Inserta valor correcto");
        } else {
            ejecutaPreguntaDatos = false;
        }
    }
    return datoUsuario;
}

/*Función para comprobar calorias según el sexo */

export function caloriasSexo(sexoPersona,pesoPersona, edadPersona, alturaPersona) {
    TMB_Sexo = ((10 * pesoPersona) + (6.25 * alturaPersona) + (5 * edadPersona))
    if(sexoPersona === 'Hombre') {
        TMB_Sexo += 5;
    } else {
        TMB_Sexo -= 161;
    }
    return TMB_Sexo;
}

/*Función para comprobar calorias totales según objetivo */

export function caloriasTotales(TMB_Sexo, ejercicioPersona, objetivoPersona) { 
    const CALORIAS = {
        1 : (TMB_Sexo * 1.2),
        2 : (TMB_Sexo * 1.375),
        3 : (TMB_Sexo * 1.55),
        4 : (TMB_Sexo * 1.725),
        5 : (TMB_Sexo * 1.9)
    }
    
    const totalCalorias = CALORIAS[ejercicioPersona];

    const CALORIAS_OBJETIVO = {
        1 : (totalCalorias + 200), // Ganar Masa Muscular
        2 : (totalCalorias -200)  // Perder Grasa
    }
    
    const totalCaloriasObjetivo = CALORIAS_OBJETIVO[objetivoPersona];
    console.log("El consumo total de calorias son: " + totalCaloriasObjetivo);
}

// Función para volver a empezar o salir del programa.

export function continuarSalirPrograma() {
    let ejecutaPrograma2 = true; 
        while(ejecutaPrograma2){
            continuarPrograma = parseInt(prompt("Quieres volver a responder el formulario? 1: Para continuar, 2 Para salir"));
            if(continuarPrograma == 2){
                ejecutaPrograma = false;
                ejecutaPrograma2 = false;
            } else if (continuarPrograma == 1 ){
                ejecutaPrograma2 = false;
                ejecutaPrograma = true;
            } else {
                console.log("Eso no funcionó! Introduce una opción válida");
            }
        }
            ejecutaPrograma2 = false;
}

