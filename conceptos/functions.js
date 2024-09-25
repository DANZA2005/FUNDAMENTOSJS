//function nameFunction(params){
//body
//returns

//}

//Arrow Funtion 
//const nameFunction = (params) => {
//    body
//    retunrs
//}

function sayHello(){
    console.log('Hello');
}
sayHello();

const Hola = () => console.log('Hola');
Hola();

function holanom (name) {

    console.log(`Hola ${ name }`);

}

holanom('Presidente');

const  holanom1 = name => console.log(`Hola ${ name }`);
holanom('MAAU');
function fullname (name, lastname){

}
fullname('Bruno', 'diaz');

const fullname2 = (name, lastname) => console.log (`${name} ${lastname}`);
fullname2 (aguja, dinamica);

function duplicatenumber(number){
    return number * 2;
}

let duplicate = duplicatenumber (5)
console.log (duplicate)

const halfnumber = number => numer/2;
let half = halfnumber(10);
console.log(half)

function greetings(name = 'Invitado'){
    console.log(`hola ${name}`);
    
}

