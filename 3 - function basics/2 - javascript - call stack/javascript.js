const aInput = document.querySelector(".numberInputA");
const bInput = document.querySelector(".numberInputB");
const button = document.querySelector("button");
const para = document.querySelector(".output");
const list = document.querySelector("ul");


let stack = [add.name, average.name]

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
    const numA = parseFloat(aInput.value);
    const numB = parseFloat(bInput.value);
    const result = await average(numA, numB);
    para.textContent = result;
    poper();
    stack = [add.name, average.name]
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