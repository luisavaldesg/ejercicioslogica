/**
 * Dados dos arrays devolver array con solo los elementos comunes
 * entre ellos.
 * [1,2,3,4,5,6,7,8]
 * [2,3,4,5,4]
 * [2,3,4,5]
 */

function elementosComunes(array1, array2) { 

    //let allArrays = array1.concat(array2);
    //console.log(allArrays);
    let arrayNew = [];
    for (let i = 0; i < array1.length; i++) { 
        if (array2.includes(array1[i])) { 
            arrayNew.push(array1[i]);
        }
    }
    console.log(arrayNew);
    // for(var i = 0; i < arrayFirst.length; i++) {
    //     console.log(array1[i]);
    // } 
    //let j = 1;
    //let count = 0;
    //0 a 12
    // for (var i = 0; i < allArrays.length; i++) { 
    //     for (var j = 1; j <=11; j++) { 
    //         if (allArrays[i] == allArrays[j]) {
    //             count++;
    //         }
    //         console.log("i " + i + ": " + "j " + j);
    //     }
    //     // if (array2[i].includes(array1[i])) {
            
    //     // }
    // }
    

}
//[1, 2, 3, 4, 5, 7, 8, 9, 1, 2, 3, 4]
elementosComunes([7, 8, 9, 1, 2, 3, 4],[1, 2, 3, 4, 5]);




function elementsComunes(array1, array2) { 
    const newArrayFiltred = array1.filter(element => array2.includes(element));
    console.log(newArrayFiltred);
}
elementsComunes([1, 2, 3, 4, 5], [7, 8, 9, 1, 2, 3, 4]);








//Método filter en javascript
//Tener un arreglo que tiene una parte de los elementos del arreglo.
//Arreglo nuevo, metodo inmutable, de la misma cantidad o menos elementos de la cantidad original.

//Arreglo filtrado con los elementos que nosotros queramos. clg


const numeros = [1, 2, 3, 24, 32, 49, 48,, 54, 67, 88, 4, 5, 6, 7, 8, 9];
const mascotas = [
    { "nombre": "Alaska", "edad": 2, "raza": "gato" },
    { "nombre": "Ronalda", "edad": 4, "raza": "perro" },
    { "nombre": "Lulo", "edad": 8, "raza": "gato" },
    { "nombre": "Limber", "edad": 12, "raza": "perro" },
];

function isPares(number) { 
    return (number % 2 == 0) ? true : false;
}
console.log(isPares(14));
const perros = mascotas.filter(x => x.raza == "perro");
const pares = numeros.filter(x => isPares(x));
const perrosViejos = mascotas.filter(x => x.edad > 4);
console.log(perros);
console.log(pares);
console.log(perrosViejos);

//Map en javascript
