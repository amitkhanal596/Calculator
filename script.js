let num1 = 0;
let op = "";
let num2 = 0;

const container = document.querySelector("#container");














/*
//display
const displayContainer = document.createElement("div");
displayContainer.classList.add("display-container");
let display = document.createElement("div");
display.classList.add("display");
displayContainer.appendChild(display);
container.appendChild(display);






const buttonContainer = document.createElement("div");
buttonContainer.classList.add("button-container");

let rows = document.createElement("div");
for (let i = 0; i < 3; i++){
    rows = document.createElement("div");
    rows.classList.add("row"+i);
    buttonContainer.appendChild(rows);
}
rows = document.createElement("div");
rows.classList.add("big-row");
buttonContainer.appendChild(rows);
container.appendChild(buttonContainer);
*/

/*

let nums = document.createElement("button");
for (let i = 0; i < 10; i++){
    nums = document.createElement("button");
    nums.classList.add("nums");
    nums.textContent = i;
    if (i < 4)
    container.appendChild(nums);
}
*/

function add (firstNum, secondNum){
    return firstNum + secondNum;
}

function subtract (firstNum, secondNum){
    return firstNum - secondNum;
}

function multiply (firstNum, secondNum){
    return firstNum * secondNum;
}

function divide (firstNum, secondNum){
    return firstNum / secondNum;
}

function operator(firstNum, op, secondNum) {
    if (op === "+"){
        return add(firstNum, secondNum);
    }
    else if (op === "-"){
        return subtract(firstNum, secondNum);
    }
    else if (op === "*"){
        return multiply(firstNum, secondNum);
    }
    else if (op === "/"){
        return divide(firstNum, secondNum);
    }
}