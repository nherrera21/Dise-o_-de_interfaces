// Variables globales : Seccion donde declaro todas las variables que se
//que se utilizaran en el codigo.
const menu = document.querySelector('.menu');
const busqueda = document.querySelector('.busqueda');
const destinos = document.querySelector('.destinos');
const formularioNewsletter = document.querySelector('.formulario-newsletter');



// Funciones

// Función toggleMenu para ocultar y mostrar el menú de navegación en pantallas pequeñas
function toggleMenu() {
  menu.classList.toggle('activo');
}

// Función para buscar destinos. Obtiene los valores que reciba del formulario HTML y los valida
// para asegurarse de que se hayan ingresado correctamente
function buscarDestinos(event) {
  event.preventDefault(); // Prevenir la acción por defecto del formulario


  // Obtener los valores del formulario
  const terminoBusqueda = document.querySelector('#termino').value;
  const pais = document.querySelector('#pais').value;
  const fecha = document.querySelector('#fecha').value;

  // Validar que se haya ingresado un término de búsqueda
  if (terminoBusqueda.trim() === '') {
    mostrarAlerta('Por favor, ingrese un destino válido');
    return;
  }

// Función para cambiar de pestaña
function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}


// Función para enviar formulario de suscripción, obtiene el valor ingresado en el campo de email
function enviarFormulario(evento) {
  evento.preventDefault();
  const correo = inputCorreo.value;
  // Aquí se podría agregar código para enviar el correo a una base de datos, por ejemplo
  console.log(`Se ha suscrito el correo ${correo}`);
  formulario.reset();
}

// Agregar evento al formulario HTML que escucha cuando el formulario se envia,
// para procesar los datos que añada el usuario
formulario.addEventListener('submit', enviarFormulario);