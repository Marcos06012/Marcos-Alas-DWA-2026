// Ejercicio preparatorio 2: Respaldo del catálogo con JSON.stringify() y JSON.parse()

const catalogo = [
  { id: 1, nombre: "Sorpresa de Ilobasco", categoria: "Cerámica", precio: 4.50, stock: 25 },
  { id: 2, nombre: "Sartén de barro", categoria: "Cerámica", precio: 8.00, stock: 12 },
  { id: 3, nombre: "Hamaca de mecapal", categoria: "Textil", precio: 22.00, stock: 8 },
  { id: 4, nombre: "Cofre tallado", categoria: "Madera", precio: 15.75, stock: 5 },
];

// 1. Respaldo: convertir el arreglo a un texto JSON legible (simula guardarlo en archivo/cookie).
const catalogoJSON = JSON.stringify(catalogo, null, 2);
console.log("Catálogo respaldado como JSON:");
console.log(catalogoJSON);

// 2. Reconstrucción: volver a convertir el texto JSON en un arreglo de objetos usable.
const catalogoReconstruido = JSON.parse(catalogoJSON);
const esIgual = JSON.stringify(catalogoReconstruido) === JSON.stringify(catalogo);
console.log(`\n¿El catálogo reconstruido es igual al original? ${esIgual}`);

// 3. Valor total del inventario, protegido con try/catch por si algún producto
// llegara sin la propiedad precio o stock.
try {
  const valorTotal = catalogoReconstruido.reduce((total, producto) => {
    if (typeof producto.precio !== "number" || typeof producto.stock !== "number") {
      throw new Error(`Producto incompleto: ${JSON.stringify(producto)}`);
    }
    return total + producto.precio * producto.stock;
  }, 0);

  console.log(`Valor total del inventario: $${valorTotal.toFixed(2)}`);
} catch (error) {
  console.error(`Error al calcular el inventario -> ${error.message}`);
}
