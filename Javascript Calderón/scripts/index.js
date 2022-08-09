
let productosDiv = document.getElementById("productos")

let carrito = JSON.parse(localStorage.getItem("carrito")) || []

// MOSTRAR PRODUCTOS
function mostrarProductos(array) {
    array.forEach(producto => {
        productosDiv.innerHTML += `
        <div class="producto">
            <img src=${producto.img}>
            <p>${producto.nombre}</p>
            <p>$${producto.precio}</p>
            <button class="agregar" id="${producto.id}">Agregar al carrito</button>
        </div>`
    });
}

mostrarProductos(productos)

//AGREGAR AL CARRITO 
let botonAgregar = document.getElementsByClassName("agregar")
const divCarrito = document.querySelector("#carrito")
const carritoSection = document.querySelector("#carritoSection")
const vaciar = document.getElementById("vaciar")

function agregarAlCarrito(e) {
    const boton = e.target;
    const idBoton = boton.getAttribute("id");
    let productoSeleccionado = productos.find(producto => producto.id === idBoton)
    carrito.push(productoSeleccionado)
    console.log(carrito)

    localStorage.setItem("carrito", JSON.stringify(carrito));

    alert("Agregaste " + productoSeleccionado.nombre + " al carrito")
}

for (boton of botonAgregar) {
    boton.addEventListener("click", agregarAlCarrito)
}