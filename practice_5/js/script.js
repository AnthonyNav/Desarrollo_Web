// Animación para las tarjetas del itinerario (hover)
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mouseover', () => {
    card.style.transform = 'scale(1.05)';
    card.style.transition = 'transform 0.3s ease-in-out';
  });

  card.addEventListener('mouseout', () => {
    card.style.transform = 'scale(1)';
  });
});

// Validación del formulario de contacto
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Evitar el envío predeterminado del formulario

  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const mensaje = document.getElementById('mensaje').value;

  // Validación básica
  if (!nombre || !email || !mensaje) {
    alert('Por favor, complete todos los campos antes de enviar el formulario.');
  } else {
    alert('Formulario enviado con éxito');
    contactForm.reset(); // Limpiar el formulario después de enviarlo
  }
});

// Animación de elementos al hacer scroll (Fade In)
window.addEventListener('scroll', function () {
  const elements = document.querySelectorAll('.fade-in');
  elements.forEach(element => {
    const position = element.getBoundingClientRect();
    if (position.top < window.innerHeight - 100) {
      element.classList.add('visible');
    }
  });
});

// Clase CSS que se activa cuando el elemento es visible (para animaciones de fade-in)
document.addEventListener('DOMContentLoaded', function () {
  const fadeElements = document.querySelectorAll('.fade-in');
  fadeElements.forEach(el => {
    el.classList.add('fade-out');
  });
});

// Función para mostrar alertas cuando el formulario se valida
function showAlert(message) {
  const alertContainer = document.getElementById('alert-container');
  alertContainer.innerHTML = `<div class="alert alert-success" role="alert">${message}</div>`;
  setTimeout(() => {
    alertContainer.innerHTML = '';
  }, 3000);
}
