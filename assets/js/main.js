
/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

document.addEventListener('DOMContentLoaded', function () {
    const loadingProgress = document.querySelector('.loading-progress');
    const loadingText = document.querySelector('.loading-text');
    const computerImage = document.querySelector('.box img');
  
    // Simula la carga (puede cambiar esta parte)
    setTimeout(function () {
      loadingProgress.style.width = '100%'; // Barra de progreso completa
      loadingText.textContent = '¡Listo!';
      computerImage.src = "assets/img/foto.png"; // Reemplaza con tu logo
    }, 3000); // Cambia este valor según el tiempo que quieras que dure la simulación (en milisegundos).
  });
  