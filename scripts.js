const inputs = document.querySelector('.display-inputs');
const numbers = document.querySelectorAll('.data-number');
const operators = document.querySelectorAll('.data-operator');

let firstValue = 5;
let secondValue = 10;
let operator = "+";

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
        }
    })
}))

function clearInputs() {
    displayValue = ""
    updateDisplay();
}

function updateDisplay() {
    inputs.textContent = displayValue
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
    return sum
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
    let quotient = x / y;
    return quotient
}