//Antes de ECMA
function newFunction(name, age, country){
    var name = name || 'Andres';
    var age = age || 25;
    var country = contry || 'CO'
    console.log(name, age, country);
}

//con ECMA6
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

//Multilineas antes de ECMA6
let lorem = "Esta es mi frase para poder usar el ejemplo de ECMAScript\n"
+ "Continuación de la frase."

//Multilineas con ECMA6
let lorem2 = `Esta es mi segunda frase para poder usar el ejemplo de ECMAScript
Ahora es otra frase epica`;

console.log(lorem);
console.log(lorem2);


//Destructurando con ECMA
//Antes de ECMA6
let person = {
    'name': 'Andres',
    'age': '32',
    'country': 'CO'
}

console.log(person.name, person.age, person.country);

//Despues de ECMA6
let {name, age, country} = person;

console.log(name, age, country);

//Propagacion o expandir elementos
let team1 = ['Andres', 'Felipe', 'Ricardo'];
let team2 = ['Jose', 'Carlos', 'Pedro'];

let students = ['Pedro', ...team1, ...team2];

console.log(students);

//Que es let
//Algo para guardar en memoria, es decir que solo se puede usar dentro 
//de donde se este trabajando
{
    var globalVar = "Global var";
}

{
    let globalLet = 'Global let';
    console.log(globalLet);
}

console.log(globalVar);

//Const: Nos permite establecer una variable constante, no cambia
const a = 'b';
a = 'a';
console.log(a);

let name2 = 'Andres';
let age2 = 32;
//Antes de ECMA6
obj = {name: name2, age: age2};
//Despues de ECMA6
obj2 = {name2, age2};

console.log(obj2);

const name = [
    {name: 'Andres', age: '32'},
    {name: 'Felipe', age: '25'}
]

let listOfNames = names.map(
    function(item){
        console.log(item.name);
    }
)

//Arrow Functions
let listOfNames2 = names.map(item=>console.log(item.name));

const listOfNames3 = (name, age, country) => {
    ...
}

const listOfNames4 = name => {
    ...
}

//Crear la variable y asignarle alguna operacion resultante en la misma asignación
const square = num => num * num;

//Promesas para trabajar el asincronismo
//Algo que va a pasar

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if(false){
            resolve('Super!')
        }else{
            reject('Ups!')
        }
    });
}
//Ejecutamos la funcion
helloPromise()
//Ejecutamos la respuesta
.then(response => console.log(response))
//Si la promesa no se cumple
.catch(error => console.log(error))



//Clases
class calculator {
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB
    }
}

const calc = new calculator()
console.log(calc.sum(2, 2))

//Import y Export (Trabajar con modulos)

const hello = require('./modules.js')
console.log(hello());

//funciones generadoras

function* helloWorld(){
    if(true){
        yield 'Hello, ';
    }
    if(true){
        yield 'World';
    }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);

