// issue with double clicking operation buttons.
// issue with replacing numbers into NaN if changing operations once first input value entered.
// issue with multiple inputs being entered on decimal point. 
// issue with decimal point being inputted even without number.

// feature to add -> once two values are provided, if user clicks another operation instead of equals. First two values must be output result and shifted to new operation.
// feature to add -> positive & negative integers.
// feature to add -> brackets.
// feature to add -> preview section.

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

type.forEach((type) => {
    type.addEventListener('click', () => {
        if (type.textContent = ".") {
           if (displayValue.includes(".")) {
                console.log("check");
           } else {
            displayValue += type.textContent;
            updateDisplay();
           }
        }
    });
});

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
        } else if (operator.textContent == "CE") {
            clearRecentInput();
        } else if (operator.textContent == ".") {
            toDecimal();
        } else if (operator.textContent == "=") {
            secondValue = parseFloat(displayValue);
            historyValue = parseFloat(secondValue);
            updateDisplay();
            updateHistory();
            operate(firstValue, secondValue, operation);
        } else {
            firstValue = parseFloat(displayValue);
            secondValue = "";
            historyValue = parseFloat(firstValue);
            operation = operator.textContent;
            displayValue = "";
            updateDisplay();
            updateHistory();
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

function clearRecentInput() {
    let rm = displayValue.toString();
    let z = rm.slice(0, -1);
    console.log(z);
    displayValue = z;
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
    } else if (z == "-") {
        return subtraction(x, y);
    } else if (z == "x") {
        return multiplication(x, y);
    } else if (z == "/") {
        return division(x, y);
    } else if (z == "%") {
        return percentage(x, y);
    }
}

function addition(x,y) {
    let sum = x + y;
    displayValue = sum;
    updateDisplay();
}

function subtraction(x,y) {
    let difference = x - y;
    displayValue = difference;
    updateDisplay();
}

function multiplication(x,y) {
    let product = x * y;
    displayValue = product;
    updateDisplay();
}

function division(x,y) {
    if (y == 0) {
        alert("Not Possible To Divide By 0!");
        clearInputs();
    } else {
    let quotient = x / y;
    displayValue = quotient;
    updateDisplay();
    }
}

function percentage(x, y) {
    let percent = x / 100 * y
    displayValue = percent + "%";
    updateDisplay();
}