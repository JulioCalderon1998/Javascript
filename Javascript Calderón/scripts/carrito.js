let carrito = JSON.parse(localStorage.getItem("carrito")) || []

const detalle = document.querySelector("#detalle")
const divCarrito = document.querySelector("#carrito")
const finCompra = document.querySelector("#finCompra")


function productosCarrito() {
   
    carrito.forEach(producto => {
        divCarrito.innerHTML += `
        <li class="detalleProd">
        <img src=".${producto.img}"/>
        <p>${producto.nombre}</p>
        <b><p>$${producto.precio}</p></b>
        <button class="botonBorrar">X</button>
        </li>`

    let botonBorrar = document.getElementsByClassName("botonBorrar")

    for (botonX of botonBorrar) {
        botonX.addEventListener("click", eliminarProducto)
    }
    

    // vaciar carrito
    vaciar.addEventListener("click", () => {
        swal({
            title: "Deseas vaciar tu carrito?",
            text: "Si lo vacias deberas ir a la tienda nuevamente!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                carrito = []
                localStorage.clear()
                divCarrito.innerHTML = ""
                contador = false
            }
          });
        
    })
    })
    
    let total = carrito.reduce((acc, curr) => acc + curr.precio, 0)
    let totalCompra = document.createElement("p")
    totalCompra.setAttribute("class", "total")
    totalCompra.innerText = ("Total: $" + total)
    divCarrito.append(totalCompra)

}

carrito.length ? productosCarrito() : (detalle.innerHTML=`<h3>El carrito está vacío</h3>`)


//FORMULARIO
let nombre = document.querySelector("#nombre")
let mail = document.querySelector("#mail")
let telefono = document.querySelector("#telefono")
let direccion = document.querySelector("#direccion")
let divfinForm= document.querySelector("#finForm")
let submit = document.querySelector("#submit")
let formulario = document.querySelector("#form")

function terminarCompra() {

    if(carrito.length == 0){
        swal({
            title: "ERROR!",
            text: "No se puede comprar con el carrito vacio!",
            icon: "error",
            button: "Volver"
        })
    }
    else if (nombre.value == "" || mail.value == "" || telefono.value == "" || direccion.value == "") {
        swal({
            title: "ERROR!",
            text: "Por favor complete todos los campos!",
            icon: "error",
            button: "Volver"
        })
    }
     else {
        swal({
            title: "Gracias por tu compra " + nombre.value + "!",
            text: "En 3 días hábiles estaremos enviando tu pedido a " + direccion.value,
            icon: "success",
            button: "Continuar"
        })
          carrito = []
          localStorage.clear()
          divCarrito.innerHTML = ""
          contador = false    
        
    }
}

formulario.onsubmit = (e) => {
    e.preventDefault()
    terminarCompra()
    formulario.reset()
}


//ELIMINAR PRODUCTO
function eliminarProducto(e) {
    swal({
        title: "Estas seguro?",
        text: "Estas a punto de eliminar un articulo del carrito!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
            divCarrito.innerHTML = ""
            const botonX = e.target;
            const idBotonX = botonX.getAttribute("id");
            let indexProducto = carrito.findIndex(producto => producto.id === idBotonX)
            carrito.splice(indexProducto, 1)
            localStorage.removeItem("carrito")
            localStorage.setItem("carrito", JSON.stringify(carrito))
            productosCarrito(carrito)
            swal("El articulo se elimino del carrito!", {
            icon: "success",
          });

          Toastify({
            text: "El carrito contiene " + carrito.length + " productos!",
            close: true
            }).showToast()
        }
      }); 
}