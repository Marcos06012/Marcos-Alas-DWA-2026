const servicio = new ServicioAutenticacion([
  new Usuario('admin', 'TechStore2026', 'Administrador'),
  new Usuario('vendedor01', 'Ventas2026', 'Vendedor')
]);

const formLogin = document.getElementById('formLogin');
const campoClave = document.getElementById('clave');
const btnVer = document.getElementById('btnVer');
const recordarSwitch = document.getElementById('recordar');
const usuarioInput = document.getElementById('usuario');

// Precargar usuario de la cookie si existe (Reto autónomo: Recordarme)
if (document.cookie) {
  const cookies = document.cookie.split('; ').reduce((prev, current) => {
    const [name, value] = current.split('=');
    if (name && value) prev[name.trim()] = value.trim();
    return prev;
  }, {});

  if (cookies.rememberedUser) {
    usuarioInput.value = decodeURIComponent(cookies.rememberedUser);
    if (recordarSwitch) recordarSwitch.checked = true;
  }
}

// Mostrar / ocultar contraseña
btnVer.addEventListener('click', () => {
  const oculto = campoClave.type === 'password';
  campoClave.type = oculto ? 'text' : 'password';
  btnVer.textContent = oculto ? 'Ocultar' : 'Ver';
});

formLogin.addEventListener('submit', (evento) => {
  evento.preventDefault();
  formLogin.classList.add('was-validated');
  if (!formLogin.checkValidity()) return; // campos vacíos o con formato inválido

  const nombre = usuarioInput.value.trim();
  try {
    const usuario = servicio.autenticar(nombre, campoClave.value);
    if (usuario) {
      mostrarMensaje(`Bienvenido, ${usuario.nombre} (${usuario.rol}).`, 'success');
      // Guardar cookie si Recordarme está activo (Reto autónomo)
      if (recordarSwitch && recordarSwitch.checked) {
        document.cookie = `rememberedUser=${encodeURIComponent(nombre)}; max-age=604800; path=/`;
      } else {
        document.cookie = 'rememberedUser=; max-age=0; path=/';
      }
    } else if (servicio.bloqueado) {
      bloquearFormulario();
    } else {
      mostrarMensaje(`Usuario o contraseña incorrectos. Intentos restantes: ${servicio.intentosRestantes}.`, 'danger');
    }
  } catch (error) {
    bloquearFormulario();
  }
});

function bloquearFormulario() {
  document.getElementById('campos').disabled = true; // fieldset disabled
  mostrarMensaje('Acceso bloqueado por demasiados intentos fallidos. Contacte al administrador.', 'warning');
}

function mostrarMensaje(texto, tipo) {
  const caja = document.getElementById('mensaje');
  caja.className = `alert alert-${tipo} mt-3`;
  caja.textContent = texto;
}
