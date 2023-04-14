// issue with double clicking operation buttons. --> FIXED
// issue with replacing numbers into NaN if changing operations once first input value entered. --> FIXED
// issue with multiple inputs being entered on decimal point.  --> FIXED
// issue with decimal point being inputted even without number. --> FIXED
// issue with multiple clicks on equals operating again and again. --> FIXED
// issue with decimal points having a type error. --> FIXED

// feature to add -> once two values are provided, if user clicks another operation instead of equals. 
// first two values must be output result and shifted to new operation. --> CANCELLED

// feature to add -> positive & negative integers. --> ADDED
// feature to add -> preview section.
// feature to add -> brackets. 

// feature to add -> keyboard support. --> IN-PROGRESS 
// - number support --> ADDED
// - operator support --> IN-PROGRESS

// secure character limits for input and outputs --> FIXED

const inputs = document.querySelector('.display-inputs');
const historyInput = document.querySelector('.display-history');
const numbers = document.querySelectorAll('.data-number');
const operators = document.querySelectorAll('.data-operator');
const type = document.querySelectorAll('.data-type');

let firstValue = "";
let secondValue = "";
let operation = "";
let historyValue = "";
let displayValue = "";
let currentlyOperating = false;

type.forEach((type) => {
    type.addEventListener('click', () => {
        if (type.textContent == ".") {
           if (!displayValue.toString().includes(".")){
            displayValue += type.textContent;
            updateDisplay();
           }
        } else if (type.textContent == "+/-") {
            if (!displayValue.toString().includes("-")) {
                displayValue = "-" + displayValue 
                updateDisplay();
            } else {
                displayValue = displayValue.replace('-','');
                updateDisplay();
            }
        }
    });
});

numbers.forEach((number) => {
    number.addEventListener('click', () => {
        if (displayValue.length < 10) {
        displayValue += number.textContent
        updateDisplay();
        }
    });
});

// WORK IN PROGRESS -- KEYBOARD INPUT
window.addEventListener('keydown', (e) => {
    let check = /^[0-9]+$/;
    if (e.key.match(check)) {
    displayValue += e.key;
    updateDisplay();
    } 
});

operators.forEach((operator => {
    operator.addEventListener('click', () => {
        if (operator.textContent == "C") {
            clearInputs();
        } else if (operator.textContent == "CE") {
            clearRecentInput();
        } else if (operator.textContent == "=") {
            if (!displayValue == "") {
                operating();
            } 
        } else {
            if (!displayValue == "") {
                evaluating(operator.textContent);
            }
        }
    });
}));

function operating() {
    if (currentlyOperating == true) {
        secondValue = parseFloat(displayValue);
        historyValue = parseFloat(secondValue);
        updateDisplay();
        updateHistory();
        operate(firstValue, secondValue, operation);
        currentlyOperating = false;
    }
}

function evaluating(operator) {
    if (currentlyOperating == false) {
        firstValue = parseFloat(displayValue);
        secondValue = "";
        historyValue = parseFloat(firstValue);
        displayValue = "";
        operation = operator;
        updateDisplay();
        updateHistory();
        currentlyOperating = true;
    } else {
        operation = operator;
        updateHistory();
    } 
}

function clearInputs() {
    displayValue = "";
    historyValue = "";
    firstValue = "";
    secondValue = "";
    operation = "";
    currentlyOperating = false;
    updateHistory();
    updateDisplay();
}

function clearRecentInput() {
    let clr = displayValue.toString();
    displayValue = clr.slice(0, -1);
    updateDisplay();
}

function updateDisplay() {
    inputs.textContent = displayValue;
}

function updateHistory() {
    historyInput.textContent = firstValue + (" " + operation + " ") + secondValue;
}

function operate(x, y, z) {
    if(z === "+") {
        return addition(x, y);
    } else if (z == "−") {
        return subtraction(x, y);
    } else if (z == "×") {
        return multiplication(x, y);
    } else if (z == "÷") {
        return division(x, y);
    } else if (z == "%") {
        return percentage(x, y);
    }
}

function addition(x,y) {
    let sum = x + y;
    displayValue = Math.round(sum * 1000) / 1000;;
    updateDisplay();
}

function subtraction(x,y) {
    let difference = x - y;
    displayValue = Math.round(difference * 1000) / 1000;
    updateDisplay();
}

function multiplication(x,y) {
    let product = x * y;
    displayValue = Math.round(product * 1000) / 1000;
    updateDisplay();
}

function division(x,y) {
    if (y == 0) {
        alert("Not Possible To Divide By 0!");
        clearInputs();
    } else {
    let quotient = x / y;
    displayValue = Math.round(quotient * 1000) / 1000;
    updateDisplay();
    }
}

function percentage(x, y) {
    let percent = x / 100 * y
    displayValue = percent + "%";
    updateDisplay();
}
