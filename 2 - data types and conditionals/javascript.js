// Data Types: Learning

//Three ways of declaring strings

let fName="Alex";

console.log(`Hello world, ${fName} is heeere!`);

let mName='St.Clair';
let lName=`Mills`;

console.log(`Hello again, ${fName} ${lName} is testing!`);

//Backticks must be used for template literals (shown on line 10 above)
//template literals are useful for:
//  - multiline strings
//  - embedding JavaScript in a string

console.log(`
This is another template literal.
It's pretty cool huh.
There's no need to explicitly type escape sequence for a newline.
`);

const button = document.querySelector("button");

function greet() {
    const name=prompt("What is your name?");
    const greeting = document.querySelector("#greeting");
    greeting.textContent = `Hello ${name}, welcome to your world.`;
}

button.addEventListener("click", greet);

// Conditionals: Learning
const select = document.querySelector("select");
const para = document.querySelector("p");

select.addEventListener("change", setTechnology);

function setTechnology() {
    const choice= select.value;

    if(choice === "3d")
        para.textContent = `
    Points are 1D objects, lines are 2D objects, and a box is a 3D object.
    Everything that we interact with in the world is a 3D object.
    Goal of this course: Whenever you think "I want this" or "it would be cool to have
    this", instead of not knowing how to find it - we teach you the tools so you can make 
    ANYTHING.
    `
}