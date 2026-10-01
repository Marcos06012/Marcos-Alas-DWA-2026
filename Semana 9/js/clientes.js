class Cliente {
  constructor(nombres, apellidos, pais, correo, tipo) {
    this.nombres = nombres;
    this.apellidos = apellidos;
    this.pais = pais;
    this.correo = correo;
    this.tipo = tipo;
  }
  get nombreCompleto() {
    return `${this.nombres} ${this.apellidos}`;
  }
}
class ValidadorFormulario {
  constructor(formulario) {
    this.formulario = formulario;
  }

  revisarEspacios() {
    this.formulario.querySelectorAll('input[type="text"][required]').forEach(campo => {
      campo.setCustomValidity(campo.value.trim() === '' ? 'Campo vacío' : '');
    });
  }

  esValido() {
    this.revisarEspacios();
    this.formulario.classList.add('was-validated');
    return this.formulario.checkValidity();
  }

  reiniciar() {
    this.formulario.classList.remove('was-validated');
  }
}

// Almacena los clientes y los dibuja en la tabla
class RegistroClientes {
  #clientes = [];

  agregar(cliente) {
    this.#clientes.push(cliente);
    this.guardar();
  }

  get total() {
    return this.#clientes.length;
  }

  guardar() {
    localStorage.setItem('clientes', JSON.stringify(this.#clientes));
  }

  cargar() {
    const datos = localStorage.getItem('clientes');
    if (datos) {
      try {
        const raw = JSON.parse(datos);
        this.#clientes = raw.map(c => new Cliente(c.nombres, c.apellidos, c.pais, c.correo, c.tipo));
      } catch (e) {
        this.#clientes = [];
      }
    }
  }

  renderizar(tbody) {
    tbody.innerHTML = '';
    this.#clientes.forEach((c, i) => {
      const fila = document.createElement('tr');
      [i + 1, c.nombreCompleto, c.pais, c.correo, c.tipo].forEach(valor => {
        const celda = document.createElement('td');
        celda.textContent = valor; // textContent evita inyección de HTML
        fila.appendChild(celda);
      });
      tbody.appendChild(fila);
    });
  }
}
