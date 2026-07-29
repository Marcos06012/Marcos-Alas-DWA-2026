// Edades fijas de cada turno
let turnoManana = [18, 20, 19, 22, 21]; // 5 estudiantes
let turnoTarde = [20, 21, 23, 22, 25, 24]; // 6 estudiantes
let turnoNoche = [25, 28, 30, 22, 24, 26, 27, 29, 31, 20, 23]; // 11 estudiantes

// Función para sacar el promedio de cualquier arreglo
function sacarPromedio(edades) {
    let suma = 0;
    for (let i = 0; i < edades.length; i++) {
        suma = suma + edades[i];
    }
    return suma / edades.length;
}

let promManana = sacarPromedio(turnoManana);
let promTarde = sacarPromedio(turnoTarde);
let promNoche = sacarPromedio(turnoNoche);

console.log("Promedio Turno Mañana: " + promManana);
console.log("Promedio Turno Tarde: " + promTarde);
console.log("Promedio Turno Noche: " + promNoche);

// Comparar cuál es mayor
if (promManana > promTarde && promManana > promNoche) {
    console.log("El turno con mayor promedio de edad es: Mañana");
} else if (promTarde > promNoche) {
    console.log("El turno con mayor promedio de edad es: Tarde");
} else {
    console.log("El turno con mayor promedio de edad es: Noche");
}