// Variable global para controlar el estado del texto
let textoVisible = false;

// Función para alternar la visibilidad del texto adicional
function toggleText() {
  // Obtener el elemento del texto adicional
  const textoAdicional = document.querySelector('.additional');
  // Obtener el enlace para cambiar el texto
  const enlace = document.querySelector('a');

  // Alternar la visibilidad del texto
  if (textoVisible) {
    textoAdicional.classList.remove('visible'); // Ocultar el texto
    textoAdicional.classList.add('hidden');
    enlace.textContent = 'Seguir leyendo'; // Cambiar el texto del enlace
  } else {
    textoAdicional.classList.remove('hidden'); // Mostrar el texto
    textoAdicional.classList.add('visible');
    enlace.textContent = 'Ocultar exceso de texto'; // Cambiar el texto del enlace
  }

  // Cambiar el estado de visibilidad
  textoVisible = !textoVisible;
}
