class Estudiante {
    constructor(carnet, nombre, telefono, carrera) {
        this._carnet = carnet;
        this._nombre = nombre;
        this._telefono = telefono;
        this._carrera = carrera;
    }

    get carnet() { return this._carnet; }
    set carnet(nuevoCarnet) { this._carnet = nuevoCarnet; }

    get nombre() { return this._nombre; }
    set nombre(nuevoNombre) { this._nombre = nuevoNombre; }

    get telefono() { return this._telefono; }
    set telefono(nuevoTelefono) { this._telefono = nuevoTelefono; }

    get carrera() { return this._carrera; }
    set carrera(nuevaCarrera) { this._carrera = nuevaCarrera; }

    getInformacion() {
        return `Carnet: ${this._carnet} - Nombre: ${this._nombre} - Teléfono: ${this._telefono} - Carrera: ${this._carrera}`;
    }
}

function guardarEstudiante() {
    let carnetEstudiante = document.getElementById("carnet").value;
    let nombreEstudiante = document.getElementById("nombre").value;
    let telefonoEstudiante = document.getElementById("telefono").value;
    let carreraEstudiante = document.getElementById("carrera").value;

    let patronTelefono = /^\(\d{3}\) \d{4}-\d{4}$/;

    if (!patronTelefono.test(telefonoEstudiante)) {
        alert("El teléfono debe tener el formato (999) 9999-9999");
        return;
    }

    let infoEstudiante = new Estudiante(carnetEstudiante, nombreEstudiante, telefonoEstudiante, carreraEstudiante);

    infoEstudiante.carnet = infoEstudiante.carnet.toUpperCase();

    let textoResultado = infoEstudiante.getInformacion();

    let nuevoParrafo = document.createElement("p");

    nuevoParrafo.textContent = textoResultado;

    let contenedor = document.getElementById("resultado");
    contenedor.appendChild(nuevoParrafo);
}

