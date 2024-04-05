
const myInput = document.getElementById("myInput");
let isError = false;

let lastPressedKey = null;
function assign(value) {
    if (isError) {
        clearInput();
        isError = false;
    }
    myInput.value += value;
    lastPressedKey = (myInput.value).slice(-1);
}

function clearInput() {
    myInput.value = '';
}

function del() {
    myInput.value = myInput.value.slice(0, -1);
}

function calculate() {
    try {
        myInput.value = eval(myInput.value)
    }
    catch {
        myInput.value = 'ERROR';
        isError = true;
    }
}


const allowerdOperators = ['/', '*', '-', '+', '.'];
function checkoperators(value) {
    return lastPressedKey !==
            value && allowerdOperators.indexOf(value) > -1 ||
            (value >= 0 && value <= 9);
}

document.body.addEventListener("keydown", (value) => {
    if (document.activeElement)
        document.activeElement.blur();


    if (value.key === '0') {
        if (lastPressedKey === 'Enter')
            clearInput();
    }

    else if (value.key === 'Enter') {
        calculate();
        lastPressedKey = "Enter";
    }

    else if (value.key === 'Backspace')
        del();

    else if (checkoperators(value.key))
        assign(value.key);

});