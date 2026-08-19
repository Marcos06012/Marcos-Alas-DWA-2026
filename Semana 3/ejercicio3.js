// Ejercicio 3

let nombres = ["Juan", "Maria", "Carlos", "Ana", "Luis", "Elena", "Pedro", "Sofia", "Jorge", "Lucia"];
console.log("Arreglo inicial:", nombres);

// Agregar a "Rosa" al inicio
nombres.unshift("Rosa");

// Agregar a "Pepe" al final
nombres.push("Pepe");

// Agregar "Desarrollo" después de "Rosa" (que está en la posición 0)
nombres.splice(1, 0, "Desarrollo");
console.log("Modificado:", nombres);

// Copia del arreglo y ordenar descendente
let copiaNombres = [...nombres];
copiaNombres.sort(function(a, b) {
    return b.localeCompare(a);
});

console.log("Copia ordenada de forma descendente:", copiaNombres);
