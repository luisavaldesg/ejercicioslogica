/**
 *
 * Dada una palabra, buscarla en una frase y devolver cuántas veces
 * aparece en ella.
 * La frase y la palabra deben ser parámetros de una función.
 * Separar la frase por espacios y guardar en un arreglo cada palabra.
 * Luego recorrer el arreglo y preguntar si la palabra está en x posición.
 */

function findWord(word, sentence) {
  //console.log(word, phrase);
  //let position = phrase.indexOf(word);
  //console.log("The word is at position " + position);

  let newArray = sentence.toLowerCase().replace(/[!¡_.,-]/gi, " ");
  newArray = newArray.split(" ");
  console.log(newArray);
  let count = 0;
  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] == word) {
      count++;
    }
  }
  //console.log(newArray);
  return count;
}

console.log(
  "The word is in the sentence " +
    findWord(
      "I",
      "I bought a HOUSE new house My house is expensive and I would like to buy a new house more comfortable."
    ) +
    " times."
);
// const sentence = 'The quick brown foxfox jumps over the lazy dogfox.';

// const word = 'fox';

// console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);

//Expresión regular, de manera global g, indistintamente i
//si es mayus o minus.

/**
 *
 * El for of lo que hace es mostrarme el valor que hay que
 * dentro de cada elemento del array.
 * the
 * dog
 * is
 * in
 * .
 * .
 * .
 *
 * El for in muestra el indice de la propiedad en sí
 * 0,1,2, 3, 4
 * /*/

function coincidencia(frase, busqueda) {
  let texto_limpio = frase.toLowerCase().replace(/[!¡_.,-]/gi, " ");
  let resultado = 0;
  console.log(texto_limpio);

  if (texto_limpio.includes(busqueda)) {
    let palabras = texto_limpio.split(" ");
    let mapa = {};

    for (let palabra of palabras) {
      if (mapa[palabra]) {
        mapa[palabra]++;
      } else {
        mapa[palabra] = 1;
      }
    }
    //console.log(palabras)
    //console.log(mapa);
    resultado = mapa[busqueda];
  } else {
    resultado = 0;
  }
  return resultado;
}
console.log(
  "The number of coincidences is",
  coincidencia(
    "The dog is in the park.Park park, the-park, the_park!!!",
    "PARK"
  )
);
