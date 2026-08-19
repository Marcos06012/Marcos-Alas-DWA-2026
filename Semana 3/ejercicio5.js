// Ejercicio 5

class Empleado {
    constructor(codigoEmpleado, nombre, edad, cargo, fechaIngreso, genero) {
        this.codigoEmpleado = codigoEmpleado;
        this.nombre = nombre;
        this.edad = edad;
        this.cargo = cargo;
        this.fechaIngreso = fechaIngreso;
        this.genero = genero;
    }

    obtenerDetalles() {
        return `${this.nombre} - ${this.cargo}`;
    }

    static formatearMoneda(monto) {
        return `$${monto.toFixed(2)}`;
    }
}

class Docente extends Empleado {
    constructor(codigoEmpleado, nombre, edad, cargo, fechaIngreso, genero, tipoDocente) {
        super(codigoEmpleado, nombre, edad, cargo, fechaIngreso, genero);
        this.tipoDocente = tipoDocente;
    }
}

class DocentePermanente extends Docente {
    constructor(codigoEmpleado, nombre, edad, cargo, fechaIngreso, genero, sueldoBase) {
        super(codigoEmpleado, nombre, edad, cargo, fechaIngreso, genero, "Permanente");
        this.sueldoBase = sueldoBase;
    }

    calcularSalario() {
        return this.sueldoBase;
    }
}

class DocenteServicios extends Docente {
    constructor(codigoEmpleado, nombre, edad, cargo, fechaIngreso, genero, precioPorHora, cantidadHoras) {
        super(codigoEmpleado, nombre, edad, cargo, fechaIngreso, genero, "Servicios Profesionales");
        this.precioPorHora = precioPorHora;
        this.cantidadHoras = cantidadHoras;
    }

    calcularSalario() {
        return this.precioPorHora * this.cantidadHoras;
    }
}

class Administrativo extends Empleado {
    constructor(codigoEmpleado, nombre, edad, cargo, fechaIngreso, genero, tipoJornada) {
        super(codigoEmpleado, nombre, edad, cargo, fechaIngreso, genero);
        this.tipoJornada = tipoJornada;
    }
}

class AdministrativoTiempoCompleto extends Administrativo {
    constructor(codigoEmpleado, nombre, edad, cargo, fechaIngreso, genero, sueldoMensual) {
        super(codigoEmpleado, nombre, edad, cargo, fechaIngreso, genero, "Tiempo Completo");
        this.sueldoMensual = sueldoMensual;
    }

    calcularSalario() {
        return this.sueldoMensual;
    }
}

class AdministrativoMedioTiempo extends Administrativo {
    constructor(codigoEmpleado, nombre, edad, cargo, fechaIngreso, genero, sueldoPorHora, horasSemanales) {
        super(codigoEmpleado, nombre, edad, cargo, fechaIngreso, genero, "Medio Tiempo");
        this.sueldoPorHora = sueldoPorHora;
        this.horasSemanales = horasSemanales;
    }

    calcularSalario() {
        return this.sueldoPorHora * this.horasSemanales * 4;
    }
}

// Pruebas
const docenteP = new DocentePermanente("D01", "Ana Gómez", 35, "Docente", "2020-02-15", "Femenino", 1200);
const docenteS = new DocenteServicios("D02", "Carlos Pérez", 42, "Docente", "2022-06-01", "Masculino", 20, 40);
const adminTC = new AdministrativoTiempoCompleto("A01", "Luis Martínez", 29, "Coordinador", "2018-10-10", "Masculino", 900);
const adminMT = new AdministrativoMedioTiempo("A02", "María Rivas", 24, "Asistente", "2024-01-15", "Femenino", 8, 20);

console.log(docenteP.obtenerDetalles(), "- Salario:", Empleado.formatearMoneda(docenteP.calcularSalario()));
console.log(docenteS.obtenerDetalles(), "- Salario:", Empleado.formatearMoneda(docenteS.calcularSalario()));
console.log(adminTC.obtenerDetalles(), "- Salario:", Empleado.formatearMoneda(adminTC.calcularSalario()));
console.log(adminMT.obtenerDetalles(), "- Salario:", Empleado.formatearMoneda(adminMT.calcularSalario()));
