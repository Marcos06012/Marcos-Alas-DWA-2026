// Ejercicio 4

const numeroEntero = 100;
const numeroDecimal = 45.75;
const cadenaTexto = "Guía de Ejercicios JavaScript";

const producto = {
    id: 404,
    nombre: "Smartphone Samsung Galaxy",
    precio: 299.99,
    categoria: "Celulares",
    stock: 25,

    obtenerMensaje: function() {
        return `El producto ${this.nombre} cuesta $${this.precio}`;
    },

    obtenerProveedor: function() {
        return {
            idProveedor: 88,
            nombreEmpresa: "Samsung Distribuidora"
        };
    }
};

const arrayInterno = [10, 20, 30, 40, 50, 60, 70];

const arrayExterno = [numeroEntero, numeroDecimal, cadenaTexto, producto, arrayInterno];

// Imprimir elementos
console.log("Elementos del array externo:");
arrayExterno.forEach(function(elemento) {
    console.log(elemento);
});

// Última posición del array interno
console.log("Último del array interno:", arrayInterno[arrayInterno.length - 1]);
