document.getElementById('submitBtn').addEventListener('click', function() {
    // Obtener el nombre del alumno
    var nombre = document.getElementById('nombre').value;

    // Verificar que el nombre no esté vacío
    if (!nombre) {
        alert('Por favor, ingresa tu nombre antes de corregir el examen.');
        return;
    }

    // Definir las respuestas correctas
    var respuestasCorrectas = {
        1: "42",  // Respuesta correcta para la pregunta 1
        2: "6",   // Respuesta correcta para la pregunta 2
        3: "9",   // Respuesta correcta para la pregunta 3
        4: "40",  // Respuesta correcta para la pregunta 4
        5: "40"   // Respuesta correcta para la pregunta 5
    };

    var respuestasUsuario = {
        1: document.querySelector('input[name="1"]:checked')?.value,
        2: document.querySelector('input[name="2"]:checked')?.value,
        3: document.querySelector('input[name="3"]:checked')?.value,
        4: document.querySelector('input[name="4"]:checked')?.value,
        5: document.querySelector('input[name="5"]:checked')?.value
    };

    // Contador de aciertos
    var aciertos = 0;
    var resultados = document.getElementById('resultados');
    resultados.innerHTML = ""; // Limpiar los resultados anteriores

    // Mostrar el nombre del alumno
    resultados.innerHTML += `<h3>Resultados de ${nombre}:</h3>`;

    // Compara las respuestas del usuario con las respuestas correctas
    for (var pregunta in respuestasCorrectas) {
        if (respuestasCorrectas[pregunta] === respuestasUsuario[pregunta]) {
            aciertos++;
        } else {
            // Mostrar las respuestas incorrectas
            resultados.innerHTML += `<br>La respuesta correcta para la pregunta ${pregunta} es: ${respuestasCorrectas[pregunta]}.`;
        }
    }

    // Mostrar cuántas respuestas correctas ha dado el usuario
    resultados.innerHTML += `<br><strong>Has acertado ${aciertos} de 5 respuestas.</strong>`;
});
