let notaTeorica = prompt("Ingresa la nota teórica (0-10):");
let notaPractica = prompt("Ingresa la nota práctica (0-10):");

let promedio = (notaTeorica * 0.20) + (notaPractica * 0.80);

if (promedio >= 7) {
    alert("Tu promedio es: " + promedio + " - Estado: APROBADO");
} else {
    alert("Tu promedio es: " + promedio + " - Estado: REPROBADO");
}