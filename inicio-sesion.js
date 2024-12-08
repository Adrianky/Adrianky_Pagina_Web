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
        window.location.href = 'index.html'; // Cambia a tu archivo deseado
    } else {
        alert('Credenciales inválidas. Por favor, intenta de nuevo.');
    }
}
