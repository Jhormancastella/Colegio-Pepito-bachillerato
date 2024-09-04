
    // Array simulado para almacenar estudiantes //
let estudiantes = [];

// de agregar estudiante //
document.getElementById('formAgregarEstudiante').addEventListener('submit', function(e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const identificacion = document.getElementById('identificacion').value;
    const grupo = document.getElementById('grupo').value;

    const nuevoEstudiante = {
        id: identificacion,
        nombre: nombre,
        apellido: apellido,
        grupo: grupo,
        notas: []
    };

    estudiantes.push(nuevoEstudiante);
    console.log('Estudiante agregado correctamente');
});

//formulario de buscar estudiante //
document.getElementById('formBuscarEstudiante').addEventListener('submit', function(e) {
    e.preventDefault();

    const buscarID = document.getElementById('buscarID').value;
    const estudiante = estudiantes.find(est => est.id === buscarID);

    if (estudiante) {
        let promedio = calcularPromedio(estudiante.notas);
        document.getElementById('resultadoBusqueda').innerHTML = `
            <p>Nombre: ${estudiante.nombre} ${estudiante.apellido}</p>
            <p>Grupo: ${estudiante.grupo}</p>
            <p>Promedio: ${promedio}</p>
            <p>Notas: ${estudiante.notas.join(', ')}</p>
        `;
    } else {
        document.getElementById('resultadoBusqueda').innerHTML = '<p>Estudiante no encontrado</p>';
    }
});

// formulario de agregar nota //
document.getElementById('formAgregarNota').addEventListener('submit', function(e) {
    e.preventDefault();

    const notaID = document.getElementById('notaID').value;
    const nota = parseFloat(document.getElementById('nota').value);

    const estudiante = estudiantes.find(est => est.id === notaID);

    if (estudiante) {
        estudiante.notas.push(nota);
        alert('Nota agregada correctamente');
    } else {
        alert('Estudiante no encontrado');
    }
});

// Función para calcular el promedio //
function calcularPromedio(notas) {
    if (notas.length === 0) return 0;
    let suma = notas.reduce((total, num) => total + num, 0);
    return (suma / notas.length).toFixed(2);
}