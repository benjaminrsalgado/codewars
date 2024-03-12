// Simulación de calentar agua en una tetera eléctrica
function calentarAgua(callback) {
    console.log("Calentando agua...");
    setTimeout(function() {
        console.log("¡El agua está caliente!");
        callback(); // Llamamos a la función de devolución de llamada después de calentar el agua
    }, 3000); // Simulamos el tiempo de calentamiento con un retraso de 3 segundos
}

// Función de devolución de llamada para agregar azúcar
function agregarAzucar() {
    console.log("Agregando azúcar al agua caliente...");
    console.log("¡Tu té está listo!");
}

// Llamamos a la función 'calentarAgua' y pasamos 'agregarAzucar' como una callback
calentarAgua(agregarAzucar);

//aprendi a usar callback function