const peso = parseFloat(prompt("Ingresa tu peso en kg (ej. 70.5):"));
const estatura = parseFloat(prompt("Ingresa tu estatura en metros (ej. 1.75):"));

// Calculamos el IMC: peso / (estatura^2)
const imc = peso / (estatura ** 2);

console.log(`Tu IMC es: ${imc.toFixed(2)}`);

if (imc < 18.5) {
    console.log("Estado: Bajo peso");
} else if (imc >= 18.5 && imc < 25.0) {
    console.log("Estado: Peso normal");
} else if (imc >= 25.0 && imc < 30.0) {
    console.log("Estado: Sobrepeso");
} else {
    console.log("Estado: Obesidad");
}