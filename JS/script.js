const display = document.querySelector('#display');
const calculateElement = document.querySelector('#calculate');

let displayNumber = 0;
let operator = '';
let firstValue = '';
let selectOperator = false;

const displayView = () => {
    display.value = displayNumber;
}

const updateDisplay = (value) => {
    if (displayNumber === 0 || selectOperator) displayNumber = value.toString();
    else displayNumber += value.toString();
}

const clearDisplay = () => {
    displayNumber = 0;
    operator = '';
    firstValue = '';
    selectOperator = false;
}

const dotDisplay = (value) => {  
    if (!displayNumber.toString().includes(value)) {
        displayNumber += value;
    }
}

const operatorView = (value, oldValue) => {
    selectOperator = true;
    operator = value;
    firstValue = displayNumber;
}

const calculate = () => {

     if operator === '+' {
        displayNumber = parseFloat(displayNumber) + parseFloat(firstValue);
     }
     else if (operator === '-') {
        displayNumber = parseFloat(displayNumber) - parseFloat(firstValue);
     }
     else if (operator === '/') {
        displayNumber = parseFloat(displayNumber) / parseFloat(firstValue);
     }
     else if (operator === '*') {
        displayNumber = parseFloat(displayNumber) * parseFloat(firstValue);
     }

     displayView();
}

displayView(); 

calculateElement.addEventListener('click', e => {
    if (e.target.matches ('button')) {
        const value = e.target.value;
        if (e.target.classList.contains ('operator')) {
            operatorView(value)

            if (value === '=') {
                calculate();
            }
            else {
                operatorView(value);
                displayView();
            }
        }
        else if (e.target.classList.contains ('dot')) {
            dotDisplay(value, displayNumber);
            displayView();
        }
        else if (e.target.classList.contains ('clear')) {
            clearDisplay();
            displayView();
        }
        else {
            updateDisplay(value);
            displayView();
        }
    }    
})