const inputs = document.querySelector('.display-inputs');

let firstValue = "";
let operator = "";
let secondValue = "";

function updateInputText(input) {
inputs.textContent =  input
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