
const validUsername = "Adrianky";
const validPassword = "Andis1234";

window.onload = function() {
    checkLoginStatus();
};

function closePopup() {
    // Cerrar la ventana de inicio de sesión
    document.getElementById('loginPopup').style.display = 'none';
}

function validateLogin(event) {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    if (username === validUsername && password === validPassword) {
        errorMessage.textContent = "Inicio de sesión exitoso";
        errorMessage.className = "success";
        sessionStorage.setItem('loggedIn', true);
        closePopup();
        return true;
    } else {
        errorMessage.textContent = "Credenciales inválidas";
        errorMessage.className = "error";
        return false;
    }
}

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
        container.style.animationDuration = `${totalImages * 2 + 4}s`; // Ajusta la duración  

        // Ajustar la distancia final para coincidir con el desplazamiento  
        const calculateWidth = () => {  
            const imageWidth = 100; // ancho de las imágenes  
            const margin = 20; // margen entre imágenes  
            return (totalImages * (imageWidth + margin)) + 'px';  
        };  
        
        // Cambia el ancho del contenedor de la animación  
        container.style.width = calculateWidth();  
