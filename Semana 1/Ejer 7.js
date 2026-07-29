let nombre = "Carlos Perez";
let salario = 500;
let categoria = "B";
let porcentaje = 0;

if (categoria == "A") {
    porcentaje = 0.15;
} else if (categoria == "B") {
    porcentaje = 0.30;
} else if (categoria == "C") {
    porcentaje = 0.10;
} else if (categoria == "D") {
    porcentaje = 0.20;
}

let aumento = salario * porcentaje;
let salarioNuevo = salario + aumento;

console.log("Empleado: " + nombre);
console.log("Aumento: $" + aumento);
console.log("Salario total con aumento: $" + salarioNuevo);