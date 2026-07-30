function sumar(numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma = suma + numeros[i];
    }
    return suma;
}

function multiplicar(numeros) {
    if (numeros.length === 0) {
        return 0;
    }
    let producto = 1;
    for (let i = 0; i < numeros.length; i++) {
        producto = producto * numeros[i];
    }
    return producto;
}

function dividir(numeros) {
    if (numeros.length === 0) {
        return 0;
    }
    let resultado = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        resultado = resultado / numeros[i];
    }
    return resultado;
}

function elevarAlCuadrado(numeros) {
    let nuevoArreglo = [];
    for (let i = 0; i < numeros.length; i++) {
        let valor = numeros[i];
        let cuadrado = valor * valor;
        nuevoArreglo.push(cuadrado);
    }
    return nuevoArreglo;
}

module.exports = {
    sumar: sumar,
    multiplicar: multiplicar,
    dividir: dividir,
    elevarAlCuadrado: elevarAlCuadrado
};
