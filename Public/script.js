let currentNumberString = '';
let firstNumber = 0;
let secondNumber = 0;
let userOperation = '';
let result = 0;

const calcButton = document.querySelectorAll(".calc-button");

function classifyInput(input) {
    if (!isNaN(input)) { // If the input is a number
        currentNumberString += input;
    } else if (['+', '-', 'x', '/', 'C', '<-'].includes(input)) {
        if (input === 'C') {
            resetCalculator();
        } else if (input === '<-') {
            currentNumberString = currentNumberString.slice(0, -1); // Implement backspace
        } else {
            if (!userOperation) { // If no operation stored yet
                firstNumber = parseFloat(currentNumberString);
                userOperation = input;
                currentNumberString = '';
            }
        }
    } else if (input === '=') {
        secondNumber = parseFloat(currentNumberString);
        calculateResult();
    }
    updateScreen();
}

function calculateResult() {
    switch (userOperation) {
        case '+':
            result = firstNumber + secondNumber;
            break;
        case '-':
            result = firstNumber - secondNumber;
            break;
        case 'x':
            result = firstNumber * secondNumber;
            break;
        case '/':
            if (secondNumber !== 0) {
                result = firstNumber / secondNumber;
            } else {
                alert("Can't divide by zero!");
            }
            break;
        default:
            result = 0; // Reset or handle unknown operation
    }
    currentNumberString = result.toString(); // Prepare for next operation or further calculations
    userOperation = ''; // Reset operation
}

function updateScreen() {
    const calcScreen = document.querySelector(".screen");
    calcScreen.innerText = currentNumberString || result.toString(); // Display current number or result
}

function resetCalculator() {
    currentNumberString = '';
    firstNumber = 0;
    secondNumber = 0;
    userOperation = '';
    result = 0;
    updateScreen(); // Reset screen display
}

function whenClicked() {
    calcButton.forEach(button => {
        button.addEventListener("click", function() {
            const input = this.textContent;
            classifyInput(input);
        });
    });
}

whenClicked();
