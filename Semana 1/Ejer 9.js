function calcularDescuentoCoche(modelo) {
    let descuento = 0;

    if (modelo == "FORD FIESTA") {
        descuento = 5;
    } else if (modelo == "FORD FOCUS") {
        descuento = 10;
    } else if (modelo == "FORD ESCAPE") {
        descuento = 20;
    }

    // Muestra el resultado directamente en el documento HTML
    document.write("Coche seleccionado: " + modelo + "<br>");
    document.write("Descuento aplicado: " + descuento + "%");
}

// Prueba
calcularDescuentoCoche("FORD FOCUS");