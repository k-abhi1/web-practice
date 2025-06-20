
let currentdisplay = '0';
const display = document.getElementById('display');

function updatedisplay() {
    display.textContent = currentdisplay;
}
function appendtodisplay(value) {
    if (currentdisplay === '0' && value !== '.') {
        currentdisplay = value;
    }
    else {
        currentdisplay += value;
    }
    updatedisplay();
}
function cleardisplay() {
    currentdisplay = '0';
    updatedisplay();
}
function backspace() {
    if (currentdisplay.length === 1) {
        currentdisplay = '0';
    }
    else {
        currentdisplay = currentdisplay.slice(0, -1);
    }
    updatedisplay();
}
function calculate() {
    try {
        currentdisplay = eval(currentdisplay).toString();
        updatedisplay();
    }
    catch (error) {
        currentdisplay = 'error';
        updatedisplay();
        setTimeout(cleardisplay, 1000);

    }
}

updatedisplay();
