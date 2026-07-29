function evaluarTemperatura(celsius) {
    let fahrenheit = (celsius * 9 / 5) + 32;
    let mensaje = "";

    if (fahrenheit >= 14 && fahrenheit < 32) {
        mensaje = "Temperatura baja";
    } else if (fahrenheit >= 32 && fahrenheit < 68) {
        mensaje = "Temperatura adecuada";
    } else if (fahrenheit >= 68 && fahrenheit <= 96) {
        mensaje = "Temperatura alta";
    } else {
        mensaje = "Temperatura desconocida";
    }

    console.log(celsius + "°C equivalen a " + fahrenheit + "°F: " + mensaje);
}

// Prueba
evaluarTemperatura(20);