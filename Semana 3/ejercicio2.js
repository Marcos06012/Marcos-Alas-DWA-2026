// Ejercicio 2

function creadorCalculadorAreas() {
    const calcularAreaRectangulo = function(base, altura) {
        return base * altura;
    };

    const calcularAreaTriangulo = function(base, altura) {
        return (base * altura) / 2;
    };

    const calcularAreaRombo = function(diagonalMayor, diagonalMenor) {
        return (diagonalMayor * diagonalMenor) / 2;
    };

    return {
        rectangulo: calcularAreaRectangulo,
        triangulo: calcularAreaTriangulo,
        rombo: calcularAreaRombo
    };
}

// Pruebas
const calculador = creadorCalculadorAreas();

console.log("Área del Rectángulo (10, 5):", calculador.rectangulo(10, 5));
console.log("Área del Triángulo (8, 6):", calculador.triangulo(8, 6));
console.log("Área del Rombo (12, 8):", calculador.rombo(12, 8));
