/**
 * 
 * 
 * Dada una cadena de texto, devolver el carácter más usado
 * ex: masUsado("luisa fue una mujer muy util") 
 * //Devuelve  
 * Lo que mas se repite es u
 * */
function characterMoreUsed(word) { 
   // word = word.split(" ").join("");
    let arrayOfLetters = [];
    let count = 0;
   // arrayOfLetters.push(word);
    console.log(word.includes('u'));
    console.log(word.length);
    word = word.replace(/\s/g, '');
 
    //l
    //u
    for (character of word) { 
        if (word.includes(character)) {
            for (letter in word) {

             }
            //arrayOfLetters.push(character);
            console.log(character);
            count++;
         }
    }
    return count;
}
//console.log(characterMoreUsed("luisa fue una mujer muy util"));

function characterMoreUsed2(text) { 
    let maximoRepeticiones = 0;
    let letraMasRepetida = "";
    text = text.replace(/\s/g, '');
    let mapeo_letras = {};
    for (letter of text) {
        if (!mapeo_letras[letter]) {
            mapeo_letras[letter] = 1;
        } else { 
            mapeo_letras[letter]++;
        }
    }
    //console.log(mapeo_letras);
    for (let letra in mapeo_letras) { 
        if (mapeo_letras[letra] > maximoRepeticiones) { 
            maximoRepeticiones = mapeo_letras[letra];
            letraMasRepetida = letra;
        }
    }
    //console.log(maximoRepeticiones, letraMasRepetida);
    return letraMasRepetida;
}
console.log("The letter more used is: ",characterMoreUsed2("luisa fue una mujer muy util"));