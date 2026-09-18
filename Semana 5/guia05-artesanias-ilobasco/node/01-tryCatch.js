// Ejercicio preparatorio 1: Validación de precios con try/catch/finally

const preciosIngresados = ["4.50", "ocho", "-3", "22.00", "0"];

function validarPrecio(precioTexto) {
  const precio = Number(precioTexto);

  // Un precio inválido (no numérico o <= 0) se señala lanzando un error
  // personalizado en vez de dejar que el programa continúe con un valor incorrecto.
  if (Number.isNaN(precio) || precio <= 0) {
    throw new Error(`Precio inválido: "${precioTexto}"`);
  }

  return precio;
}

for (const texto of preciosIngresados) {
  try {
    const precio = validarPrecio(texto);
    console.log(`Precio válido: $${precio.toFixed(2)}`);
  } catch (error) {
    // catch evita que un precio inválido detenga el resto del bucle.
    console.error(`Error -> ${error.message}`);
  } finally {
    // finally se ejecuta siempre, haya habido error o no.
    console.log("Validación finalizada.");
  }
}
