const display = document.querySelector('#display');
const calculate = document.querySelector('#calculate');

let displayNumber = 0;

const displayView = () => {
    display.value = displayNumber;
}

const updateDisplay = (value) => {
    if (displayNumber === 0) displayNumber = value;
    else displayNumber += value;
}

const clearDisplay = () => {
    displayNumber = 0;
}

const dotDisplay = (value) => {
    if (!displayNumber.includes(value)) {
        displayNumber += value;
    }
}

displayView(); 

calculate.addEventListener('click', e => {
    if (e.target.matches ('button')) {
        const value = e.target.value;
        if (e.target.classList.contains ('operator')) {
            console.log('operator')
        }
        else if (e.target.classList.contains ('dot')) {
            dotDisplay(value);
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