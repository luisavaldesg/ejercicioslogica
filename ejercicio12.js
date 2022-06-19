/**
 * 
 * Dado un número mostrar todos los números desde ese número hasta el 0 de
 *  8 en 8 con guiones y cada número debe empezar por nº
 * hastaCero(100)
 * 
 * -nº100
 * -nº92
 * -nº84
 * .
 * .
 * .
 * .
 * .
 * 8
 * 0
 *  * https://dev.to/gdcodev/25-metodos-de-arrays-en-javascript-que-todo-desarrollador-debe-conocer-4a2d
 */

function hastaCero(number) {
    let resultado = `--Del número ${number} al 0---\n`;
    for (let i = number; i>=0; i -=8) { 
       // resultado += "- n° " + i + "\n";
        resultado += `- n° ${i} \n`;
    }
    resultado += "---FIN---";
    return resultado;
}
console.log(hastaCero(100));

function hastaCeroWhile(numero) { 
    let resultado = `--Del número ${numero} al 0---\n`;
    while (numero > 0) {
        resultado += `- n° ${numero} \n`;
        numero -= 8;

        if (numero <= 0) {
            resultado += `- n° 0 \n`;
        }
    }
    resultado += "---FIN---";
    return resultado;
}
console.log(hastaCeroWhile(100));