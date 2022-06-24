const data = {
    frontend: 'Andres',
    backend: 'Felipe',
    design: 'Carlos',
};
const entries = Object.entries(data)

console.log(entries);



const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Hello World'), 3000)
        :reject(new Error('Test Error'))
    })
};

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();

const a = 'a';
const a = 'b';

console.log(a)