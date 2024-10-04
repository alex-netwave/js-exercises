Goal: Understand the JavaScript engine's call stack and make an interactive tool for others to understand it.
Notes:
I wasn't familiar with using JavaScript to manipulate HMTL lists, these helped:
    - Adding list items:
        - https://stackoverflow.com/questions/17773938/add-a-list-item-through-javascript 
        - https://www.geeksforgeeks.org/how-to-creating-html-list-from-javascript-array/ 
    - Removing list items:
        - https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild 

I wasn't familiar with creating delays in JavaScript so these sources helped:
    - setTimeout: https://developer.mozilla.org/en-US/docs/Web/API/setTimeout 
    - async, await, and promises with setTimeout: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function

At some point, the value of para ended up being Promise Object
    1. Pointed me in right direction: https://stackoverflow.com/questions/46719974/promise-is-returning-object-promise
    
At some point, I was getting NaN as para's value
    Then I ended up asking ChatGPT, which suggested that I needed to wait for 
    for calculations to resolve before returning them or using them for anything.
        So I added an await to the add and assigned it to a constant BEFORE returning it
            - This resolved the issue
