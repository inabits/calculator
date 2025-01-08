var screen = document.getElementById('screen');

function clearScreen() {
    screen.value = '';
}

function display(carac) {
    screen.value += carac;
}

function calculate() {
    screen.value = eval(screen.value);
}