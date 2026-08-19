// Ejercicio 6

class Aula {
    constructor(idAula, nombreAula, ubicacion, capacidadOcupantes) {
        this.idAula = idAula;
        this.nombreAula = nombreAula;
        this.ubicacion = ubicacion;
        this.capacidadOcupantes = capacidadOcupantes;
    }

    agregar() {
        console.log(`Aula ${this.nombreAula} agregada.`);
    }

    modificar(datosNuevos) {
        Object.assign(this, datosNuevos);
        console.log(`Aula ${this.idAula} modificada.`);
    }

    eliminar() {
        console.log(`Aula ${this.idAula} eliminada.`);
    }

    buscar(id) {
        return this.idAula === id ? this : null;
    }
}

class Horario {
    constructor(idHorario, horaInicio, horaFin, duracion) {
        this.idHorario = idHorario;
        this.horaInicio = horaInicio;
        this.horaFin = horaFin;
        this.duracion = duracion;
    }

    agregar() {
        console.log(`Horario ${this.idHorario} agregado.`);
    }

    modificar(datosNuevos) {
        Object.assign(this, datosNuevos);
        console.log(`Horario ${this.idHorario} modificado.`);
    }

    eliminar() {
        console.log(`Horario ${this.idHorario} eliminado.`);
    }

    buscar(id) {
        return this.idHorario === id ? this : null;
    }
}

class Departamento {
    constructor(idDepartamento, nombreDepartamento, encargadoDepartamento) {
        this.idDepartamento = idDepartamento;
        this.nombreDepartamento = nombreDepartamento;
        this.encargadoDepartamento = encargadoDepartamento;
    }

    agregar() {
        console.log(`Departamento ${this.nombreDepartamento} agregado.`);
    }

    modificar(datosNuevos) {
        Object.assign(this, datosNuevos);
        console.log(`Departamento ${this.idDepartamento} modificado.`);
    }

    eliminar() {
        console.log(`Departamento ${this.idDepartamento} eliminado.`);
    }

    buscar(id) {
        return this.idDepartamento === id ? this : null;
    }
}

class Docente {
    constructor(idDocente, nombreDocente, apellidoDocente, direccionDocente, especialidad, idDepartamento) {
        this.idDocente = idDocente;
        this.nombreDocente = nombreDocente;
        this.apellidoDocente = apellidoDocente;
        this.direccionDocente = direccionDocente;
        this.especialidad = especialidad;
        this.idDepartamento = idDepartamento;
    }

    agregar() {
        console.log(`Docente ${this.nombreDocente} agregado.`);
    }

    modificar(datosNuevos) {
        Object.assign(this, datosNuevos);
        console.log(`Docente ${this.idDocente} modificado.`);
    }

    eliminar() {
        console.log(`Docente ${this.idDocente} eliminado.`);
    }

    buscar(id) {
        return this.idDocente === id ? this : null;
    }
}

class Materia {
    constructor(idMateria, nombreMateria, idDocente, idHorario, idAula) {
        this.idMateria = idMateria;
        this.nombreMateria = nombreMateria;
        this.idDocente = idDocente;
        this.idHorario = idHorario;
        this.idAula = idAula;
    }

    agregar() {
        console.log(`Materia ${this.nombreMateria} agregada.`);
    }

    modificar(datosNuevos) {
        Object.assign(this, datosNuevos);
        console.log(`Materia ${this.idMateria} modificada.`);
    }

    eliminar() {
        console.log(`Materia ${this.idMateria} eliminada.`);
    }

    buscar(id) {
        return this.idMateria === id ? this : null;
    }
}

class Estudiante {
    constructor(idEstudiante, nombreEstudiante, apellidoEstudiante, direccionEstudiante) {
        this.idEstudiante = idEstudiante;
        this.nombreEstudiante = nombreEstudiante;
        this.apellidoEstudiante = apellidoEstudiante;
        this.direccionEstudiante = direccionEstudiante;
    }

    agregar() {
        console.log(`Estudiante ${this.nombreEstudiante} registrado.`);
    }

    modificar(datosNuevos) {
        Object.assign(this, datosNuevos);
        console.log(`Estudiante ${this.idEstudiante} modificado.`);
    }

    eliminar() {
        console.log(`Estudiante ${this.idEstudiante} eliminado.`);
    }

    buscar(id) {
        return this.idEstudiante === id ? this : null;
    }
}

class Notas {
    // Se corrigió agregando idEstudiante
    constructor(idNotas, nota1, nota2, nota3, idMateria, idEstudiante) {
        this.idNotas = idNotas;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
        this.idMateria = idMateria;
        this.idEstudiante = idEstudiante;
    }

    agregar() {
        console.log(`Notas ${this.idNotas} creadas.`);
    }

    modificar(datosNuevos) {
        Object.assign(this, datosNuevos);
        console.log(`Notas ${this.idNotas} modificadas.`);
    }

    eliminar() {
        console.log(`Notas ${this.idNotas} eliminadas.`);
    }

    calcular() {
        return (this.nota1 + this.nota2 + this.nota3) / 3;
    }
}

// Pruebas
const depto = new Departamento("DEP-01", "Sistemas", "Ing. Rivera");
const prof = new Docente("DOC-01", "Francisco", "Alas", "San Salvador", "Web", "DEP-01");
const lab = new Aula("AULA-102", "Lab 2", "Edificio B", 30);
const hor = new Horario("HOR-05", "13:00", "15:00", "2h");
const mat = new Materia("MAT-101", "DWA", "DOC-01", "HOR-05", "AULA-102");
const est = new Estudiante("EST-01", "Marcos", "Alas", "La Libertad");
const notasEst = new Notas("NOT-01", 8, 9, 10, "MAT-101", "EST-01");

depto.agregar();
prof.agregar();
lab.agregar();
hor.agregar();
mat.agregar();
est.agregar();
notasEst.agregar();

console.log("Promedio:", notasEst.calcular());
