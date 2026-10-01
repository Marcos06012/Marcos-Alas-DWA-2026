const formulario = document.getElementById('formCliente');
const validador = new ValidadorFormulario(formulario);
const registro = new RegistroClientes();

// Cargar registros persistidos (Reto autónomo)
registro.cargar();
registro.renderizar(document.getElementById('tablaClientes'));
document.getElementById('total').textContent = registro.total;

// Modo oscuro (Reto autónomo)
const modoOscuroSwitch = document.getElementById('modoOscuro');
if (modoOscuroSwitch) {
  modoOscuroSwitch.addEventListener('change', () => {
    document.documentElement.setAttribute('data-bs-theme', modoOscuroSwitch.checked ? 'dark' : 'light');
  });
}

// Revalida en tiempo real mientras el usuario escribe
formulario.addEventListener('input', () => validador.revisarEspacios());

formulario.addEventListener('submit', (evento) => {
  evento.preventDefault(); // nunca recargar la página
  if (!validador.esValido()) {
    mostrarAlerta('Revise los campos marcados en rojo.', 'danger');
    return; // no se "envían" los datos
  }

  const cliente = new Cliente(
    document.getElementById('nombres').value.trim(),
    document.getElementById('apellidos').value.trim(),
    document.getElementById('pais').value,
    document.getElementById('correo').value.trim(),
    formulario.querySelector('input[name="tipo"]:checked').value
  );

  registro.agregar(cliente);
  registro.renderizar(document.getElementById('tablaClientes'));
  document.getElementById('total').textContent = registro.total;
  mostrarAlerta(`Cliente ${cliente.nombreCompleto} registrado correctamente.`, 'success');
  formulario.reset();
});

formulario.addEventListener('reset', () => validador.reiniciar());

function mostrarAlerta(mensaje, tipo) {
  const contenedor = document.getElementById('alerta');
  contenedor.innerHTML = '';
  const alerta = document.createElement('div');
  alerta.className = `alert alert-${tipo} alert-dismissible fade show`;
  alerta.setAttribute('role', 'alert');
  alerta.textContent = mensaje;
  const cerrar = document.createElement('button');
  cerrar.type = 'button';
  cerrar.className = 'btn-close';
  cerrar.setAttribute('data-bs-dismiss', 'alert');
  cerrar.setAttribute('aria-label', 'Cerrar');
  alerta.appendChild(cerrar);
  contenedor.appendChild(alerta);
}
