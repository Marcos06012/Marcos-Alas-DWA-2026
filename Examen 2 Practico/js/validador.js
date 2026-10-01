class ValidadorFormulario {
  constructor(formulario) {
    this.form = formulario;
  }

  establecerFechaMinima(inputFecha) {
    const hoy = new Date().toISOString().split('T')[0];
    inputFecha.min = hoy;
  }

  validarNombre(inputNombre) {
    if (inputNombre.value.trim() === '') {
      inputNombre.setCustomValidity('Inválido');
    } else {
      inputNombre.setCustomValidity('');
    }
  }

  validarFormulario() {
    const inputNombre = this.form.querySelector('#nombre');
    this.validarNombre(inputNombre);

    const esValido = this.form.checkValidity();
    this.form.classList.add('was-validated');
    return esValido;
  }

  limpiarValidacion() {
    this.form.classList.remove('was-validated');
    const inputs = this.form.querySelectorAll('.form-control, .form-select');
    inputs.forEach(input => input.setCustomValidity(''));
  }
}
