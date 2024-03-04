class Producto {
    constructor(nombre, talle, color) {
        this.nombre = nombre;
        this.talle = talle;
        this.color = color;
    }


}

class ListaProducto {
    constructor(nombreUsuario, nombreLista) {
        this.nombreUsuario = nombreUsuario;
        this.nombreLista = nombreLista;
        this.Producto = [];
    }

    mostrarMenu() {
        let opcionMenu;
        do {
            opcionMenu = prompt("¡Hola " + this.nombreUsuario + "! Lista de Producto: " + this.nombreLista +
                "\n\n🌟 Menú Principal - Elije una opción del 1 al 5 🌟\n\n1️⃣ Agregar Producto ➕\n2️⃣ Ver Producto 👁️\n3️⃣ Eliminar Producto ➖\n4️⃣ Buscar Producto usando filtros 🔍\n5️⃣ Salir🚪");
            switch (opcionMenu) {
                case "1":
                    this.agregarProducto();
                    break;
                case "2":
                    this.verProducto();
                    break;
                case "3":
                    this.eliminarProducto();
                    break;
                case "4":
                    this.aplicarFiltrosAvanzados();
                    break;
                case "5":
                    alert("Muchas gracias por usar el simulador de gestión de Producto ¡Hasta luego! 👋");
                    break;
                default:
                    alert("Opción no válida. Por favor, selecciona una opción válida. 🤔");
            }
        } while (opcionMenu !== "5");
    }

    agregarProducto() {
        let agregarMasProducto = true;

        while (agregarMasProducto) {
            const numeroProducto = parseInt(prompt("Ingrese la cantidad de Producto que desea agregar:"));

            if (!isNaN(numeroProducto) && numeroProducto > 0) {
                for (let i = 0; i < numeroProducto; i++) {
                    const nombreProducto = prompt("Ingrese el nombre del Producto:");
                    const TalleProducto = parseFloat(prompt("Ingrese el talle del Producto:"));
                    const ColorProducto = prompt("Ingrese el color del Producto:");

                    if (nombreProducto && ColorProducto && !isNaN(TalleProducto)) {
                        const nuevoProducto = new Producto (nombreProducto, TalleProducto, ColorProducto);
                        this.Producto.push(nuevoProducto);
                    } else {
                        alert("Por favor, ingrese información válida. 🚫");
                        i--;
                    }
                }
            } else {
                alert("Por favor, ingrese un número válido mayor que cero. 🚫");
            }
            agregarMasProducto = confirm("¿Desea agregar más Producto? 🤔");
        }
    }
    verProducto() {
        if (this.Producto.length > 0) {
            const cadenaListaProducto = this.Producto.map(Producto => Producto.nombre + ": " + " Color: " + Producto.color +" Talle: "+ Producto.talle).join("\n");
            console.log(cadenaListaProducto);
            alert("Lista de Producto de " + this.nombreLista + ":\n" + cadenaListaProducto);
        } else {
            alert("No hay Producto definidas para la lista de Producto: " + this.nombreLista);
        }
    }
    eliminarProducto() {
        if (this.Producto.length > 0) {
            alert("A continuación se muestran los Producto existentes para " + this.nombreLista + ":\n\n" + this.Producto.map(Producto => Producto.nombre + ": " + " Color: " + Producto.color +" Talle: "+ Producto.talle +" " ) ) ;

            const ProductoEliminar = prompt("Ingrese el nombre del Producto que desea eliminar:");

            const ProductoEliminado = this.Producto.filter(Producto => Producto.nombre.toLowerCase() === ProductoEliminar.trim().toLowerCase());

            if (ProductoEliminado.length > 0) {
                this.Producto = this.Producto.filter(Producto => Producto.nombre.toLowerCase() !== ProductoEliminar.trim().toLowerCase());
                alert("Producto eliminado con éxito. 👍");
            } else {
                alert("El Producto no existe en la lista. 🚫");
            }
        } else {
            alert("No hay Producto para eliminar en la lista: " + this.nombreLista);
        }
    }



    aplicarFiltrosAvanzados() {
        let opcionFiltro;
        do {
            opcionFiltro = prompt("🔍 Filtros Avanzados\n\n1️⃣ Filtrar por Talle\n2️⃣ Filtrar por Color\n3️⃣ Filtrar por palabra clave\n4️⃣ Volver al menú principal\n\nPor favor, elige una opción del 1 al 4");

            switch (opcionFiltro) {
                case "1":
                    this.filtrarPorTalle();
                    break;
                case "2":
                    this.filtrarPorColor();
                    break;
                case "3":
                    this.filtrarPorPalabraClave();
                    break;
                case "4":
                    alert("Volviendo al menú principal. 🔙");
                    break;
                default:
                    alert("Opción no válida. Por favor, selecciona una opción válida. 🤔");
            }
        } while (opcionFiltro !== "4");
    }

    filtrarPorColor() {
        const ColorClave = prompt("Ingrese Que color Busca:");

        if (ColorClave) {
            const ProductoFiltrado = this.Producto.filter(Producto => Producto.color.toLowerCase().includes(ColorClave.toLowerCase()));

            this.mostrarProductoFiltrado(ProductoFiltrado);
        } else {
            alert("Por favor, ingrese una palabra clave válida. 🚫");
        }
    }

    filtrarPorTalle() {

        const TalleClave = prompt("Ingrese Que Talle Busca:");

        if (TalleClave) {
            const ProductoFiltrado = this.Producto.filter(Producto=> Producto.talle == TalleClave );
            this.mostrarProductoFiltrado(ProductoFiltrado);
        } else {
            alert("Por favor, ingrese una palabra clave válida. 🚫");
        }
    }

    filtrarPorPalabraClave() {
        const palabraClave = prompt("Ingrese la palabra clave para filtrar:");

        if (palabraClave) {
            const ProductoFiltrado = this.Producto.filter(Producto => Producto.nombre.toLowerCase().includes(palabraClave.toLowerCase()));

            this.mostrarProductoFiltrado(ProductoFiltrado);
        } else {
            alert("Por favor, ingrese una palabra clave válida. 🚫");
        }
    }

    mostrarProductoFiltrado(ProductoFiltrado) {
        if (ProductoFiltrado.length > 0) {
            const cadenaProductoFiltrado = ProductoFiltrado.map(Producto => Producto.nombre + ": " + " Color: " + Producto.color +" Talle: "+ Producto.talle).join("\n");
            alert("Producto Filtrados:\n" + cadenaProductoFiltrado);
        } else {
            alert("No hay Producto que coincidan con los criterios de filtrado. 🚫");
        }
}
}

// Comienzo

let listaProductoApp;

function iniciarGestorProducto() {
    nombreUsuario = prompt("¡Hola! 😊 Ingresa tu nombre:");

    nombreLista = prompt("Ingresa un nombre para tu lista de Producto 📋:");

    if (nombreUsuario && nombreLista) {
        listaProductoApp = new ListaProducto(nombreUsuario, nombreLista);
        listaProductoApp.mostrarMenu();
    } else {
        alert("Por favor, ingresa información válida. 🚫");
    }
}


