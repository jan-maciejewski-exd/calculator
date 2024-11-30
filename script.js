const display = document.querySelector(".display");
const numKeys = document.querySelectorAll(".numKeys button");
const operatorKeys = document.querySelectorAll(".operatorKeys button");
let operand;
let operator;
let result;


numKeys.forEach(numKey => {
    numKey.addEventListener("click", () => {
        if (display.textContent.length < 22) {
            display.append(numKey.textContent);
        } else {
            alert("number too long, i stupid")
        };
    });
});

operatorKeys.forEach(operatorKey => {
    operatorKey.addEventListener("click", () => {
        if (operand == null) {
            operand = parseFloat(display.textContent);
            display.textContent = "";
            console.log(operand);
            operator = operatorKey.textContent;
            console.log(operator);
        } else {
            if (operator == "+") {
                result = operand + parseFloat(display.textContent);
                display.textContent = result;
            } else if (operator == "-") {
                result = operand - parseFloat(display.textContent);
                display.textContent = result;
            } else if (operator == "X") {
                result = operand * parseFloat(display.textContent);
                display.textContent = result;
            } else if (operator == "/") {
                result = operand / parseFloat(display.textContent);
                display.textContent = result;
            };
        };
    });
});

function calculate(operand1, operand2, operator) {
    return;
}