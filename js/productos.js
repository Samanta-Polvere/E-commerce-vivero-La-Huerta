
//lista de productos de la página

let listaProductos = [];

// Función para cargar productos
async function cargarProductos() {
    try {
        const response = await fetch("../productos.json");
        listaProductos = await response.json();

        mostrarTodosProd()

    } catch (error) {
        //console.error("Error al cargar los productos:", error);

        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Error al cargar los productos",
            color: "#4f664a",
        });
    }
}
cargarProductos();



/*
const listaProductos = [
    {
        id: 1,
        imagen: "../img/orquidea-phalaenopsis.jfif",
        nombre: "Orquidea Phalaenopsis",
        categoria: "Plantas",
        precio: 530,
        stock: 20

    },
    {
        id: 2,
        imagen: "../img/ficus-hawaii.jfif",
        nombre: "Ficus Hawaii",
        categoria: "Plantas",
        precio: 730,
        stock: 30

    },
    {
        id: 3,
        imagen: "../img/gomero-rubra.jfif",
        nombre: "Gomero Rubra",
        categoria: "Plantas",
        precio: 1530,
        stock: 20

    },
    {
        id: 4,
        imagen: "../img/maceta-rotomoldeadas.jpg",
        nombre: "Maceta Rotoldeadas",
        categoria: "Macetas",
        precio: 845,
        stock: 40

    },
    {
        id: 5,
        imagen: "../img/maceta-animales.jpg",
        nombre: "Macetas animales",
        categoria: "Macetas",
        precio: 1245,
        stock: 40

    },
    {
        id: 6,
        imagen: "../img/maceta-terracotaNro14.jpeg",
        nombre: "Maceta Terracota Nro14",
        categoria: "Macetas",
        precio: 285,
        stock: 40

    },
    {
        id: 7,
        imagen: "../img/tutoresdeCanafina.jfif",
        nombre: "Tutores de caña fina",
        categoria: "Accesorios",
        precio: 645,
        stock: 30

    },
    {
        id: 8,
        imagen: "../img/figuraMariposaDeco.jpeg",
        nombre: "Figuras de mariposas decorativas",
        categoria: "Accesorios",
        precio: 455,
        stock: 30

    },
    {
        id: 9,
        imagen: "../img/estanteriaplantas.jpg",
        nombre: "Estanteria para plantas",
        categoria: "Accesorios",
        precio: 2285,
        stock: 20

    },
]*/

const container = document.getElementById("contenedor-productos"); //Contenedor donde van a ir todos los productos mostrados haciendo referencia al div "contenedor-productos" del html
const htmlProductos = document.getElementById("html-Productos");
const whatsApplahuerta = document.getElementById("whatsApp-lahuerta");

const botonMostrarProd = document.createElement("button"); //boton ver todos los productos
botonMostrarProd.innerText = "Ver todos los productos";
botonMostrarProd.addEventListener("click", mostrarTodosProd); //Muestra todos los productos 


function mostrarTodosProd() {

    //limpiarCategDivHtml();


    // mostrar todos los produtos
    listaProductos.forEach(producto => {

        const productoDivHtml = document.createElement("div"); //div que contiene los productos
        const nombre = document.createElement("h4"); //h3 que va a tener los nombres de cada producto
        const precio = document.createElement("p"); //parrafo con precio
        const stock = document.createElement("p"); // parrafo con stock
        const imgProd = document.createElement("img");

        const botonAgregar = document.createElement("button"); //boton de comprar

        botonAgregar.className = "btn-agregar"
        productoDivHtml.className = "prod-div";
        imgProd.className = "img-prod";

        imgProd.src = producto.imagen;
        nombre.innerText = ` ${producto.nombre}`;
        precio.innerText = `Precio: ${producto.precio}`;
        stock.innerText = `Stock: ${producto.stock}`;





        productoDivHtml.appendChild(nombre);
        productoDivHtml.appendChild(imgProd);
        productoDivHtml.appendChild(precio);
        productoDivHtml.appendChild(stock);
        productoDivHtml.appendChild(botonAgregar);


        botonAgregar.innerText = "Agregar al Carrito"

        container.appendChild(productoDivHtml);

        botonAgregar.onclick = () => agregarProducto(producto); //funcion que al presionar click se agrega al carrito
    })


}

//funcion para limpiar todos los productos
function limpiarTodosProd() {
    container.innerHTML = '';
}

/*
//Mostrar Categorias por productos

const categoriaDivHtml = document.createElement("div"); //div que contiene las categorias
categoriaDivHtml.className = "categ-div";
container.appendChild(categoriaDivHtml); //agrego el div class=categ-div al contenedor-productos

const botonPlantas = document.querySelector(".dropdown-item-plantas"); //Se agrega al boton plantas del nav
const botonMacetas = document.querySelector(".dropdown-item-macetas"); //Se agrega al boton macetas del nav
const botonAccesorios = document.querySelector(".dropdown-item-accesorios"); //Se agrega al boton accesorios del nav

botonPlantas.addEventListener("click", mostrarProdporCategPlanta)//Muestra los productos de la categoria Plantas
botonMacetas.addEventListener("click", mostrarProdporCategMacetas)//Muestra los productos por categoria Macetas
botonAccesorios.addEventListener("click", mostrarProdporCategAccesorios)//Muestra los productos por categoria Accesorios

const nombreCategPlanta = listaProductos.filter((producto) => producto.categoria === ("Plantas"));
const nombreCategMaceta = listaProductos.filter((producto) => producto.categoria === ("Macetas"));
const nombreCategAccesorio = listaProductos.filter((producto) => producto.categoria === ("Accesorios"));

//funcion para limpiar el filtro por categoria
function limpiarCategDivHtml() {
    categoriaDivHtml.innerHTML = '';
}
limpiarCategDivHtml();

//funcion para mostrar los productos de la categoria Plantas

function mostrarProdporCategPlanta() {

    limpiarCategDivHtml()
    nombreCategPlanta.forEach((prodCatPlantas) => {
        const prodCategPlantDivHtml = document.createElement("div");
        const nombre = document.createElement("h3"); //h3 que va a tener los nombres de cada producto en la catergoria Plantas
        const precio = document.createElement("p"); //parrafo con precio
        const stock = document.createElement("p"); // parrafo con stock
        nombre.innerText = `Nombre: ${prodCatPlantas.nombre}`
        precio.innerText = `Precio: ${prodCatPlantas.precio}`
        stock.innerText = `Stock: ${prodCatPlantas.stock}`

        prodCategPlantDivHtml.appendChild(nombre);
        prodCategPlantDivHtml.appendChild(precio);
        prodCategPlantDivHtml.appendChild(stock);
        prodCategPlantDivHtml.className = "categPlanta-div";
        categoriaDivHtml.appendChild(prodCategPlantDivHtml);

        categoriaDivHtml.appendChild(botonMostrarProd);
        botonPlantas.removeEventListener("click", mostrarProdporCategPlanta);

    }


    )

}

//funcion para mostrar los productos de la categoria Macetas
function mostrarProdporCategMacetas() {

    limpiarCategDivHtml()

    nombreCategMaceta.forEach((prodCatMaceta) => {
        const prodCategMacetasDivHtml = document.createElement("div");
        const nombre = document.createElement("h3"); //h3 que va a tener los nombres de cada producto en la catergoria Plantas
        const precio = document.createElement("p"); //parrafo con precio
        const stock = document.createElement("p"); // parrafo con stock


        nombre.innerText = `Nombre: ${prodCatMaceta.nombre}`
        precio.innerText = `Precio: ${prodCatMaceta.precio}`
        stock.innerText = `Stock: ${prodCatMaceta.stock}`

        prodCategMacetasDivHtml.appendChild(nombre);
        prodCategMacetasDivHtml.appendChild(precio);
        prodCategMacetasDivHtml.appendChild(stock);
        prodCategMacetasDivHtml.className = "categMaceta-div";
        categoriaDivHtml.appendChild(prodCategMacetasDivHtml);

        categoriaDivHtml.appendChild(botonMostrarProd);
        botonPlantas.removeEventListener("click", mostrarProdporCategMacetas);

    }
    )

}

//funcion para mostrar los productos de la categoria Accesorios
function mostrarProdporCategAccesorios() {

    limpiarCategDivHtml()

    nombreCategAccesorio.forEach((prodCataccesorios) => {
        const prodCategaccesoriosDivHtml = document.createElement("div");
        const nombre = document.createElement("h3"); //h3 que va a tener los nombres de cada producto en la catergoria Plantas
        const precio = document.createElement("p"); //parrafo con precio
        const stock = document.createElement("p"); // parrafo con stock


        nombre.innerText = `Nombre: ${prodCataccesorios.nombre}`
        precio.innerText = `Precio: ${prodCataccesorios.precio}`
        stock.innerText = `Stock: ${prodCataccesorios.stock}`

        prodCategaccesoriosDivHtml.appendChild(nombre);
        prodCategaccesoriosDivHtml.appendChild(precio);
        prodCategaccesoriosDivHtml.appendChild(stock);
        prodCategaccesoriosDivHtml.className = "categAccesorio-div";
        categoriaDivHtml.appendChild(prodCategaccesoriosDivHtml);

        botonPlantas.removeEventListener("click", mostrarProdporCategAccesorios)
        categoriaDivHtml.appendChild(botonMostrarProd);
    }
    )
}
*/



//agregar productos al carrito

let carrito = JSON.parse(localStorage.getItem("Carrito")) || []

//Actualizar el local storage

function actualizarLocalStorage() {
    localStorage.setItem("Carrito", JSON.stringify(carrito)); //función para actualizar el storage
}

function agregarProducto(producto) {

    carrito.push(producto) //agrego el producto al carrito

    actualizarLocalStorage()//se actualiza el carrito en el local storage

    Swal.fire({
        icon: "success",
        title: "Felicidades!",
        text: `Agregaste ${producto.nombre} Precio: $${producto.precio} a tu carrito.`,
        confirmButtonColor: "#4f664a"
    });

}

const conteinerCarrito = document.createElement("div"); //creo un div para el botón "Ver carrito"
conteinerCarrito.id = "carrito"; //creo id para el div ver carrito
htmlProductos.appendChild(conteinerCarrito);

const botonVerCarrito = document.createElement("button");
botonVerCarrito.className = "btn-verCarrito"

botonVerCarrito.onclick = () => verCarrito(carrito);
htmlProductos.appendChild(botonVerCarrito);



const carritohtml = document.getElementById("prod-agregados");
conteinerCarrito.appendChild(carritohtml);


//oculto conteinercarrito
conteinerCarrito.style.display = "none";

//ver carrito
function verCarrito() {

    carritohtml.innerHTML = "";

    //localStorage.getItem("Carrito");

    if (carrito.length > 0) {

        carrito.forEach(prodElegido => {
            const divCarrito = document.createElement("div");
            divCarrito.className = "prod-elegidos"
            const nombre = document.createElement("h3");
            const precio = document.createElement("p");
            const stock = document.createElement("p");
            const botonEliminarProd = document.createElement("button")
            botonEliminarProd.id = "eliminarProd";
            conteinerCarrito.style.display = "block";

            nombre.innerText = `Nombre: ${prodElegido.nombre}`;
            precio.innerText = `Precio: $${prodElegido.precio}`;
            stock.innerText = `Stock: ${prodElegido.stock}`;
            



            divCarrito.appendChild(nombre);
            divCarrito.appendChild(precio);
            divCarrito.appendChild(stock);
            divCarrito.appendChild(botonEliminarProd);
            carritohtml.appendChild(divCarrito);
            botonEliminarProd.onclick = () => borrarProd(prodElegido.id)

        })
    }
    else {
        conteinerCarrito.style.display = "none";
        Swal.fire({
            title: "Tu carrito está vacio.",
            confirmButtonColor: "#4f664a"
        })
            ;
        return;
    }


};




// Funcion para eliminar un producto del carrito
function borrarProd(id) {

    const prodFiltrados = carrito.findIndex((prod) => prod.id == id)
    actualizarLocalStorage()


    if (prodFiltrados >= 0) {
        carrito.splice(prodFiltrados, 1)
        actualizarLocalStorage()
        //alert("El producto ha sido eliminado del carrito")
        Toastify({
            text: "El producto ha sido eliminado del carrito",
            duration: 1500,
            style: {
                background: "linear-gradient( to right, #4f664afb, #d4eecebb)",
              },
        }).showToast();

        verCarrito()
    }
}


//Vaciar todo el carrito

const botonVaciarCarrito = document.createElement("button");

botonVaciarCarrito.innerText = "Vaciar Carrito";
botonVaciarCarrito.className = "btn-vaciarCarrito"
conteinerCarrito.appendChild(botonVaciarCarrito);



function vaciarCarrito() {
    if (carrito.length !== 0) {
        carrito = []; //se eliminan los productos del carrito 
        localStorage.removeItem("Carrito");
        actualizarLocalStorage()
        //alert("Se borraron todos los productos del carrito");
        Toastify({
            text: "Se borraron todos los productos de tu carrito",
            duration: 1000
        }).showToast();
        verCarrito()


    } else {
        // alert("El carrito está vacio");
        Toastify({
            text: "El carrito está vacio",
            duration: 1000
        }).showToast();


    }

}

botonVaciarCarrito.onclick = () => vaciarCarrito()


const botonComprarCarrito = document.createElement("button");
botonComprarCarrito.id = "Comprar";
botonComprarCarrito.innerText = "Comprar";
conteinerCarrito.appendChild(botonComprarCarrito);
botonComprarCarrito.onclick = () => comprar(carrito);

function comprar() {
   //const compra = confirm("Deseas realizar la compra?")
   Swal.fire({
    title: "Deseas realizar la compra?",
    showCancelButton: true,
    confirmButtonText: "Aceptar",
    confirmButtonColor: "#051401",
    cancelButtonColor: " #051401",
    color: "#4f664a",
    denyButtonText: `Cancelar`
  }).then((result) => {
    const compra = result.isConfirmed; 
    if (compra) {
        carrito = [];
        carritohtml.innerHTML = "";
        localStorage.removeItem("Carrito");
        actualizarLocalStorage();
      
      //alert("Tu Compra fué realizada con éxito!");
        Swal.fire({
            title: "Tu Compra fué realizada con éxito!",
            width: 600,
            padding: "1em",
            color: "#4f664a",
            confirmButtonColor: "#4f664a",
            background: "#fff url(/images/trees.png)",
           
          });

        conteinerCarrito.style.display = "none";
    }
    else {
       //alert("Ups! Cancelaste tu compra". Dejamos los productos elegidos en el carrito en caso que te arrepientas y quieras comprarlos!");
        Swal.fire({
            width: "350",
            title: "Ups! Cancelaste tu compra 😥",
            text:"Dejamos los productos elegidos en el carrito en caso que te arrepientas y quieras comprarlos!",
             icon: 'warning',
             color: "#4f664a",
             confirmButtonColor: "#4f664a",
             confirmButtonText: "Aceptar",
             iconColor: "#051401"
        });
    }

})}
 

const msjWhatsapp = document.createElement("span");
msjWhatsapp.id = "mensaje-wp";
msjWhatsapp.innerText = "Si necesitas ayuda, no dudes en contactarnos!";
whatsApplahuerta.appendChild(msjWhatsapp);
msjWhatsapp.style.display = "none";

whatsApplahuerta.onmouseout = () => {

    msjWhatsapp.style.display = "none";
}


whatsApplahuerta.onmouseover = () => {

    msjWhatsapp.style.display = "block";
}








