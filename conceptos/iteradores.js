// High Order Funtions
// funciones de order superior
// son funciones que reciben funciones como : 
// parametros 

const suma = (a,b) => a + b;
const resta = (a,b) => a- b;

const operation = (a,b,callback) => {
    const result = callback(a,b);
    console.log('El resultado es: ' + result);

}

operation(12,5,suma);
operation(12,5,resta);
operation(12,5, (a,b) => a * b);

const cars = ['vocho','tsuru','pointer','bmw', 'athos'];

cars.forEach(car => {console.log(car)});

let filtrados = cars.filter(car => car === 'tsuru');
console.log(filtrados);

filtrados = cars.filter(car => car.includes('o'));
console.log(filtrados);

// regresar los que comiencen con a
filtrados = cars.filter(car => car.startsWith('a'));
console.log(filtrados);
//regresar los que terminen con u
filtrados = cars.filter(car => car.endsWith('u'));
console.log(filtrados);
//regresar los que tengan menos de 5 letras
filtrados = cars.filter(car => car.length < 5);
console.log(filtrados);


//metodo map
const CARS = cars.map(car => car.toUpperCase());
console.log(cars);
console.log(CARS);
// esto lo que hace es que con el metodo split separa cada caracter de el string el reverse gira las letras y finalmente con join los vuelve a pegar
const srac = cars.map(car => {
    return car.split('').reverse().join('')

});
console.log(srac);

function wrapping(gifts) {
    //return envueltos 
    return gifts.map(gift => {
        let tapa  = '*'.repeat(gift.length + 2);
        let g = `${ tapa }\n*${ gift }*\n${ tapa }`;
        return g;
    });
  }

const carsenvuelto = wrapping(cars);
carsenvuelto.forEach(car => console.log(car));

// reduce
//se genera un unico objeto a partir de todos lo elementos

const numeros = [ 1,2,3,4,5,6,7,8,9,10];
const numsum = numeros.reduce((a,b) => a + b);
console.log(numsum);
const factorial = numeros.reduce((a,b) => a * b);
console.log(factorial);

// que todos sean mayores de edad
//every regresa un verdadero si todos cumplen 
const ages = [23,14,57,54,56,23,45,33];
const olders = ages.every(age => age>= 18);
const youngers = ages.every(age => age <= 18);
console.log(olders);
console.log(youngers);
//some regresa verdadero si uno cumple
const olders2 = ages.some(age => age>= 18);
const youngers2 = ages.some(age => age <= 18);
console.log(olders2);
console.log(youngers2);