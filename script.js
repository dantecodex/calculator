const item0 = document.getElementById("item0");
const myInput = document.getElementById("myInput");
let isEnterPressed = false;
let isError = false;

let lastPressedKey = null;
function assign(value) {
    if (isError) {
        clearInput();
        isError = false;
    }

    // if (isEnterPressed && item0.onclick) {
    //     clearInput();
    // }
    // isEnterPressed = false;

    if (myInput.value.charAt(0) === '0')
        myInput.value = '';
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
        myInput.value = eval(myInput.value);
    }
    catch {
        myInput.value = 'ERROR';
        isError = true;
    }
    isEnterPressed = true;
}


const allowedOperators = ['/', '*', '-', '+', '.'];
function checkoperators(value) {
    
    return lastPressedKey !==
        value && allowedOperators.indexOf(value) > -1 ||
        (value >= 0 && value <= 9);
}

document.body.addEventListener("keydown", (value) => {
    console.log(isEnterPressed);
    if (document.activeElement)
        document.activeElement.blur();


    if (isEnterPressed && value.key === '0') {
        clearInput();
    }
    isEnterPressed = false;

    if (value.key === 'Enter') {
        calculate();
    }

    else if (value.key === 'Backspace')
        del();

    else if (checkoperators(value.key))
        assign(value.key);

});