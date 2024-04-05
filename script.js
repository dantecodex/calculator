
const myInput = document.getElementById("myInput");
let isError = false;


function assign(value) {
    if (isError) {
        clearInput();
        isError = false;
    }
    myInput.value += value;
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