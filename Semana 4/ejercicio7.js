// Ejercicio 7: Gestión de Libros

// 1. Definición de la clase Libro
class Libro {
    constructor(titulo, autor, isbn, anioPublicacion, genero) {
        this.titulo = titulo;
        this.autor = autor;
        this.isbn = isbn;
        this.anioPublicacion = anioPublicacion;
        this.genero = genero;
    }

    // Método para devolver los detalles formateados del libro
    mostrarDetalles() {
        return `Título: ${this.titulo}, Autor: ${this.autor}, ISBN: ${this.isbn}, Año de Publicación: ${this.anioPublicacion}, Género: ${this.genero}`;
    }
}

// 2. Lógica para interactuar con la Interfaz de Usuario
document.addEventListener("DOMContentLoaded", () => {
    const formLibro = document.getElementById("formLibro");
    const txtTitulo = document.getElementById("txtTitulo");
    const txtAutor = document.getElementById("txtAutor");
    const txtIsbn = document.getElementById("txtIsbn");
    const txtAnio = document.getElementById("txtAnio");
    const txtGenero = document.getElementById("txtGenero");
    
    const divAlerta = document.getElementById("divAlerta");
    const listaLibros = document.getElementById("listaLibros");
    const itemVacio = document.getElementById("itemVacio");

    // Expresión regular para validar ISBN de 10 o 13 dígitos numéricos
    // (Ejercicio 5: ^\d{10}$ para 10 dígitos o ^\d{13}$ para 13 dígitos)
    const regexIsbn = /^(?:\d{10}|\d{13})$/;

    formLibro.addEventListener("submit", (e) => {
        // Evitar que la página se recargue al enviar el formulario
        e.preventDefault();

        // Obtener y limpiar los valores de los campos
        const titulo = txtTitulo.value.trim();
        const autor = txtAutor.value.trim();
        const isbn = txtIsbn.value.trim();
        const anioPublicacion = txtAnio.value.trim();
        const genero = txtGenero.value.trim();

        // Validar que todos los campos tengan información
        if (!titulo || !autor || !isbn || !anioPublicacion || !genero) {
            alert("Por favor, complete todos los campos.");
            return;
        }

        // Validar el ISBN con la expresión regular
        if (!regexIsbn.test(isbn)) {
            // Mostrar la alerta de Bootstrap indicando el error
            divAlerta.style.display = "block";
            return;
        }

        // Si el ISBN es válido, ocultamos la alerta de error
        divAlerta.style.display = "none";

        // Crear una nueva instancia de la clase Libro
        const nuevoLibro = new Libro(titulo, autor, isbn, Number(anioPublicacion), genero);

        // Remover el mensaje de "No hay libros registrados" si existe
        if (itemVacio) {
            itemVacio.style.display = "none";
        }

        // Crear dinámicamente un nuevo elemento en la lista (<li>)
        const nuevoElemento = document.createElement("li");
        nuevoElemento.className = "list-group-item py-3";

        // Obtener los detalles formateados mediante el método de la clase
        const detallesTexto = nuevoLibro.mostrarDetalles();
        const nodoTexto = document.createTextNode(detallesTexto);

        // Agregar el texto al elemento li, y el li a la lista ul
        nuevoElemento.appendChild(nodoTexto);
        listaLibros.appendChild(nuevoElemento);

        // Limpiar todos los campos del formulario
        formLibro.reset();
    });
});
