// script.js

// Referencias a elementos del DOM
const usuarioForm = document.getElementById("usuarioForm");

// Función para agregar usuario
function agregarUsuario(event) {
    event.preventDefault(); // Evita el envío del formulario

    // Obtener los valores del formulario
    const usuarioInput = document.getElementById("usuario");
    const contraseñaInput = document.getElementById("password");

    const nuevoUsuario = {
        usuario: usuarioInput.value,
        contraseña: contraseñaInput.value
    };

    // Obtener usuarios existentes del localStorage
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Agregar el nuevo usuario al array
    usuarios.push(nuevoUsuario);

    // Guardar los usuarios en el localStorage
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    // Limpiar el formulario
    usuarioInput.value = "";
    contraseñaInput.value = "";

    // Redirigir a la página de usuarios
    window.location.href = "usuarios.html"; // Cambia "usuarios.html" por la ruta correcta
}

// Escuchar el evento de envío del formulario
usuarioForm.addEventListener("submit", agregarUsuario);
