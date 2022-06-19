/**
 * 
 * Dado un número entero, inviértelo y devuelve el número entero. 
 * Ejemplo.
 * invertirNumero(67) //Devuelve 76
 */

//Divisiones sucesivas entre 10, ir guardando el número.
function changeNumber(number) { 
    let invertido = parseInt(
        number
            .toString()
            .split('')
            .reverse()
            .join('')) * Math.sign(number);
    //console.log(invertido + "Type: " + typeof invertido);
    return invertido; 
}
console.log("The number changed is : " + changeNumber(-123345));