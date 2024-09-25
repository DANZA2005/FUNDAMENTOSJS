//Hola, mi nombre es jovanni giorgo pero todos me dicen giorgo

let name = "Jovanni";
let city = "Apizaco";
let message = "mi nombre es " + name + "y soy de " + city;
console.log(message);

message = `Hello, I'm ${ name } and i'm from ${city}`;
console.log(message);

console.log(message.toLowerCase());
console.log(message.length);
console.log(message.toUpperCase())
console.log(message.includes('from'));
console.log(message.startsWith('Hello'));
console.log(message.endsWith('.'));