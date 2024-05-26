// Selecciona el elemento del display
const display = document.querySelector('#display');
// Selecciona todos los botones
const buttons = document.querySelectorAll('button');


buttons.forEach(button => {

  button.onclick = function() {
    // Obtiene los atributos data-action y data-value del botón clicado
    const action = button.dataset.action;
    const value = button.dataset.value;

    // Ejecuta una acción basada en el valor de data-action
    // Ejecuta una acción basada en el valor de data-action
    switch (action) {
      case 'clear':
        clearDisplay();
        break;
      case 'append':
        appendValue(value);
        break;
      case 'calculate':
        calculate();
        break;
    }
  };
});

// Función para añadir un valor al display
function appendValue(value) {
  // Si el display muestra solo '0', reemplaza el '0' con el nuevo valor
  if (display.innerText === '0') {
    display.innerText = value;
  } else {
    // De lo contrario, añade el nuevo valor al final del contenido actual del display
    display.innerText += value;
  }
}

// Función para limpiar el display, restableciéndolo a '0'
function clearDisplay() {
  display.innerText = '0';
}

// Función para evaluar la expresión matemática en el display y mostrar el resultado
function calculate() {
  try {
    // Evalúa la expresión en el display y muestra el resultado
    display.innerText = eval(display.innerText);
  } catch {
    // Si ocurre un error (por ejemplo, una expresión inválida), muestra 'Error'
    display.innerText = 'Error';
  }
}

