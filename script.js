let display = document.getElementById('display');

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  try {
    // Replace ^ with ** for exponentiation
    display.value = eval(display.value.replace(/\^/g, '**'));
  } catch (error) {
    display.value = 'Error';
  }
}