let numero = prompt("Ingresa un número entero positivo:");
let suma = 0;

// Recorremos desde el 1 hasta el número ingresado
for (let i = 1; i <= numero; i++) {
    // Si el residuo de dividir entre 2 es 0, es par
    if (i % 2 == 0) {
        suma = suma + i;
    }
}

alert("La suma de los números pares es: " + suma);