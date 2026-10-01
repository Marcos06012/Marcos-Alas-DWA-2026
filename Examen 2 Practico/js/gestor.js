class GestorReservas {
  constructor() {
    this.reservas = [];
  }

  get cantidad() {
    return this.reservas.length;
  }

  agregar(reserva) {
    this.reservas.push(reserva);
  }

  eliminar(id) {
    this.reservas = this.reservas.filter(reserva => reserva.id !== id);
  }

  totalGeneral() {
    return this.reservas.reduce((total, reserva) => total + reserva.calcularTotal(), 0);
  }
}
