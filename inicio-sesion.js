const users = {  
    'Adrianky': 'Andis1234',  
    // Añade más usuarios aquí si lo necesitas  
};  

function login(event) {
    event.preventDefault(); // Detiene el envío del formulario

    const username = document.querySelector('input[name="username"]').value;
    const password = document.querySelector('input[name="password"]').value;

    if (users[username] && users[username] === password) {
        // Redirige al archivo HTML deseado
        window.location.href = 'pages/index.html'; // Ajusta la ruta según sea necesario
    } else {
        alert('Credenciales inválidas. Por favor, intenta de nuevo.');
    }
}

//Para redirigir la pagina
const isAuthenticated = false; // Cambia esto según tu lógica de autenticación

if (!isAuthenticated) {
    window.location.href = 'inicio-sesion.html'; // Redirige a la página de inicio de sesión
}