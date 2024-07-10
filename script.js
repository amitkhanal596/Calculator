let num1 = "";
let op = "";
let num2 = "";
let state = "numState";

const container = document.querySelector("#container");



let displayValue = document.querySelector(".display");


//clear button
let AC = document.querySelector("#clear");
AC.addEventListener("click", () => {
    displayValue.textContent = " ";
    num1 = "";
    op = "";
    num2 = "";
    state = "numState";
});


//operation buttons
let operation = document.querySelectorAll("#operation");
operation.forEach( (e) => {
    e.addEventListener("click", () => {
        if (displayValue.textContent.includes("-") || displayValue.textContent.includes("÷") || displayValue.textContent.includes("+") || displayValue.textContent.includes("x")){
            let j = 0;
            let tempOperators = "-+x÷";
            while (!tempOperators.includes(displayValue.textContent[j])){
                num1 += displayValue.textContent[j];
                j++;
            }
            op = displayValue.textContent[j];
            num2 = displayValue.textContent.substring(j+1);
            displayValue.textContent = "";
            updateDisplay(String(operator(Number(num1), op, Number(num2))));
            num1 = "";
            num2 = "";
            op = "";
            updateDisplay(e.textContent);
            state = "numState";
        }
        else {
            updateDisplay(e.textContent);
            state = "numState";
        }
        
    });
});

//adds numbers
for (let i = 0; i <= 9; i++){
    let num = document.querySelector("#n"+String(i));
    num.textContent = i;
    num.addEventListener("click", () => {
        if (state === "equalsState"){
            displayValue.textContent = "";
            state = "numState";
        }
        updateDisplay(num.textContent);
        state = "numState";
    })
}

//equals button
let equals = document.querySelector("#equal");
equals.addEventListener("click", () => {
    let j = 0;
    let tempOperators = "-+x÷";
    for (let i = 0; i < displayValue.textContent.length; i++){
        if (displayValue.textContent[i] == "÷" || displayValue.textContent[i] == "+" || displayValue.textContent[i] == "-" || displayValue.textContent[i] == "x"){
            break;
        }
        if (i == displayValue.textContent.length-1){
            return;
        }
    }
    num1 = "";
    while (!tempOperators.includes(displayValue.textContent[j])){
        num1 += displayValue.textContent[j];
        j++;
    }
    op = displayValue.textContent[j];
    if (tempOperators.includes(displayValue.textContent[displayValue.textContent.length-1])){
        return;
    }
    
    num2 = displayValue.textContent.substring(j+1);
    displayValue.textContent = "";
    updateDisplay(String(operator(Number(num1), op, Number(num2))));
    num1 = "";
    num2 = "";
    op = "";
    state = "equalsState";
    
    
})







function updateDisplay(e) {
    displayValue.textContent += e;
}











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
    if (secondNum === 0){
        return "NaN";
    }
    return Math.round((firstNum / secondNum) * 100)/100;
}

function operator(firstNum, op, secondNum) {
    if (op === "+"){
        return add(firstNum, secondNum);
    }
    else if (op === "-"){
        return subtract(firstNum, secondNum);
    }
    else if (op === "x"){
        return multiply(firstNum, secondNum);
    }
    else if (op === "÷"){
        return divide(firstNum, secondNum);
    }
}