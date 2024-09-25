//ejercicios 
/**
 * crear una array con los elementos deñ 1 al 10 
 * crear un nuevo con los cuadrados 
 * crear uno con los cubos
 * crear uno nuevo con las mitades
 * 
 * crear una nuevo con los pares 
 * crear uno nuevo con los impares 
 * crear uno nuevo con valores entre el 3 y el 8
 */

const numbers = [1,2,3,4,5,6,7,8,9,10];

const cuadrados = numbers.map(number => number * number);
console.log(cuadrados);

const cubos = numbers.map(number => number * number * number);
console.log(cubos);

const mitad = numbers.map(number => number/2);
console.log(mitad);

const pares = numbers.filter(number => number%2 === 0);
console.log(pares);

const impares = numbers.filter(number => number%2 === 1);
console.log(impares);

const inter = numbers.filter(number => number >= 3 && number <= 8);
console.log(inter);


// segunda ronda 

const squa = numbers.map(n => n ** 2);
const pairs = numbers.filter(n => n % 2 !== 0);
