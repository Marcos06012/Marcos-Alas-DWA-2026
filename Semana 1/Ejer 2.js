let opcion = prompt("Elige una opción:\n1. De Celsius a Fahrenheit\n2. De Fahrenheit a Celsius");

if (opcion == "1") {
    let celsius = prompt("Ingresa los grados Celsius:");
    let fahrenheit = (celsius * 9 / 5) + 32;
    alert(celsius + "C equivalen a " + fahrenheit + "F");
} else if (opcion == "2") {
    let fahrenheit = prompt("Ingresa los grados Fahrenheit:");
    let celsius = (fahrenheit - 32) * 5 / 9;
    alert(fahrenheit + "F equivalen a " + celsius + "C");
} else {
    alert("Opción no válida");
}