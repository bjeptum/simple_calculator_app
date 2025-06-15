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

// Keyboard input support
document.addEventListener('keydown', function (event) {
  const key = event.key;
  if (/[0-9+\-*/.^%]/.test(key)) {
    appendToDisplay(key);
  } else if (key === 'Enter') {
    calculateResult();
  } else if (key === 'Backspace') {
    backspace();
  } else if (key.toLowerCase() === 'c') {
    clearDisplay();
  }
});