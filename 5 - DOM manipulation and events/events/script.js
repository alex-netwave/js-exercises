const btn = document.querySelector("#btn");

btn.addEventListener("click", function (e) {
    console.log(e);
});

function alertFunction() {
    alert("YAY! YOU DID IT!");
}

const btn2 = document.querySelector('#btn2');

btn2.addEventListener("click", alertFunction);


// Applying an eventlistener to each button when there are multiple

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    alert(button.id);
  });
});
