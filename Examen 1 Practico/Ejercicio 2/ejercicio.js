function procesarNotasEstudiante() {
    let cantidadNotas = prompt("¿Cuántas notas deseas ingresar?");
    cantidadNotas = parseInt(cantidadNotas);

    let notasArray = [];

    for (let i = 0; i < cantidadNotas; i++) {
        let notaIngresada = prompt("Ingresa la nota " + (i + 1) + ":");
        notaIngresada = parseFloat(notaIngresada);

        notasArray.push(notaIngresada);
    }

    let resultadoFinal = procesarCalificaciones(notasArray);

    alert("Promedio (CUM): " + resultadoFinal.promedio +
        "\nAprobadas: " + resultadoFinal.aprobadas +
        "\nReprobadas: " + resultadoFinal.reprobadas);
}

function procesarCalificaciones(notasArray) {
    let sumaNotas = 0;
    let cantAprobadas = 0;
    let cantReprobadas = 0;

    notasArray.forEach(function (nota) {
        sumaNotas += nota;

        if (nota >= 7.0) {
            cantAprobadas++;
        } else {
            cantReprobadas++;
        }
    });

    let promedioFinal = 0;
    if (notasArray.length > 0) {
        promedioFinal = sumaNotas / notasArray.length;
    }

    return {
        promedio: promedioFinal.toFixed(2),
        aprobadas: cantAprobadas,
        reprobadas: cantReprobadas
    };
}