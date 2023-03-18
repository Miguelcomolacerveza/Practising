import { averiguarSexo, averiguarObjetivo, averiguarEjercicio, averiguarDatos, caloriasSexo, caloriasTotales} from './funcionesDieta';

let ejecutaPrograma = true;
let TMB_Sexo;

while (ejecutaPrograma){

    let sexoPersona = averiguarSexo();
    let objetivoPersona = averiguarObjetivo();
    let ejercicioPersona = averiguarEjercicio();
    let pesoPersona = averiguarDatos("peso", 20, 200);
    let edadPersona = averiguarDatos("edad", 5, 200);
    let alturaPersona = averiguarDatos("altura", 100, 250);

    TMB_Sexo = caloriasSexo(sexoPersona,pesoPersona, edadPersona, alturaPersona);
 
    caloriasTotales(TMB_Sexo, ejercicioPersona, objetivoPersona);
    continuarSalirPrograma();
}