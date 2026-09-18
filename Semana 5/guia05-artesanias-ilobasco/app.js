// Ejercicio integrador evaluado — Catálogo interactivo de Artesanías Ilobasco
// Integra: try/catch/finally, JSON.stringify()/JSON.parse() con cookies,
// y eventos de mouse (mouseover/mouseout/click) y teclado (keyup).

const NOMBRE_COOKIE_CATALOGO = "catalogoIlobasco";
const NOMBRE_COOKIE_BUSQUEDA = "busquedaIlobasco";
const UMBRAL_BAJO_STOCK = 10;

const catalogoInicial = [
  { id: 1, nombre: "Sorpresa de Ilobasco", categoria: "Cerámica", precio: 4.50, stock: 25 },
  { id: 2, nombre: "Sartén de barro", categoria: "Cerámica", precio: 8.00, stock: 12 },
  { id: 3, nombre: "Hamaca de mecapal", categoria: "Textil", precio: 22.00, stock: 8 },
  { id: 4, nombre: "Cofre tallado", categoria: "Madera", precio: 15.75, stock: 5 },
];

let catalogo = [];
let carritoCantidad = 0;
let carritoTotal = 0;

const elCatalogo = document.getElementById("catalogo");
const elAviso = document.getElementById("aviso");
const elSinResultados = document.getElementById("sinResultados");
const elBusqueda = document.getElementById("busqueda");
const elCarritoCantidad = document.getElementById("carritoCantidad");
const elCarritoTotal = document.getElementById("carritoTotal");

// ---------- Utilidades de cookies ----------

function obtenerCookie(nombre) {
  const partes = document.cookie.split("; ");
  for (const parte of partes) {
    const [clave, valor] = parte.split("=");
    if (clave === nombre) {
      return decodeURIComponent(valor);
    }
  }
  return null;
}

function guardarCookie(nombre, valor, maxAgeSegundos) {
  document.cookie = `${nombre}=${encodeURIComponent(valor)}; max-age=${maxAgeSegundos}; path=/`;
}

// ---------- Persistencia del catálogo con JSON + try/catch/finally ----------

function leerCatalogoGuardado() {
  try {
    const crudo = obtenerCookie(NOMBRE_COOKIE_CATALOGO);
    if (!crudo) {
      throw new Error("No hay catálogo guardado en cookies.");
    }
    const datos = JSON.parse(crudo);
    if (!Array.isArray(datos) || datos.length === 0) {
      throw new Error("El contenido de la cookie está corrupto.");
    }
    return datos;
  } catch (error) {
    mostrarAviso("No se encontró un catálogo guardado, se cargó el catálogo por defecto.");
    console.warn(`Aviso al leer catálogo -> ${error.message}`);
    // Copia independiente del catálogo por defecto para no mutar la constante original.
    return catalogoInicial.map((producto) => ({ ...producto }));
  } finally {
    console.log("Lectura del catálogo finalizada.");
  }
}

function guardarCatalogoActual() {
  try {
    guardarCookie(NOMBRE_COOKIE_CATALOGO, JSON.stringify(catalogo), 60 * 60);
  } catch (error) {
    console.error(`No se pudo guardar el catálogo -> ${error.message}`);
  }
}

// ---------- Carrito y control de stock ----------

function agregarAlCarrito(producto) {
  try {
    if (producto.stock <= 0) {
      throw new Error(`"${producto.nombre}" no tiene existencias disponibles.`);
    }

    producto.stock -= 1;
    carritoCantidad += 1;
    carritoTotal += producto.precio;

    actualizarResumen();
    guardarCatalogoActual();
    renderizarCatalogo(elBusqueda.value);
  } catch (error) {
    mostrarAviso(error.message);
  } finally {
    // El contador nunca queda negativo porque solo se modifica dentro del try,
    // después de comprobar que hay existencias.
    console.log("Intento de agregar al carrito finalizado.");
  }
}

function actualizarResumen() {
  elCarritoCantidad.textContent = carritoCantidad;
  elCarritoTotal.textContent = carritoTotal.toFixed(2);
}

// ---------- Aviso en pantalla ----------

let temporizadorAviso = null;

function mostrarAviso(mensaje) {
  elAviso.textContent = mensaje;
  elAviso.hidden = false;
  clearTimeout(temporizadorAviso);
  temporizadorAviso = setTimeout(() => {
    elAviso.hidden = true;
  }, 4000);
}

// ---------- Renderizado dinámico del catálogo (DOM, sin HTML fijo) ----------

function renderizarCatalogo(filtro = "") {
  elCatalogo.innerHTML = "";

  const texto = filtro.trim().toLowerCase();
  const productosVisibles = catalogo.filter((producto) =>
    producto.nombre.toLowerCase().includes(texto)
  );

  elSinResultados.hidden = productosVisibles.length !== 0;

  for (const producto of productosVisibles) {
    elCatalogo.appendChild(crearTarjeta(producto));
  }
}

function crearTarjeta(producto) {
  const tarjeta = document.createElement("div");
  tarjeta.className = "tarjeta";
  if (producto.stock <= 0) tarjeta.classList.add("sin-stock");
  if (producto.stock > 0 && producto.stock < UMBRAL_BAJO_STOCK) tarjeta.classList.add("bajo-stock");

  const categoria = document.createElement("span");
  categoria.className = "categoria";
  categoria.textContent = producto.categoria;

  const titulo = document.createElement("h3");
  titulo.textContent = producto.nombre;

  const precio = document.createElement("div");
  precio.className = "precio";
  precio.textContent = `$${producto.precio.toFixed(2)}`;

  const stock = document.createElement("div");
  stock.className = "stock";
  stock.textContent =
    producto.stock <= 0
      ? "Agotado"
      : producto.stock < UMBRAL_BAJO_STOCK
      ? `¡Solo quedan ${producto.stock}!`
      : `Disponibles: ${producto.stock}`;

  tarjeta.append(categoria, titulo, precio, stock);

  // Eventos de mouse
  tarjeta.onmouseover = () => tarjeta.classList.add("resaltada");
  tarjeta.onmouseout = () => tarjeta.classList.remove("resaltada");
  tarjeta.onclick = () => agregarAlCarrito(producto);

  return tarjeta;
}

// ---------- Búsqueda con eventos de teclado + cookie de preferencia ----------

elBusqueda.onkeyup = () => {
  const termino = elBusqueda.value;
  renderizarCatalogo(termino);
  guardarCookie(NOMBRE_COOKIE_BUSQUEDA, termino, 60 * 60); // al menos 1 hora
};

// ---------- Inicialización ----------

function iniciar() {
  catalogo = leerCatalogoGuardado();

  const busquedaGuardada = obtenerCookie(NOMBRE_COOKIE_BUSQUEDA) || "";
  elBusqueda.value = busquedaGuardada;

  actualizarResumen();
  renderizarCatalogo(busquedaGuardada);
}

iniciar();
