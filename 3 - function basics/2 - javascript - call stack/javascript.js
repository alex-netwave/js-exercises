const aInput = document.querySelector(".numberInputA");
const bInput = document.querySelector(".numberInputB");
const button = document.querySelector("button");
const para = document.querySelector(".output");
const list = document.querySelector("ul");

// delay time in ms
let ms = 1000;

// list of execution contexts that will occur
let xContextList = [divide.name, add.name, average.name, "javascript.js"]
const xCLFullLength = xContextList.length;

async function add(a,b) {
    await pushCS();
    return a + b;
}

async function divide(a) {
    await pushCS()
    return a/2;
}

async function average(a,b) {
    await pushCS();
    const sum = await add(a,b);
    return divide(sum);
}

button.addEventListener('click', async () => {
    if (xContextList.length === xCLFullLength){
        await pushCS();
        const numA = parseFloat(aInput.value);
        const numB = parseFloat(bInput.value);
        const result = await average(numA, numB);
        para.textContent = `Average: ${result}`;
        popAll();
    }
});

function delay() {
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve('resolved');           
        }, ms);
    });
}

async function pushCS() {
    let entry = document.createElement('li');
    entry.textContent = xContextList.pop();  
    await delay();
    list.appendChild(entry);
}

async function popCS() {
    await delay();
    return list.removeChild(list.lastElementChild).textContent;  
}

async function popAll() {
    while (list.hasChildNodes()) {
        const xContext = await popCS();

        // add function name back to list of impending execution contexts
        xContextList.push(xContext); 
    }
}