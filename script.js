const display = document.querySelector(".display");
const numKeys = document.querySelectorAll(".numKeys button");
const operatorKeys = document.querySelectorAll(".operatorKeys button");
let operator;
let result;
let operand1;
let operand2;

// Handle number buttons
numKeys.forEach(numKey => {
    numKey.addEventListener("click", () => {
        if (display.textContent.length < 22) {
            
            // If there is already an operand or result in memory, pressing button should replace it
            if (parseFloat(display.textContent) == operand1 || parseFloat(display.textContent) == result) {
                display.textContent = numKey.textContent; 
            } else {
            // If current display isn't stored as operand, append to it
                display.textContent += numKey.textContent;
            };
        } else {
            alert("number too long, i stupid")
        };
    });
});

// Handle operator key presses
operatorKeys.forEach(operatorKey => {
    operatorKey.addEventListener("click", () => {
        const currentOperator = operatorKey.textContent; // Keep track of the current operator

        // Separate logic for the "Clear" operator
        if (currentOperator == "C") {
            display.textContent = "";
            operand1 = null;
            operand2 = null;
            result = null;
            operator = null;
            return;
        }

        // Separate logic for equals - if operand1 and operator exist, perform calculation
        if (currentOperator == "=") {
            if (operand1 !== null && operator !== null) {
                operand2 = parseFloat(display.textContent); // Set second operand from current display
                calculate(operand1, operand2, operator);
                operator = null;
                operand1 = null; // Exeption to the operand1 handling by calculate() - set up clear operand for next operation
            }
        } else {

            // Case when number on display is the first input
            if (operand1 == null) {
                operand1 = parseFloat(display.textContent);
            } else if (operator !== null) { 
            //Case when number on display is the second input, perform calculation
                operand2 = parseFloat(display.textContent);
                calculate(operand1, operand2, operator);
            };
            if (currentOperator !== "C") {
                operator = currentOperator; //Store operator textContent for when calculation needs to be performed
            }
        };
    });
});

// Calculating function
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
    operand1 = result; // set the last result as the first operand, for chaining
};