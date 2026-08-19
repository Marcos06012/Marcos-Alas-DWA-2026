// Ejercicio 7

class Animal {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    respirar() {
        return `${this.nombre} está respirando.`;
    }
}

function funcionAnimal(animal) {
    return `Animal: ${animal.nombre}, Edad: ${animal.edad}`;
}

class Mamifero extends Animal {
    constructor(nombre, edad, tienePelaje) {
        super(nombre, edad);
        this.tienePelaje = tienePelaje;
    }

    amamantar() {
        return `${this.nombre} amamanta a sus crías.`;
    }
}

function funcionMamifero(mamifero) {
    return `${mamifero.nombre} ${mamifero.tienePelaje ? "tiene pelaje" : "no tiene pelaje"}`;
}

class Reptil extends Animal {
    constructor(nombre, edad, esTerrestre) {
        super(nombre, edad);
        this.esTerrestre = esTerrestre;
    }

    regularTemperatura() {
        return `${this.nombre} regula su temperatura.`;
    }
}

function funcionReptil(reptil) {
    return `${reptil.nombre} es reptil`;
}

class Perro extends Mamifero {
    constructor(nombre, edad, raza) {
        super(nombre, edad, true);
        this.raza = raza;
    }

    ladrar() {
        return `${this.nombre} dice: Guau!`;
    }
}

function funcionPerro(perro) {
    return `Perro de raza: ${perro.raza}`;
}

class Gato extends Mamifero {
    constructor(nombre, edad, colorOjos) {
        super(nombre, edad, true);
        this.colorOjos = colorOjos;
    }

    maullar() {
        return `${this.nombre} dice: Miau!`;
    }
}

function funcionGato(gato) {
    return `Gato con ojos ${gato.colorOjos}`;
}

class Humano extends Mamifero {
    constructor(nombre, edad, idioma) {
        super(nombre, edad, false);
        this.idioma = idioma;
    }

    pensar() {
        return `${this.nombre} piensa en ${this.idioma}.`;
    }
}

function funcionHumano(humano) {
    return `Humano: ${humano.nombre}`;
}

class Hombre extends Humano {
    constructor(nombre, edad, idioma, tieneBarba) {
        super(nombre, edad, idioma);
        this.tieneBarba = tieneBarba;
    }

    afeitarse() {
        return this.tieneBarba ? `${this.nombre} se afeita.` : `${this.nombre} no tiene barba.`;
    }
}

function funcionHombre(hombre) {
    return `Hombre: ${hombre.nombre}`;
}

class Mujer extends Humano {
    constructor(nombre, edad, idioma, carrera) {
        super(nombre, edad, idioma);
        this.carrera = carrera;
    }

    liderarProyecto() {
        return `${this.nombre} lidera proyecto.`;
    }
}

function funcionMujer(mujer) {
    return `Mujer: ${mujer.nombre}`;
}

class Cocodrilo extends Reptil {
    constructor(nombre, edad, longitud) {
        super(nombre, edad, false);
        this.longitud = longitud;
    }

    morder() {
        return `${this.nombre} muerde.`;
    }
}

function funcionCocodrilo(cocodrilo) {
    return `Cocodrilo de ${cocodrilo.longitud}m`;
}

class Serpiente extends Reptil {
    constructor(nombre, edad, esVenenosa) {
        super(nombre, edad, true);
        this.esVenenosa = esVenenosa;
    }

    siseal() {
        return `${this.nombre} sisea.`;
    }
}

function funcionSerpiente(serpiente) {
    return `Serpiente es venenosa: ${serpiente.esVenenosa}`;
}

// Pruebas
const perro = new Perro("Fido", 5, "Golden");
const gato = new Gato("Michi", 3, "Verdes");
const hombre = new Hombre("Carlos", 30, "Español", true);
const mujer = new Mujer("Elena", 28, "Español", "Sistemas");
const cocodrilo = new Cocodrilo("Coco", 12, 4.5);
const serpiente = new Serpiente("Kaa", 4, false);

console.log(perro.respirar());
console.log(perro.amamantar());
console.log(perro.ladrar());
console.log(funcionPerro(perro));
console.log(funcionAnimal(perro));
