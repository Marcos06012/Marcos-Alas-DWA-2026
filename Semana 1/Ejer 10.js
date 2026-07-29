function calcularDescuentoViaje(origen, destino) {
    let descuento = 0;

    if (origen == "Palma") {
        if (destino == "La costa del Sol") {
            descuento = 5;
        } else if (destino == "Panchimalco") {
            descuento = 10;
        } else if (destino == "Puerto el Triunfo") {
            descuento = 15;
        }
    }

    console.log("Origen: " + origen + " | Destino: " + destino);
    console.log("Descuento: " + descuento + "%");
}

// Prueba
calcularDescuentoViaje("Palma", "Panchimalco");