const addIn = document.querySelector(".Add-input");
const addBttn = document.querySelector(".Add-button");
const addOut = document.querySelector(".Add-output");


function add7(number) {
    return number + 7;
}

function multiply(num1, num2) {
    return num1*num2;
}

function capitalize(str) {
    let fLetter = str.at(0).toUpperCase();
    let restString = str.substring(1).toLowerCase();
    let new_str = fLetter + restString;
    return new_str;
}

function lastLetter(str) {
    return str.slice(-1);
}

addBttn.addEventListener('click', () => {
    addOut.textContent = `Output: ${add7(parseFloat(addIn.value))}`;
})
