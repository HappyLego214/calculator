const inputs = document.querySelector('.display-inputs');
const historyInput = document.querySelector('.display-history');
const numbers = document.querySelectorAll('.data-number');
const operators = document.querySelectorAll('.data-operator');

let firstValue = null;
let secondValue = null;
let operation = "";

let historyValue = "";
let displayValue = "";

numbers.forEach((number) => {
    number.addEventListener('click', () => {
        displayValue += number.textContent
        updateDisplay();
    });
});

operators.forEach((operator => {
    operator.addEventListener('click', () => {
        if (operator.textContent == "C") {
            clearInputs();
        } else if (operator.textContent == "+") {
            firstValue = parseInt(displayValue);
            historyValue = parseInt(firstValue);
            operation = operator.textContent;
            displayValue = "";
            updateDisplay();
            updateHistory();
        } else if (operator.textContent == "=") {
            secondValue = parseInt(displayValue);
            operate(firstValue, secondValue, operation);
        } 
    });
}));

function clearInputs() {
    displayValue = "";
    historyValue = "";
    firstValue = "";
    secondValue = "";
    operation = "";
    updateHistory();
    updateDisplay();
}

function updateDisplay() {
    inputs.textContent = displayValue;
}

function updateHistory() {
    historyInput.textContent = firstValue + (" " + operation);
}

function operate(x, y, z) {
    if(z === "+") {
        return addition(x, y);
    } else if (z == "-") {
        return subtraction(x, y);
    } else if (z == "x") {
        return multiplication(x, y);
    } else if (z == "/") {
        return division(x, y);
    }
}

function addition(x,y) {
    let sum = x + y;
    console.log(sum);
    displayValue = sum;
    updateDisplay();
}

function subtraction(x,y) {
    let difference = x - y;
    return difference
}

function multiplication(x,y) {
    let product = x * y;
    return product
}

function division(x,y) {
    if (y = 0) {
        alert("That's Not Possible!");
    } else {
    let quotient = x / y;
    return quotient
    }
    
}