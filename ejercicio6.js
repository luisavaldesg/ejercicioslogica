/**
 *
 * Dibujar un cuadrado hueco con asteriscos
 *
 * Ejemplo:
 * cuadrado(4)
 *    ****
 *    *  *
 *    *  *
 *    ****
 *
 */
function side(number) {
  let side = "";
  for (let i = 0; i < number; i++) {
    side += "*";
  }
  return side;
}

function smallSquare(number) {
  let x = "";
  for (let i = 1; i <= number; i++) {
    if (i == 1 || i == number) {
      x += "*";
    } else {
      x += " ";
    }
  }
  return x;
}
function repeatNullSquare(x) {
  for (let i = 1; i <= x - 2; i++) {
    console.log(smallSquare(x));
  }
}

function fullSquare(number) {
  console.log(side(number));
  repeatNullSquare(number);
  console.log(side(number));
}
fullSquare(8);

function cuadrado(numero) { 
    let dibujo = side(numero) + "\n";

    
    let contenido = "";
    for (let i = 0; i < (numero-2); i++) {
        contenido = "*";
        for (let j = 0; j < (numero - 2); j++){
            contenido += " ";
        }
        contenido += "*";
        dibujo+= contenido + "\n";
    }

    dibujo += side(numero);
    return dibujo;
}
console.log(cuadrado(10));


