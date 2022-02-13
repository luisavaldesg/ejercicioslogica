/**
 * ¿Cuánto es el x por ciento de x número?
    El 50% de 2000, es 1000
*/

function percentageOfNumber(number, percent) { 
    if (percent < 0) {
        return "We don't calculate negative percentage";
    }
    return(number*(percent/100))
}
console.log(`The percentage is: ${percentageOfNumber(897, 120)}`);

function tantoPorCiento(porcentaje, numero) {
    let operacion = (numero * (porcentaje / 100));
    let resultado = `El ${porcentaje} del ${numero} es ${operacion}`;
    return resultado;
}
console.log(tantoPorCiento(20, 50000));