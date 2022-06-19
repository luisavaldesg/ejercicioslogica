/**
 * Recibir un número y mostrar los números primos que hay hasta ese número
 * Ej 1 al 20, debe mostrar 1,2,5,7,11.. etc
 * Número primo es divisible solo entre 1 y el mismo
 * El unico numero par primo es el 2
 * Operador mod, obtiene residuos de la división.
 */



function isPrime(number) { 
    let count = 0;
    for (let i = 1; i <= number; i++) {
        if (number % i == 0) count++;
    }
    return (count == 2) ? true : false;
}



function primeNumbers(quantity) {
    let primes = [];
    for (let i = 1; i <= quantity; i++){
        if (isPrime(i))
            primes.push(i);
    }
    return primes;
}
console.log(`Prime numbers: ${primeNumbers(10)}`);

/**
 Algoritmo serie Fibonacci
 En matemáticas, la sucesión o serie de Fibonacci es la siguiente sucesión infinita de números naturales:
    0,1,1,2,3,5,8,13,21,34,55,89,144,233,377
 ¿Cuántos números de la serie Fibonacci quiere:? 5

 */


function fibonacci(n) {
    let ant = 0;
    let act = 1;
    for (let i = 1; i <= n; i++){

    }

}
console.log("Fibonacci" + fibonacci(8));

/**
 * Dado un arreglo ordenarlo de  menor a mayor.
 */