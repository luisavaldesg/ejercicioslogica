/**
 * 
 * Dados dos números devolver cuántos números impares hay entre ellos.
 * 
 * impares(1,100) //Devuelve 49
 */

function oddNumber(num1, num2) { 
    let count = 0;
    for (let i = num1; i < num2; i++){
        if (i % 2 !== 0) count++;
    }
    return count;
}
console.log("There are " + oddNumber(1, 10) + " odd numbers.");