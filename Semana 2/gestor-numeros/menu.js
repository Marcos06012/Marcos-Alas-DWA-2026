const promptSync = require('prompt-sync');
const operaciones = require('./operaciones.js');
const utils = require('./utils.js');

const prompt = promptSync();

function iniciarMenu(numeros) {
    let continuar = true;
    
    while (continuar) {
        console.log("\n=== GESTOR DE NÚMEROS ===");
        console.log("1. Agregar números");
        console.log("2. Mostrar números");
        console.log("3. Suma total");
        console.log("4. Multiplicación total");
        console.log("5. División total");
        console.log("6. Elevar al cuadrado");
        console.log("7. Salir");
        
        let opcion = prompt("Elige una opción (1-7): ");
        
        if (opcion === "1") {
            let seguir = true;
            while (seguir) {
                let entrada = prompt("Ingresa un número: ");
                let num = parseFloat(entrada);
                
                if (!isNaN(num)) {
                    numeros.push(num);
                    console.log("Número agregado correctamente.");
                } else {
                    console.log("Entrada no válida. No se agregó nada.");
                }
                
                let respuesta = prompt("¿Quieres agregar otro número? (si/no): ");
                if (respuesta !== "si" && respuesta !== "SI" && respuesta !== "s" && respuesta !== "S") {
                    seguir = false;
                }
            }
        } 
        else if (opcion === "2") {
            utils.mostrarNumeros(numeros);
        } 
        else if (opcion === "3") {
            let resultado = operaciones.sumar(numeros);
            console.log("La suma total es: " + resultado);
        } 
        else if (opcion === "4") {
            let resultado = operaciones.multiplicar(numeros);
            console.log("La multiplicación total es: " + resultado);
        } 
        else if (opcion === "5") {
            let resultado = operaciones.dividir(numeros);
            console.log("La división total es: " + resultado);
        } 
        else if (opcion === "6") {
            let arregloCuadrados = operaciones.elevarAlCuadrado(numeros);
            console.log("Resultados elevados al cuadrado:");
            utils.mostrarNumeros(arregloCuadrados);
        } 
        else if (opcion === "7") {
            console.log("¡Adiós!");
            continuar = false;
        } 
        else {
            console.log("Opción incorrecta. Elige un número del 1 al 7.");
        }
    }
}

module.exports = {
    iniciarMenu: iniciarMenu
};
