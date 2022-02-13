/**
 *
 * Dada una cadena de texto, darle la vuelta e invertir el orden de sus caracteres, sin usar métodos
 * propios del lenguaje, solo estructuras de control.
 *
 * Ejemplo:
 * p
 * e
 * r
 * r
 * o
 *
 * o
 * r
 * r
 * e
 * p
 */

function reverse(word) {
  //console.log(word.length);
  //console.log(word[i]);
  let newWord = "";
  for (var i = word.length - 1; i >= 0; i--) {
    newWord += word[i];
  }
  return newWord;
}

console.log(`The word backwards is: ${reverse("robles")}`);

function invertir(texto) { 

    let invertido = "";

    for ( let letra of texto){ 
        invertido = letra + invertido;
    }
    return invertido;
}

function invertir(texto) {
    return texto.split("").reverse().join("");
}
console.log(`The word backwards is: ${invertir("robles")}`);