/**
 * Recomendable: Usar nombres en ingles para las variables/
 * métodos etc
 *
 * Hacer pruebas en cada ejercicio(tests)
 *
 * Enunciado Ejercicio 1:
 * Dado un número, devolver su tabla de multiplicar completa.
 */

function tablaMultiplicar(num) {
  console.log("# Tabla del " + num + " #");
  for (let i = 1; i <= 10; i++) {
    console.log(i + " x " + num + " = " + i * num);
  }
}
tablaMultiplicar(5);

function tablaMultiplicarVR(numero) {
  let resultado = `#Tabla del ${numero} # \n`;

  for (let i = 1; i <= 10; i++) {
    let multiplicacion = i * numero;
    resultado += `${i} x ${numero} = ${multiplicacion}\n`;
  }
  return resultado;
}

console.log(tablaMultiplicarVR(8));
