/**

 * Dado un array dividirlo en tantos subarrays
 * como sea necesario basandonos en un numero que indique su 
 * tamaño.
 * Dividirlo en arrays de x elementos.
 * divideArray([2,4,5,6,9], 2)
 * 
 * //devuelve un array con dos sub array de dos elementos.
 * [[2,4],[5,2], [9]]
 */

    //Cant arrays

    // let cantElementos = (array.length) / num;
    // console.log(cantElementos);
    // let arrays = [];
    // console.log(cantElementos);
    // for (let i = 0; i < array.length; i++) {

    // } 
function divideArray(array_principal, numero_elementos) { 
    let arreglos = [];
    let cantElementos = Math.ceil((array_principal.length) / numero_elementos);
    //console.log(cantElementos);
    for (let elemento of array_principal) {
        let ultimo = arreglos[arreglos.length - 1];
        if (!ultimo || ultimo.length === numero_elementos) {
            arreglos.push([elemento]);
        } else { 
            ultimo.push(elemento);
        }
        console.log(arreglos);
    }
    return arreglos;
}
console.log(divideArray([1, 2, 3, 4, 5], 2));