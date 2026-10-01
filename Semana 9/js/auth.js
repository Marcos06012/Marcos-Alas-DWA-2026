// NOTA DIDÁCTICA: en un sistema real las credenciales se verifican en el servidor
// y las contraseñas se guardan con hash. Aquí se simula solo para practicar POO.
class Usuario {
  #clave;
  constructor(nombre, clave, rol) {
    this.nombre = nombre;
    this.#clave = clave;
    this.rol = rol;
  }
  verificarClave(clave) {
    return this.#clave === clave;
  }
}

class ServicioAutenticacion {
  static MAX_INTENTOS = 3;
  #usuarios;
  #intentosFallidos = 0;

  constructor(usuarios) {
    this.#usuarios = usuarios;
  }

  get bloqueado() {
    return this.#intentosFallidos >= ServicioAutenticacion.MAX_INTENTOS;
  }

  get intentosRestantes() {
    return ServicioAutenticacion.MAX_INTENTOS - this.#intentosFallidos;
  }

  autenticar(nombre, clave) {
    if (this.bloqueado) {
      throw new Error('Acceso bloqueado por demasiados intentos fallidos.');
    }
    const usuario = this.#usuarios.find(u => u.nombre === nombre);
    if (usuario && usuario.verificarClave(clave)) {
      this.#intentosFallidos = 0;
      return usuario;
    }
    this.#intentosFallidos++;
    return null;
  }
}
