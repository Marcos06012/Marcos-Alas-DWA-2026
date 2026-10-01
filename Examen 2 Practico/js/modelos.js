class Tour {
  constructor(nombre, destino, precioPorPersona) {
    this.nombre = nombre;
    this.destino = destino;
    this.precioPorPersona = precioPorPersona;
  }
}

class Reserva {
  #personas;

  constructor(cliente, tour, personas, esEstudiante = false, fecha = '', id = null) {
    this.id = id || Date.now();
    this.cliente = cliente;
    this.tour = tour;
    this.#personas = parseInt(personas);
    this.esEstudiante = esEstudiante;
    this.fecha = fecha;
  }

  get personas() {
    return this.#personas;
  }

  calcularTotal() {
    const subtotal = this.tour.precioPorPersona * this.#personas;
    const descuento = this.esEstudiante ? descuento10(subtotal) : 0;
    const base = subtotal - descuento;
    const iva = impuesto13(base);
    const total = base + iva;
    return Math.round(total * 100) / 100;
  }
}
