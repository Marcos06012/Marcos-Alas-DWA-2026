function obtenerMayor(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else if (num2 > num1) {
        return num2;
    } else {
        return "Ambos números son iguales";
    }
}

// Prueba
console.log("El número mayor es: " + obtenerMayor(15, 28));