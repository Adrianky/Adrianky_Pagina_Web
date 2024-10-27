
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
