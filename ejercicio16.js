/**
 * 
 * 
 * Dada una cadena de texto, devolver cuántas vocales tiene. 
 * 
 * Ejemplo: vocales(luisa) //devuelve 3
 * https://dev.to/soyleninjs/6-formas-de-convertir-un-string-en-array-con-javascript-320n
 */


//

function vowels(text) { 

   // var cadena = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let expresion = /[aeiouAEIOU]+/g;
    var array_emparejamientos = text.match(expresion);
    //lo convierto en string, luego en array.
    let stringArray = array_emparejamientos ? array_emparejamientos.toString().replace(/,/g, '') : 0;
    let arr = Array.from(stringArray);
    //console.log(arr);
    //console.log(arr.length);

//     const expresion = /[aeiouAEIOU]+/g;
//     let count = 1;
//     console.log(text.search(expresion));
//     for (letter of text) {
//         // if (text.includes(expresion)) {
//         //     count++;
//         // }
//         if (text.search(expresion)) {
//             count++;
//         }
//     }
    
//    return count;
    //return text;
    return arr ? arr.length : 0;
}

console.log("The text has ", vowels("rr"), " vowels");