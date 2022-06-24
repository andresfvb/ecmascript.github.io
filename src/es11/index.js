const button = document.getElementById("btn");

button.addEventListener("click", async function(){
    const module = await import("./file.js");
    module.hello();
})

const aBigNumber = 90071992544740991n;

const anotherBigNumber = BigInt(90071992544740991n);

console.log(aBigNumber);
console.log(anotherBigNumber);