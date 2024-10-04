const aInput = document.querySelector(".numberInputA");
const bInput = document.querySelector(".numberInputB");
const button = document.querySelector("button");
const para = document.querySelector(".output");
const list = document.querySelector("ul");

let ms = 1000;
let stack = [divide.name, add.name, average.name, "javascript.js"]

async function add(a,b) {
    await push();
    return a + b;
}

async function divide(a) {
    await push()
    return a/2;
}

async function average(a,b) {
    await push();
    const sum = await add(a,b);
    return divide(sum);
}

button.addEventListener('click', async () => {
    await push();
    const numA = parseFloat(aInput.value);
    const numB = parseFloat(bInput.value);
    const result = await average(numA, numB);
    para.textContent = "Result: " + result;
    popAll();
    stack = [divide.name, add.name, average.name, "javascript.js"]
});

function delay() {
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve('resolved');           
        }, ms);
    });
}

async function push() {
    let entry = document.createElement('li');
    entry.textContent = stack.pop();  
    await delay();
    list.appendChild(entry);
}

async function pop() {
    await delay();
    list.removeChild(list.lastElementChild)   
}

async function popAll() {
    while (list.hasChildNodes()) {
        await pop();
    }
}