// Función para añadir productos al carrito
function addToCart(productId) {
    console.log('Producto ' + productId + ' añadido al carrito');

}

// Validación y envío del formulario de contacto
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Previene el envío del formulario
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        // Aquí iría el código para enviar el formulario al servidor
        alert('Formulario enviado con éxito');
    } else {
        alert('Por favor, rellene todos los campos');
    }
});
// botón de hamburguesa y el menú
const hamburgerMenu = document.getElementById('hamburger-menu');
const navbar = document.getElementById('navbar');

// evento de clic al botón 
hamburgerMenu.addEventListener('click', () => {
    // Alternar la clase 'show-menu' en el navbar
    navbar.classList.toggle('show-menu');
});

//cookies

// Función para mostrar el popup
function mostrarPopup() {
    document.getElementById('cookiePopup').style.display = 'block';
}

// Función para cerrar el popup
function cerrarPopup() {
    document.getElementById('cookiePopup').style.display = 'none';
}

// Función para generar cookies propias
function generarCookiesPropias() {
    document.cookie = "cookiePropia=true; path=/";
    alert('Cookie propia generada');
}

// Función para generar cookies de terceros
function generarCookiesTerceros() {
    document.cookie = "cookieTercero=true; path=/";
    alert('Cookie de terceros generada');
}

// Función para leer y mostrar las cookies almacenadas
function leerCookies() {
    const cookies = document.cookie.split('; ').map(cookie => cookie.split('='));
    const cookiesAlmacenadas = cookies.map(([name, value]) => `${name}: ${value}`).join('<br>');
    document.getElementById('cookiesAlmacenadas').innerHTML = cookiesAlmacenadas;
}

// Mostrar el popup cuando la página carga
window.onload = function () {
    mostrarPopup();
};

