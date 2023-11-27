const PASSWORD = "ur903-AKsdaa-ii+Ps2-239Cs";

function checkPassword() {
    let input = document.getElementById('passwordInput').value;
    
    if (input === PASSWORD) {
        // Guardar el momento actual en el almacenamiento local
        localStorage.setItem('authTime', new Date().getTime());

        showContent();
    } else {
        alert('Contraseña incorrecta');
    }
}

function showContent() {
    document.getElementById('login').style.display = 'none';
    document.getElementById('content').style.display = 'block';
}

function checkAuthStatus() {
    const authTime = localStorage.getItem('authTime');

    if (authTime) {
        const currentTime = new Date().getTime();
        const tenMinutes = 10 * 60 * 1000; // Diez minutos en milisegundos

        // Si han pasado menos de diez minutos desde la autenticación
        if (currentTime - authTime < tenMinutes) {
            showContent();
        } else {
            // Limpiar el registro y mostrar la pantalla de inicio de sesión
            localStorage.removeItem('authTime');
            document.getElementById('login').style.display = 'block';
            document.getElementById('content').style.display = 'none';
        }
    }
}

// Llamada a checkAuthStatus al cargar la página
document.addEventListener('DOMContentLoaded', checkAuthStatus);
