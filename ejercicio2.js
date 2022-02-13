/**
 *
 * Enunciado Ejercicio 2
 * Dada una cadena de texto, comprobar si es un palindromo o no.
 * Los palindromos son palabras que se leen igual aún estando  invertidas
 * o no por ejemplo: ana, bob, otto, amoraroma
 * a n a
 */

//split separa el texto por un separador, -, '',
//que no me separe por nada y que cada letra la guarde en un array
function palindromo2(texto) {
  let invertido = texto.split("");

  //console.log(invertido[3]);
  //console.log(texto[0]);
  count = 0;
  j = texto.length - 1;
  //console.log(j);
  for (let i = 0; i < invertido.length; i++) {
    //console.log(invertido[i]);
    if (texto[i] == invertido[j]) {
      j--;
      count++;
    } else {
      palindromo = false;
    }
  }
  if (count == texto.length) {
    palindromo = true;
  } else {
    palindromo = false;
  }
  console.log("Palíndromo:" + palindromo);
}

function palindromo(texto) {
  let invertido = texto.split("").reverse().join("");
  /*
    if(invertido === texto){
        return true;
    }else{
        return false;
    }     
*/

  return invertido == texto;
}
console.log("Es un palíndromo??" + palindromo("ana"));

/**
 *
 * RESTAR DOS NUMEROS SIN HACER UNA RESTA
 *
 */
//resto sin -

// let a=5;
// let b=1;
// let count=0;
// console.log(a + "  -  " + b + "  =  ");
// while(a>b){
//     b++;
//     count++;
// }
// console.log(count);

// //multi
// a=8;
// b=4;
// multi=0;
// for(let i=1; i<=b;i++){
//     multi+=a;
// }
// console.log(multi);

// //potenciacion
// //2**4 = 2*2*2*2 = 16

// function potenciacion(base, exponente){
//     let result=1;
//     for(let i=1; i<=exponente; i++){
//         result*=base;
//     }
//     return result;
// }
// console.log("Resultado de la potenciación: "+ potenciacion(2,3));
// //division
// //la división es lo opuesto a la multiplicación

// //result = 1*2
// function division(dividendo, divisor){
//     /*
//     result=1;

//     while(result != dividendo){
//         result *=divisor;
//     }
//     return result;*/
//     /*
//     let i=1;
//     let result=1;
//     while(result != dividendo){
//         result = divisor*i;
//         i++;
//     }
//     return i-1;   */
//     //No permite divisiones entre numeros decimales
//     result =1;
//     let i;
//     for(i=1; result != dividendo; i++){
//         result = divisor*i
//     }
//     return i-1;
// }

// console.log("Resultado de la división: " + division(8,2));

// //
// function factorial(numero){
//     for(let i=1; i<=numero; i++){

//     }
// }
// console.log("Factorial del número es: " + factorial(5));

// //Optimización de código, el 100 nunca será divisible por 51, 52 etc...
// //Vueltas innecesarias.
// //Pensamiento crítico sobre lo que estás haciendo.
// function verifyPrime(number){
//     prime = true;
//     for (let i=2; i<= number/2 && prime; i++) {
//         if(number%i == 0)prime=false;
//     }
//     if(prime){
//         console.log("The number " + number + "is prime");
//     }else{
//         console.log("The number " + number + "is not prime");
//     }
// }

// verifyPrime(5)

// function esPalidromo(palabra){
//     let j = (palabra.length) - 1;
//     let cont = 0;
//     //console.log(palabra.length);
//     let palindromo=true;
//     console.log(j);
//     for (var i=0; i<palabra.length && palindromo; i++){
//         if(palabra[i]==palabra[j]){
//             j--;
//             //cont++;
//             //console.log(j);
//         }else{
//             palindromo = false;
//         }
//     }
//     if(j<=0){
//         palindromo = true;
//         console.log("Es palindroma");
//     }
//     console.log(j);
//     console.log(palindromo);

//     //console.log(palabra.length);
// /*
//     for(i=palabra.length;i>=0;i--){
//         //let ultima = (palabra.length)-1;
//         console.log(palabra[i]);
//         //let result += palabra[i];
//         //console.log(result);
//         // if(palabra[i] == palabra[palabra.length-1]){
//         //     console.log(i);
//         // }else{
//         //     console.log('no es igual');
//         // }

//     }*/
//     /*
//     let palindromo;
//     let palabraArray = [];
//     let arrayComparar =[];
//     for(i=0;i<palabra.length;i++){
//         palabraArray.push(palabra[i]);
//     }

//     console.log(palabraArray);
//     console.log(palabraArray.reverse());

//     arrayComparar = {...palabraArray.reverse()};
//     let count=0;
//     console.log(palabraArray[0]);
//     console.log(arrayComparar[0]);
//     /*for(i=0;i<palabraArray.length;i++){
//         if(arrayComparar[i]==palabraArray[i]){
//             console.log(arrayComparar[i]);
//             console.log(palabraArray[i]);
//         }
//     }
//     console.log(count);
//     if (count==arrayComparar.length){
//         console.log("La palaabra es palindrome")
//     }else{
//         console.log("The word not is palindrome")
//     }

//     //palabraArray == arrayComparar ? palindromo=true : palindromo=false;

//     //console.log(palindromo);
//     //console.log(palabraArray.reverse());*/

//

//}

//esPalidromo("laturbabrutal");
