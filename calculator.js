let currentInput = '';
let currentResult = '';
const display = document.getElementById('display');

function appendToDisplay(value) {
    currentInput += value;
    display.value = currentInput;
}

function clearDisplay() {
    currentInput ='';
    display.value ='';
}

function calculate() {
    try {
        currentResult = eval(currentInput);
        display.value = currentResult;
        currentInput = currentResult.toString();
    } catch (error) {
        display.value = 'Error';
        currentInput ='';
    }
}