const ul = document.querySelector("ul");
const input = document.querySelector("#item");
const addBtn = document.querySelector(".addBtn");

const itemList = [];

function itemNotInList(item) {
    if (itemList.includes(item)) {
        alert("Item already on shopping list!");
        return false;
    }
    else {
        itemList.push(item);
        return true;
    }
}

function removeArrayItem(arrayName, item){
    var index = arrayName.indexOf(item);
    if (index !== -1) {
        arrayName.splice(index, 1);
    }
}


function addItem(){
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    const span = document.createElement("span");
    const delBtn = document.createElement("button");

    checkbox.type="checkbox";

    let currInputVal = input.value;
    input.value = '';
    if (itemNotInList(currInputVal)){     
        span.textContent = currInputVal;
        delBtn.textContent = "remove item";

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(delBtn);
        ul.appendChild(li);

        checkbox.addEventListener("change", () => {
            span.style.textDecoration = checkbox.checked ? "line-through" : "none";
        });

        delBtn.addEventListener("click", () => {
            ul.removeChild(li);
            removeArrayItem(itemList,currInputVal);
        });
    }
}

addBtn.addEventListener("click", addItem);


