//Antes de ECMA
function newFunction(name, age, country){
    var name = name || 'Andres';
    var age = age || 25;
    var country = contry || 'CO'
    console.log(name, age, country);
}

//con ECMA
function newFunction2 (name = 'Andre', age = 32, country = 'CO'){
    console.log(name, age, country);
}
newFunction2();
newFunction2('Felipe', 52, 'VZ');

//Template let

let hello = 'Hello';
let world = 'World';
let epicPharse = hello + ' ' + world;

console.log(epicPharse);
let epicPharse2 = `${hello} ${world}`;
console.log(epicPharse2);