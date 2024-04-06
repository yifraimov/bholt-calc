let userInput = '0';
let userOperation = ''
let number = 0
let firstNumber = 0
let secondNumber = 0
let checkInput = ''

const calcButton = document.querySelectorAll(".calc-button");

for(let i = 0; i < calcButton.length ; i++){
    calcButton[i].addEventListener("click", function (){
        // console.log("user click on " + this.textContent)
        classifyInput(this.textContent);
        return this.textContent
    });
}

//checking if its a number or operation func? and storing the number/operation
function classifyInput(input) {
    // Check if the input is not one of the operations
    if (!isNaN(input) || ['+', '-', 'x', '/', '=', 'C', '<-'].indexOf(input) === -1) {
        // Assuming input is a number here
        checkInput = 'number';
        userInput += input;
        number = +userInput;


    } else {
        // It's an operation
        checkInput = 'operation';
        firstNumber = number
        userInput = 0
        userOperation = input;

    }

    updateScreen();
}

//case switch for calculation?

//showing to the screen
function updateScreen (){
    const calcScreen = document.querySelector(".screen");

    if(checkInput === 'number'){
        calcScreen.innerText = number;
    }

    else if(checkInput){
        calcScreen.innerText = ''
    }
}


