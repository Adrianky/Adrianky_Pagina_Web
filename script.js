
const validUsername = "Adrianky";
const validPassword = "Andis1234";


function checkLoginStatus() {
    if (!sessionStorage.getItem('loggedIn')) {
        document.getElementById('loginPopup').style.display = 'block';
    } else {
        document.getElementById('loginPopup').style.display = 'none';
    }
}
document.getElementById("loginBtn").addEventListener("click", function() {  
    document.getElementById("sidebar").classList.toggle("open");  
});  

document.getElementById("closeBtn").addEventListener("click", function() {  
    document.getElementById("sidebar").classList.remove("open");  
});  

// Cerrar la barra lateral al hacer clic fuera de ella  
window.addEventListener('click', function(event) {  
    const sidebar = document.getElementById("sidebar");  
    const loginBtn = document.getElementById("loginBtn");  
    if (!sidebar.contains(event.target) && !loginBtn.contains(event.target)) {  
        sidebar.classList.remove("open");  
    }  
});
setTimeout(() => {  
    document.navbar.style.animation = 'none';
}, 30000);
const container = document.querySelector('.carousel-container');  
        
        // Duplicar las imágenes para el efecto circulante  
        const images = document.querySelectorAll('.car-image');  
        images.forEach(img => {  
            const clone = img.cloneNode(true);  
            container.appendChild(clone);  
        });  
        
        // Cambiar la duración de la animación en función de la cantidad de imágenes  
        const totalImages = images.length;  
        container.style.animationDuration = `${totalImages * 1 + 2}s`; // Ajusta la duración  

        // Ajustar la distancia final para coincidir con el desplazamiento  
        const calculateWidth = () => {  
            const imageWidth = 100; // ancho de las imágenes  
            const margin = 20; // margen entre imágenes  
            return (totalImages * (imageWidth + margin)) + 'px';  
        };  
        
        // Cambia el ancho del contenedor de la animación  
        container.style.width = calculateWidth();
          
        document.getElementById('inicio').addEventListener('click', function(event) {
            event.preventDefault(); // Evita el comportamiento predeterminado del enlace
            window.scrollTo({ top: 0, behavior: 'smooth' }); // Desplaza suavemente hasta la parte superior
        });
        
         const isAuthenticated = false; // Cambia esto según tu lógica de autenticación

        if (!isAuthenticated) {
            window.location.href = 'inicio-sesion.html'; // Redirige a la página de inicio de sesión
        }
