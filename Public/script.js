let userInput = '0';
let userOperation = ''
let number = 0
let firstNumber = 0
let secondNumber = 0
let typeInput = ''
let currentNumber = 0

const calcButton = document.querySelectorAll(".calc-button");

function whenClicked() {
    calcButton.forEach(button => {
        button.addEventListener("click", function () {
            const input = this.textContent;
            classifyInput(input);
        });
    });
}

whenClicked()

function classifyInput(input) {
    if (!isNaN(input) || input === '.') {
        typeInput = 'number'
        appendNumber(input);
    } else if (['+', '-', 'x', '/', 'C', '<-'].includes(input)) {
        typeInput = 'operation'
        setOperation(input);
    } else if (input === '=') {
        //typeInput = 'operation'
        calculateResult();
    }
    updateScreen();
}

function appendNumber(number) {
    if (typeInput === 'operation') {
        userInput = ''; // Reset userInput if last input was an operation
        typeInput = 'number'; // Reset typeInput for new number input
    }
    userInput += number; // Append number
}

function setOperation(operation) {
    if (operation === 'C') {
        resetCalculator(); // Implement a function to reset calculator state
        return;
    }
    if (userOperation && userInput) {
        calculateResult(); // If there's an ongoing operation, calculate the result first
    }
    firstNumber = parseFloat(userInput); // Set the first number for the operation
    userOperation = operation; // Update the operation
    typeInput = 'operation'; // Set typeInput to operation
}

function calculateResult() {
    if (!userOperation || !userInput) return; // Do nothing if no operation or input

    secondNumber = parseFloat(userInput); // Parse second number
    // Implement calculation logic based on userOperation
    // For example:
    switch (userOperation) {
        case '+':
            currentNumber = firstNumber + secondNumber;
            break;
        // Add cases for '-', 'x', '/'
    }
    userInput = currentNumber.toString(); // Update userInput with result for display
    userOperation = ''; // Reset operation
}

function updateScreen() {
    const calcScreen = document.querySelector(".screen");
    calcScreen.innerText = userInput; // Display current userInput
}

function resetCalculator() {
    userInput = '0';
    userOperation = '';
    number = 0;
    firstNumber = 0;
    secondNumber = 0;
    typeInput = '';
    currentNumber = 0;
    updateScreen(); // Reset screen display
}






