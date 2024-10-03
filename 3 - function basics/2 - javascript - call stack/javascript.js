
/* 
    Notes:
    I wasn't familiar with creating delays in JavaScript so these sources helped:
        - setTimeout: https://developer.mozilla.org/en-US/docs/Web/API/setTimeout 
        - async, await, and promises: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function

    At some point, the value of para ended up being Promise Object
        1. Pointed me in right direction: https://stackoverflow.com/questions/46719974/promise-is-returning-object-promise
      
    At some point, I was getting NaN as para's value
        Then I ended up asking ChatGPT, which suggested that I needed to wait for 
        for calculations to resolve before returning them or using them for anything.
            So I added an await to the add and assigned it to a constant BEFORE returning it
                - This resolved the issue
        */

const aInput = document.querySelector(".numberInputA");
const bInput = document.querySelector(".numberInputB");
const button = document.querySelector("button");
const para = document.querySelector(".output");
const list = document.querySelector("ul");


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
        }, 1000);
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