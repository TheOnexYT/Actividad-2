//  Get the hamburger button
const menuToggle = document.getElementById('menuToggle');
const dropdownMenu = document.getElementById('dropdownMenu');

// Add the click event to the button
menuToggle.addEventListener('click', function() {
    if (dropdownMenu.style.display === 'block') {
        dropdownMenu.style.display = 'none';
    } else {
        dropdownMenu.style.display = 'block';
    }
});

// Close the menu if you click out of it.
window.addEventListener('click', function(event) {
    if (!event.target.matches('#menuToggle') && !event.target.matches('.dropdown-item') && !event.target.matches('.navbar-toggler-icon')) {
        dropdownMenu.style.display = 'none';
    }
});



//Form scripts
const usuariosEstaticos = [
    {
        nombre: "Juan",
        apellido: "Perez",
        cedula: "123456789",
        email: "juan@example.com",
        telefono: "555-1234",
        direccion: "Calle 1",
        fechaNacimiento: "1990-01-01",
        genero: "Masculino"
    },
    {
        nombre: "Ana",
        apellido: "Gomez",
        cedula: "987654321",
        email: "ana@example.com",
        telefono: "555-5678",
        direccion: "Calle 2",
        fechaNacimiento: "1985-02-02",
        genero: "Femenino"
    },
    {
        nombre: "Carlos",
        apellido: "Sanchez",
        cedula: "111222333",
        email: "carlos@example.com",
        telefono: "555-9101",
        direccion: "Calle 3",
        fechaNacimiento: "1992-03-03",
        genero: "Masculino"
    }
];

let usuarios = [...usuariosEstaticos];

// Función para agregar un usuario a la tabla
function agregarUsuarioATabla(usuario) {
    const tabla = document.getElementById('tablaUsuarios').querySelector('tbody');
    const fila = document.createElement('tr');

    fila.innerHTML = `
        <td>${usuario.nombre}</td>
        <td>${usuario.apellido}</td>
        <td>${usuario.cedula}</td>
        <td>${usuario.email}</td>
        <td>${usuario.telefono}</td>
        <td>${usuario.direccion}</td>
        <td>${usuario.fechaNacimiento}</td>
        <td>${usuario.genero}</td>
    `;

    tabla.appendChild(fila);
}

// Función para listar los usuarios
document.getElementById('listarUsuarios').addEventListener('click', function() {
    const tabla = document.getElementById('tablaUsuarios').querySelector('tbody');
    tabla.innerHTML = ''; // Limpiamos la tabla antes de listar
    usuarios.forEach(agregarUsuarioATabla);
});

// Función para agregar un nuevo usuario
document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nuevoUsuario = {
        nombre: document.getElementById('nombre').value,
        apellido: document.getElementById('apellido').value,
        cedula: document.getElementById('cedula').value,
        email: document.getElementById('email').value,
        telefono: document.getElementById('telefono').value,
        direccion: document.getElementById('direccion').value,
        fechaNacimiento: document.getElementById('fechaNacimiento').value,
        genero: document.getElementById('genero').value
    };

    // Validaciones
    if (usuarios.some(u => u.cedula === nuevoUsuario.cedula)) {
        alert("El usuario con esta cédula ya existe.");
        return;
    }

    usuarios.push(nuevoUsuario);
    agregarUsuarioATabla(nuevoUsuario);
    document.getElementById('registroForm').reset();
});
