const container = document.querySelector('#container');

//create a div
const newChild_div = document.createElement("div");

//add a class named "content" to that div
newChild_div.classList.add("content");

//add text content to that div
newChild_div.textContent = "This is the holy text-content!";


let delay = 0

function increaseTime() {
    delay += 2000;
    return delay;
}

// added a 2 second delay to make changes to the DOM by this script more 
// apparent 
//add that div to the element with id "#container"
container.appendChild(newChild_div);

//<p> with red text that says “Hey I’m red!”
const newChild_p = document.createElement("p");
newChild_p.style.color = "red";
newChild_p.textContent = "Hey, I'm red!";
container.appendChild(newChild_p);


//an <h3> with blue text that says “I’m a blue h3!”
const newChild_h3 = document.createElement("h3");
newChild_h3.style.color = "blue";
newChild_h3.textContent = "I'm a blue h3!";
container.appendChild(newChild_h3);

//a <div> with a black border and pink background color with the following elements inside of it:
    //another <h1> that says “I’m in a div”
    //a <p> that says “ME TOO!”
const newChild_div2 = document.createElement("div");
newChild_div2.classList.add("blkBrdr_and_pBckgrnd");
newChild_div2.style.border = "black solid";
newChild_div2.style.backgroundColor = "pink";

const newChild_h1 = document.createElement("h1");
newChild_h1.textContent = "I'm in a div";
newChild_div2.appendChild(newChild_h1);

const newChild_p2 = document.createElement("p");
newChild_p2.textContent = "ME TOO!";
newChild_div2.appendChild(newChild_p2);

container.appendChild(newChild_div2);


//<p> with red text that says “Hey I’m red!”
//an <h3> with blue text that says “I’m a blue h3!”
//a <div> with a black border and pink background color with the following elements inside of it:
//another <h1> that says “I’m in a div”
//a <p> that says “ME TOO!”
//Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.

//observation: bracket notation appears to allow for more dynamic code config
//see example:
//const colorTypes = ["color", "backgroundColor"];
//for (let i=0; i<colorTypes.length; i++) {
    //newChild.style[colorTypes[i]]="blue";
//}
//now try doing this using dot notation instead of bracket notation, I don't think
//you can