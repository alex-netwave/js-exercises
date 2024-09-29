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
const h2 = document.querySelector("h2");
const para = document.querySelector("p");

select.addEventListener("change", setTechnology);

function setTechnology() {
    const choice= select.value;

    if (choice === "")
        para.textContent = ''
    else if (choice === "3d")
        para.textContent = `
    Points are 1D objects, lines are 2D objects, and a box is a 3D object.
    Everything that we interact with in the world is a 3D object.
    Goal of this course: Whenever you think "I want this" or "it would be cool to have
    this", instead of not knowing how to find it - we teach you the tools so you can make 
    ANYTHING.
    `
    else if (choice === "circuits")
        para.textContent = `
    Goal of this course: 
    Teach what's needed to design your own circuits and modify the 
    circuits of others.
    Teach what's needed to test modeled and real circuits.

    Should be taken with course(s): 
    - Application portion: Embedded Systems
    - Foundational knowledge: PCB Design
    `
    else if (choice === "embedded")
        para.textContent = `
    Goal of this course:
    Teach what's needed to build projects using embedded devices such as 
    microcontroller and microprocessors.

    May take with course(s): Foundational knowledge: Circuits | Further custom: PCB Design
    `
    else if (choice === "aiml")
        para.textContent = `
    Goal of this course:
    Teach what's needed to use and modify existing AI/ML models.

    Example applications:
    - (General) Object recognition: Recognizing a person
    - (Medical) Object recognition: Recognizing an injury type
    `
    else if (choice === "pcb")
        para.textContent = `
    Goal of this course:
    Teach what's needed to design PCBS with a focus on:
    - Adaptability
    - Interfacing with Manufacturers

    Should be taken with course(s): 
    - 3D Modeling, Design, and Creation.
    This will help with creating a custom product with an enclosure.
    - Foundational knowledge: Circuits.


    Administration info:
    - use a single PCB color to allow for paenlizing multiple students PCBs
    - do not include manufacturing info in curriculum, can talk with some parents about this
    if custom color desired.
    `
    if (choice !== "")
        h2.textContent = 'Info:';
    else
        h2.textContent = '';
}