$(document).ready(function () {
    $('nav a').on('click', function (event) {
      event.preventDefault();
      var target = $(this).attr('href');
      $('html, body').animate(
        {
          scrollTop: $(target).offset().top,
        },
        1000
      );
    });
  });

// Obtén todos los botones de servicio
const botonesServicio = document.querySelectorAll('.btn-servicio');

// Agrega un evento de clic a cada botón de servicio
botonesServicio.forEach(boton => {
  boton.addEventListener('click', () => {
    // Obtén el identificador del modal correspondiente al botón
    const modalId = boton.getAttribute('data-modal');
    // Muestra el modal correspondiente
    const modal = document.getElementById(modalId);
    modal.style.display = 'block';
    // Agrega la clase de animación al contenido del modal después de que se muestre
    const modalContenido = modal.querySelector('.modal-contenido');
    modalContenido.classList.add('animated');
  });
});

// Obtén todos los botones de cierre del modal
const botonesCierreModal = document.querySelectorAll('.cerrar-modal');

// Agrega un evento de clic a cada botón de cierre del modal
botonesCierreModal.forEach(boton => {
  boton.addEventListener('click', () => {
    // Oculta el modal correspondiente
    const modal = boton.closest('.modal');
    modal.style.display = 'none';
  });
});

