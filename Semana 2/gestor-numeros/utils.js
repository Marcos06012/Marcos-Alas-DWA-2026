function mostrarNumeros(numeros) {
    if (numeros.length === 0) {
        console.log("No hay números en la lista.");
    } else {
        console.log("Números actuales en la lista:");
        for (let i = 0; i < numeros.length; i++) {
            console.log("- " + numeros[i]);
        }
    }
}

module.exports = {
    mostrarNumeros: mostrarNumeros
};
