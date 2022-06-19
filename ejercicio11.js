/**
 * 
 * Dado un texto y una busqueda censurar todas las coincidencias de la búsqueda
 * en eltexto con [-CENSURADO-]
 * 
 * Si el texto y la búsqueda están vacíos mostrar
 * "No puedes leer el texto y la búsqueda" en el caso de que ambos parámetros no lleguen.
 *  censurado("hola hola", "hola") //Devuelve [-CENSURADO][-CENSURADO]
 *  censurado() //No puedes leer el texto y la busqueda
 * censurado("hola") //No puedes hacer la búsqueda
 */

//Parametros opcionales pueden llegar o no. 
    
// if (text == null && (search == null || search == "")) { 
//     console.log("You don't have a text and search parameter...");
// } else if(search == "" || search == null) {
//     console.log("You don't have a search parameter. :(");
// } else {
    

function censured(text = false, search = false) { 
    let resultado; 
    if (!text && !search) {
        resultado = "No puedes leer el texto y la búsqueda";
    } else if (!text && search) {
        resultado = "No puedes leer el texto";
    } else if (text && !search) {
        resultado = "No puedes hacer la búsqueda.";
    } else if (text && search) {
        
        //Expresiones regulares. Patron de busqueda
        //resultado = new RegExp(search, 'gi');
        //Que se busque de manera global e indistintamente si es mayus o minuscula esa palabra.
        resultado = text.replace(new RegExp(search,'gi'), "[-CENSURADO-]");


    }
    return resultado;
}
console.log(censured("hi hi himanola hi78 HI HI HI hI hIIIii amorcito", "hi"));