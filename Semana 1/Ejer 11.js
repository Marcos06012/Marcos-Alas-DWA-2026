// Arreglo fijo con los 10 valores
let numeros = [15, -5, 30, 4, -12, 0, 45, 8, -2, 10];

let negativos = 0;
let positivos = 0;
let multiplos15 = 0;
let sumaPares = 0;

for (let i = 0; i < numeros.length; i++) {
    let num = numeros[i];

    if (num < 0) {
        negativos++;
    } else if (num > 0) {
        positivos++;
    }

    if (num % 15 == 0 && num != 0) {
        multiplos15++;
    }

    if (num % 2 == 0) {
        sumaPares = sumaPares + num;
    }
}

console.log("Cantidad de negativos: " + negativos);
console.log("Cantidad de positivos: " + positivos);
console.log("Cantidad de múltiplos de 15: " + multiplos15);
console.log("Suma acumulada de pares: " + sumaPares);