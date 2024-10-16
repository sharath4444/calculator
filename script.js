document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');

    // Listen for key presses
    document.addEventListener('keydown', function (event) {
        const key = event.key;
        
        // Allow number keys (0-9), decimal point, operators, and Enter
        if ((key >= '0' && key <= '9') || key === '.') {
            appendNumber(key);
        } else if (key === '+' || key === '-' || key === '*' || key === '/') {
            appendOperator(key);
        } else if (key === 'Enter') {
            calculateResult();
        } else if (key === 'Backspace') {
            deleteLast();
        } else if (key === 'Escape') {
            clearDisplay();
        }
    });
});

function appendNumber(number) {
    const display = document.getElementById('display');
    if (display.value === '0') {
        display.value = number;
    } else {
        display.value += number;
    }
}

function appendOperator(operator) {
    const display = document.getElementById('display');
    display.value += operator;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value) || '';
    } catch (e) {
        display.value = 'Error';
    }
}
