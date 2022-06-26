/**
 * 
 * Enunciado ejercicio 14 
 * Dado un string y un numero, repetir el string tantas veces como el numero indique
 * Ej
 * repiteme(luisa, 2);
 * result: luisaluisa
 */

function repeatString(string, number) { 
    let repeat = "";
    for (let i = 0; i < number; i++) { 
        repeat += string;
    }
    return repeat;
}
console.log(repeatString("luisa", 5));

//función prototipo
String.prototype.repeatString = function (numberOfRepetitions) { 
    let repeat = "";
    for (let i = 0; i < numberOfRepetitions; i++) { 
        repeat += this;
    }
    return repeat;
}
//Sobre este paramtro me aplicas la funcion prototipo, el string seria el objeto this 
//una función anónima es aquella que no tiene nombre.
console.log("love".repeatString(7));