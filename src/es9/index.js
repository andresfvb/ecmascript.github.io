const obj = {
    name: 'andres',
    age: 32,
    country: 'CO'
};

let { name, ...all } = obj;
console.log(name, all);