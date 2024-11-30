const display = document.querySelector(".display");
const numKeys = document.querySelectorAll(".numKeys button");
const operatorKeys = document.querySelectorAll(".operatorKeys button");
let operand;
let operator;
let result;
let operand1;
let operand2;

numKeys.forEach(numKey => {
    numKey.addEventListener("click", () => {
        if (display.textContent.length < 22) {
            if (parseFloat(display.textContent) == operand1) {
                display.textContent = numKey.textContent; 
            } else {
                display.textContent += numKey.textContent;
            };
        } else {
            alert("number too long, i stupid")
        };
    });
});

operatorKeys.forEach(operatorKey => {
    operatorKey.addEventListener("click", () => {
        const currentOperator = operatorKey.textContent;
        if (currentOperator == "=") {
            if (operand1 !== null && operator !== null) {
                operand2 = parseFloat(display.textContent);
                calculate(operand1, operand2, operator);
                operator = null;
            }
        } else {
            if (operand1 == null) {
                operand1 = parseFloat(display.textContent);
            } else if (operator !== null) {
                operand2 = parseFloat(display.textContent);
                calculate(operand1, operand2, operator);
            };
            operator = currentOperator;
            // display.textContent = "";
        };
    });
});

function calculate(op1, op2, operator) {
    if (operator == "+") {
        result = op1 + op2;
    } else if (operator == "-") {
        result = op1 - op2;
    } else if (operator == "X") {
        result = op1 * op2;
    } else if (operator == "/") {
        if (op2 !== 0) {
            result = op1 / op2;
        } else {
            alert("cannot divide by 0")
            result = op1;
        };
    };
    display.textContent = result;
    operand1 = result;
};