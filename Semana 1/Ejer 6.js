function calcularNotaFinal(nombre, carnet, examen, tareas, asistencia, investigacion) {
    let notaFinal = (examen * 0.20) + (tareas * 0.40) + (asistencia * 0.10) + (investigacion * 0.30);

    console.log("Alumno: " + nombre);
    console.log("Carnet: " + carnet);
    console.log("Nota Final: " + notaFinal);
}

// Prueba
calcularNotaFinal("Marcos Morales", "AM123456", 8, 9, 10, 7);