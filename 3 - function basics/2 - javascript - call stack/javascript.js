const aInput = document.querySelector(".numberInputA");
const bInput = document.querySelector(".numberInputB");
const button = document.querySelector("button");
const para = document.querySelector(".output");
const list = document.querySelector("ul");

let ms = 1000;
let stack = [add.name, average.name, "javascript.js"]

async function add(a,b) {
    await push();
    return a + b;
}

async function average(a,b) {
    await push();
    const sum = await add(a,b);
    return sum/2;
}

button.addEventListener('click', async () => {
    await push();
    const numA = parseFloat(aInput.value);
    const numB = parseFloat(bInput.value);
    const result = await average(numA, numB);
    para.textContent = "Result: " + result;
    poper();
    stack = [add.name, average.name, "javascript.js"]
});

function updateStack() {
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve('resolved');           
        }, ms);
    });
}

async function push() {
    let entry = document.createElement('li');
    entry.textContent = stack.pop();  
    const result = await updateStack();
    list.appendChild(entry);
    console.log(result);
}

async function pop() {
    await updateStack();
    list.removeChild(list.lastElementChild)   
}

async function poper() {
    while (list.hasChildNodes()) {
        await pop();
    }
}