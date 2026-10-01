const TOURS = [
  new Tour("Ruta del Café", "Juayúa", 25.00),
  new Tour("Artesanías y Murales", "Concepción de Ataco", 18.00),
  new Tour("Miradores y Laguna Verde", "Apaneca", 30.00)
];

const gestor = new GestorReservas();
const formReserva = document.getElementById("formularioReserva");
const validador = new ValidadorFormulario(formReserva);

const inputNombre = document.getElementById("nombre");
const inputCorreo = document.getElementById("correo");
const inputTelefono = document.getElementById("telefono");
const selectTour = document.getElementById("tour");
const inputFecha = document.getElementById("fecha");
const inputPersonas = document.getElementById("personas");
const checkEstudiante = document.getElementById("estudiante");
const checkTerminos = document.getElementById("terminos");
const btnLimpiar = document.getElementById("btnLimpiar");

const resumenSubtotal = document.getElementById("resumenSubtotal");
const resumenDescuento = document.getElementById("resumenDescuento");
const resumenIVA = document.getElementById("resumenIVA");
const resumenTotal = document.getElementById("resumenTotal");

const contenedorAlerta = document.getElementById("contenedorAlerta");
const tablaReservasBody = document.getElementById("tablaReservasBody");
const badgeCantidad = document.getElementById("badgeCantidad");
const montoTotal = document.getElementById("montoTotal");
const filtroTour = document.getElementById("filtroTour");

validador.establecerFechaMinima(inputFecha);

function actualizarResumen() {
  const tourSeleccionado = TOURS.find(t => t.nombre === selectTour.value);
  const cantPersonas = parseInt(inputPersonas.value) || 0;
  const esEstudiante = checkEstudiante.checked;

  if (tourSeleccionado && cantPersonas > 0) {
    const subtotal = tourSeleccionado.precioPorPersona * cantPersonas;
    const descuento = esEstudiante ? descuento10(subtotal) : 0;
    const base = subtotal - descuento;
    const iva = impuesto13(base);
    const total = base + iva;

    resumenSubtotal.textContent = `$${subtotal.toFixed(2)}`;
    resumenDescuento.textContent = `-$${descuento.toFixed(2)}`;
    resumenIVA.textContent = `$${iva.toFixed(2)}`;
    resumenTotal.textContent = `$${total.toFixed(2)}`;
  } else {
    resumenSubtotal.textContent = "$0.00";
    resumenDescuento.textContent = "-$0.00";
    resumenIVA.textContent = "$0.00";
    resumenTotal.textContent = "$0.00";
  }
}

function mostrarAlerta(mensaje, tipo = "danger") {
  contenedorAlerta.innerHTML = `
    <div class="alert alert-${tipo} alert-dismissible fade show" role="alert">
      ${mensaje}
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  `;
}

function renderizarTabla() {
  tablaReservasBody.innerHTML = "";
  const filtro = filtroTour.value;

  const reservasFiltradas = gestor.reservas.filter(reserva => {
    if (filtro === "Todos") return true;
    return reserva.tour.nombre === filtro;
  });

  if (reservasFiltradas.length === 0) {
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    td.colSpan = 7;
    td.className = "text-center text-light py-3";
    td.textContent = "No hay reservas para mostrar.";
    tr.appendChild(td);
    tablaReservasBody.appendChild(tr);
  } else {
    reservasFiltradas.forEach((reserva, index) => {
      const tr = document.createElement("tr");

      if (reserva.personas >= 5) {
        tr.classList.add("table-warning");
      }

      const tdNum = document.createElement("td");
      tdNum.textContent = index + 1;

      const tdCliente = document.createElement("td");
      tdCliente.textContent = reserva.cliente;

      const tdTour = document.createElement("td");
      tdTour.textContent = reserva.tour.nombre;

      const tdFecha = document.createElement("td");
      tdFecha.textContent = reserva.fecha;

      const tdPersonas = document.createElement("td");
      tdPersonas.textContent = reserva.personas;

      const tdTotal = document.createElement("td");
      tdTotal.textContent = `$${reserva.calcularTotal().toFixed(2)}`;

      const tdAccion = document.createElement("td");
      const btnEliminar = document.createElement("button");
      btnEliminar.className = "btn btn-sm btn-outline-danger";
      btnEliminar.textContent = "Eliminar";

      btnEliminar.addEventListener("click", () => {
        gestor.eliminar(reserva.id);
        guardarEnStorage();
        renderizarTabla();
        mostrarAlerta("Reserva eliminada con éxito.", "success");
      });

      tdAccion.appendChild(btnEliminar);

      tr.appendChild(tdNum);
      tr.appendChild(tdCliente);
      tr.appendChild(tdTour);
      tr.appendChild(tdFecha);
      tr.appendChild(tdPersonas);
      tr.appendChild(tdTotal);
      tr.appendChild(tdAccion);

      tablaReservasBody.appendChild(tr);
    });
  }

  badgeCantidad.textContent = gestor.cantidad;
  montoTotal.textContent = `$${gestor.totalGeneral().toFixed(2)}`;
}

function guardarEnStorage() {
  localStorage.setItem("reservas", JSON.stringify(gestor.reservas));
}

function cargarDeStorage() {
  try {
    const datos = localStorage.getItem("reservas");
    if (datos) {
      const lista = JSON.parse(datos);
      lista.forEach(item => {
        const tourObj = TOURS.find(t => t.nombre === item.tour.nombre) || new Tour(item.tour.nombre, item.tour.destino, item.tour.precioPorPersona);
        const reserva = new Reserva(item.cliente, tourObj, item.personas, item.esEstudiante, item.fecha, item.id);
        gestor.agregar(reserva);
      });
    }
  } catch (error) {
    console.error("Error al cargar localStorage", error);
  }
}

selectTour.addEventListener("change", actualizarResumen);
inputPersonas.addEventListener("input", actualizarResumen);
checkEstudiante.addEventListener("change", actualizarResumen);
filtroTour.addEventListener("change", renderizarTabla);

formReserva.addEventListener("submit", (e) => {
  e.preventDefault();

  const esValido = validador.validarFormulario();

  if (!esValido) {
    mostrarAlerta("Revise los campos marcados en rojo.", "danger");
    return;
  }

  const tourObj = TOURS.find(t => t.nombre === selectTour.value);
  const nuevaReserva = new Reserva(
    inputNombre.value.trim(),
    tourObj,
    inputPersonas.value,
    checkEstudiante.checked,
    inputFecha.value
  );

  gestor.agregar(nuevaReserva);
  guardarEnStorage();
  renderizarTabla();
  mostrarAlerta("Reserva registrada con éxito.", "success");

  formReserva.reset();
  validador.limpiarValidacion();
  actualizarResumen();
});

btnLimpiar.addEventListener("click", () => {
  formReserva.reset();
  validador.limpiarValidacion();
  contenedorAlerta.innerHTML = "";
  actualizarResumen();
});

cargarDeStorage();
renderizarTabla();
