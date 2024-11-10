/*alert("Hola! Somos Vivero La Huerta! Aquí vas a encontrar muchas opciones para convertir un ambiente en TU ESPACIO.");
/*
let registro = parseInt(prompt("Para poder comprar es necesarios que estes registrado. Si aún no te has registrado y lo deseas hacer presioná 1. Si ya te encuentras registrado y queres comprar, presioná 2 . En caso que no desees continuar presioná 3 para salir de las opciones y seguir mirando nuestra web!."));
// Crea usr nuevo//
if (registro === 1) {
    let nombre = prompt("Ingresá tu nombre ");
    let apellido = prompt("Ingresá tu apellido");
    let mail = prompt("Ingresá tu correo electronico");
    let contraseña = prompt("Ingresá tu contraseña");

    function registrarse(nombre, apellido, mail, contraseña) {
        console.log("Nombre: " + nombre);
        console.log("Apellido: " + apellido);
        console.log("E-mail: " + mail);
        console.log("Contraseña: " + contraseña);
    }
    registrarse(nombre, apellido, mail, contraseña);

    alert("¡Hola " + nombre + " " + apellido + "!. ¡Ya sos parte de nuestra comunidad!");
//logueo//
} else if (registro === 2) {


    for (let i = 1; i <= 3; i++) {

        let email = prompt("Ingresá tu mail");
        let clave = prompt("Ingresá tu contraseña");

        if (email === "susana.perez@gmail.com" && clave === "1234") {
            alert("Bienvenido a vivero La Huerta!");
            break;
        } else {
            alert("Credenciales inválidas");
            if (i === 3) {
                alert("Usuario y contraseña bloqueados. No puedes realizar la compra");
            };
        }
    }

}
const continuarCompra = parseInt(prompt("Si deseas continuar con la compra presioná 1, sino presioná 2 para salir del proceso de compra. "));

const arraycategoria = ["Macetas", "Plantas", "Accesorios"];

const arraymacetas = ["Maceta Rotoldeadas", "Macetas animales", "Maceta Terracota Nro14"];

const plantas = ["Orquidea Phalaenopsis", "Ficus Hawaii", "Gomero Rubra"];

const accesorios = ["Tutores de caña fina", "Figuras de mariposas decorativas", "Estanteria para plantas"];

//realizar compra//
if (continuarCompra === 1) {
    alert("Ya puedes comprar!");
    let seleccionarCateg = parseInt(prompt("Accedé a la categoria que más te guste para poder ver los productos: Opción 1 Categoría: Plantas, Opcion 2 Categoría: Macetas y Opción 3 Categoría: Accesorios. Si deseas salir del proceso de compra, presioná 0 "));
    while (seleccionarCateg != 0) {
        switch (seleccionarCateg) {

            case 1:
                let prodPlanta = parseInt(prompt("Accedé al producto que más te guste : Opción 1 Orquidea Phalaenopsis , Opcion 2 Ficus Hawaii y Opción 3 Gomero Rubra. Si deseas salir del proceso de compra, presioná 0 "));
                switch (prodPlanta) {

                    case 1:
                        alert("Seleccionaste Articulo Orquidea Phalaenopsis. Precio: $530");
                        let cantidadOrquideas = parseInt(prompt("Cuántas Orquideas Phalaenopsis deseas? (Stock máximo 20)"));
                        if (cantidadOrquideas < 20) {
                            alert("Agregaste al carrito " + cantidadOrquideas + " Orquideas Phalaenopsis");
                            alert("Precio final: $" + (530 * cantidadOrquideas));
                        } else {
                            alert("Lo sentimos, no contamos con esa cantidad en stock por el momento.");
                        };

                        break;

                    case 2:
                        alert("Seleccionaste Articulo Ficus Hawaii. Precio: $730");

                        let cantidadFicusHawaii = parseInt(prompt("Cuántos Ficus Hawaii deseas? (Stock máximo 30)"));

                        if (cantidadFicusHawaii < 30) {
                            alert("Agregaste al carrito " + cantidadFicusHawaii + " Ficus Hawaii");
                            alert("Precio final: $" + (730 * cantidadFicusHawaii));
                        } else {
                            alert("Lo sentimos, no contamos con esa cantidad en stock por el momento.");
                        };

                        break;
                    case 3:
                        alert("Seleccionaste Articulo Gomero Rubra. Precio: $1530");

                        let cantidadGomeroRubra = parseInt(prompt("Cuántos Gomeros Rubra deseas? (Stock máximo 20)"));

                        if (cantidadGomeroRubra < 20) {
                            alert("Agregaste al carrito " + cantidadGomeroRubra + " Gomeros Rubra");
                            alert("Precio final: $" + (1530 * cantidadGomeroRubra));
                        } else {
                            alert("Lo sentimos, no contamos con esa cantidad en stock por el momento.");
                        };

                        break;
                    case 0:
                        alert("Gracias, esperamos que vuelvas prontos!")
                        break;
                    default:
                        alert("Ingresá un producto válido.Opción 1 Orquidea Phalaenopsis , Opcion 2 Ficus Hawaii y Opción 3 Gomero Rubra. Si deseas salir del proceso de compra, presioná 0 ");
                }
                break;
            case 2:
                let prodMacetas = parseInt(prompt("Accedé al producto que más te guste : Opción 1 Maceta Rotoldeadas , Opcion 2 Macetas animales y Opción 3 Maceta Terracota Nro14. Si deseas salir del proceso de compra, presioná 0 "));
                switch (prodMacetas) {

                    case 1:
                        alert("Seleccionaste Articulo Maceta Rotoldeadas. Precio: $845");
                        let cantidadMacetaRotoldeadas = parseInt(prompt("Cuántas Maceta Rotoldeadas deseas? (Stock máximo 40)"));

                        if (cantidadMacetaRotoldeadas < 40) {
                            alert("Agregaste al carrito " + canticantidadMacetaRotoldeadasdad + " Maceta Rotoldeadas");
                            alert("Precio final: $" + (845 * cantidadMacetaRotoldeadas));
                        } else {
                            alert("Lo sentimos, no contamos con esa cantidad en stock por el momento.");
                        };

                        break;

                    case 2:
                        alert("Seleccionaste Articulo Macetas animales. Precio: $1245");

                        let cantidadMacetasAnimales = parseInt(prompt("Cuántas Macetas animales deseas? (Stock máximo 40)"));

                        if (cantidadMacetasAnimales < 40) {
                            alert("Agregaste al carrito " + cantidadMacetasAnimales + " Macetas animales");
                            alert("Precio final: $" + (1245 * cantidadMacetasAnimales));
                        } else {
                            alert("Lo sentimos, no contamos con esa cantidad en stock por el momento.");
                        };

                        break;
                    case 3:
                        alert("Seleccionaste Articulo Maceta Terracota Nro14. Precio: $285");

                        let cantidadMacetasTerracotanro14 = parseInt(prompt("Cuántas Maceta Terracota Nro14 deseas? (Stock máximo 40)"));

                        if (cantidadMacetasTerracotanro14 < 40) {
                            alert("Agregaste al carrito " + cantidadMacetasTerracotanro14 + " Maceta Terracota Nro14");
                            alert("Precio final: $" + (285 * cantidadMacetasTerracotanro14));
                        } else {
                            alert("Lo sentimos, no contamos con esa cantidad en stock por el momento.");
                        };

                        break;
                    case 0:
                        alert("Gracias, esperamos que vuelvas prontos!")
                        break;
                    default:
                        alert("Ingresá un producto válido.Opción 1 Maceta Rotoldeadas , Opcion 2 Macetas animales y Opción 3 Maceta Terracota Nro14. Si deseas salir del proceso de compra, presioná 0 ");
                }
                break;
            case 3:
                let prodAccesorios = parseInt(prompt("Accedé al producto que más te guste : Opción 1 Tutores de caña fina , Opcion 2 Figuras de mariposas decorativas y Opción 3 Estanteria para plantas. Si deseas salir del proceso de compra, presioná 0 "));
                switch (prodAccesorios) {

                    case 1:
                        alert("Seleccionaste Articulo Tutores de caña fina. Precio: $645");

                        let cantidadTutores = parseInt(prompt("Cuántos Tutores de caña fina deseas? (Stock máximo 30)"));

                        if (cantidadTutores < 30) {
                            alert("Agregaste al carrito " + cantidadTutores + " Tutores de caña fina");
                            alert("Precio final: $" + (645 * cantidadTutores));
                        } else {
                            alert("Lo sentimos, no contamos con esa cantidad en stock por el momento.");
                        };

                        break;

                    case 2:
                        alert("Seleccionaste Articulo Figuras de mariposas decorativas. Precio: $455");

                        let cantidadFigurasMariposas = parseInt(prompt("Cuántos Figuras de mariposas decorativas deseas? (Stock máximo 30)"));

                        if (cantidadFigurasMariposas < 30) {
                            alert("Agregaste al carrito " + cantidadFigurasMariposas + " Figuras de mariposas decorativas");
                            alert("Precio final: $" + (455 * cantidadFigurasMariposas));
                        } else {
                            alert("Lo sentimos, no contamos con esa cantidad en stock por el momento.");
                        };

                        break;
                    case 3:
                        alert("Seleccionaste Articulo Estanteria para plantas. Precio: $2285");

                        let cantidadEstanteria = parseInt(prompt("Cuántos Estanteria para plantas deseas? (Stock máximo 20)"));

                        if (cantidadEstanteria < 20) {
                            alert("Agregaste al carrito " + cantidadEstanteria + " Estanteria para plantas");
                            alert("Precio final: $" + (2285 * cantidadEstanteria));
                        } else {
                            alert("Lo sentimos, no contamos con esa cantidad en stock por el momento.");
                        };

                        break;
                    case 0:
                        alert("Gracias, esperamos que vuelvas prontos!")
                        break;
                    default:
                        alert("Ingresá un producto válido.Opción 1 Tutores de caña fina , Opcion 2 Figuras de mariposas decorativas y Opción 3 Estanteria para plantas. Si deseas salir del proceso de compra, presioná 0 ");
                }
                break;
            default:
                alert("Categoría no válida. Debes elegir entre las siguientes: Opción 1 Categoría: Plantas, Opcion 2 Categoría: Macetas y Opción 3 Categoría: Accesorios. En caso que desees salir, presioná la opcion 0");
        }
        seleccionarCateg = parseInt(prompt("Accedé nuevamente a la categoría: Opción 1 Categoría: Plantas, Opción 2 Categoría: Macetas, Opción 3 Categoría: Accesorios. Si deseas salir, presioná 0"));
    }
}
else if (continuarCompra === 2) {
    alert("Has salido del proceso de compra. ¡Esperamos que vuelvas pronto!");
}
else {
    parseInt(prompt("Debes seleccionar una opcion correcta. Opción 1 para continuar con la compra. Opcion 2 para salir del proceso de compra."));
}*/


// Objeto - Loguarse
class UsuarioNuevo {
    constructor(dni, nombre, apellido, mail, contraseña) {
        this.dni = dni;
        this.nombre = nombre;
        this.apellido = apellido;
        this.mail = mail;
        this.contraseña = contraseña;
    }
};
const usuario1 = new UsuarioNuevo(31640916, "Samanta ", "Polvere", "samanta.polvere@gmail.com", 1234);
const usuario2 = new UsuarioNuevo(10508740, "Susana ", "Perez", "susana.perez@gmail.com", 1234);

const listaUsuario = [usuario1, usuario2]

const logueo = document.getElementById("logueo");

const labelDni = document.createElement("label");
labelDni.innerText = "DNI:"
labelDni.htmlFor = "DNI";

const dni = document.createElement("input");
dni.innerText = "Dni:"

logueo.appendChild(labelDni);
logueo.appendChild(dni);


const labelContraseña = document.createElement("label");
labelContraseña.innerText = "Contraseña:"
labelContraseña.htmlFor = "Contraseña";

const contraseña = document.createElement("input");
contraseña.innerText = "Contraseña"

logueo.appendChild(labelContraseña);
logueo.appendChild(contraseña);

const acceder = document.createElement("button");
acceder.innerText = "Ingresar"


logueo.appendChild(acceder);

//funcion para loguearse
function loguearse() {
    const dniIngresado = parseInt(dni.value);
    const contraseñaIngresada = parseInt(contraseña.value);

    const usuarioExistente = listaUsuario.find(usuario => usuario.dni === dniIngresado && usuario.contraseña === contraseñaIngresada);

    if (usuarioExistente) {
        const mensajeLogueo = `¡Hola ${usuarioExistente.nombre} ${usuarioExistente.apellido}. Bienvenido a vivero La Huerta!`
        alert(mensajeLogueo);
    }
    else {
        alert("Tenes que registrarte");
    }
}

acceder.addEventListener("click", loguearse);


//lista de productos de la página
const listaProductos = [
    {
        id: 1,
        nombre: "Orquidea Phalaenopsis",
        categoria: "Plantas",
        precio: 530,
        stock: 20

    },
    {
        id: 2,
        nombre: "Ficus Hawaii",
        categoria: "Plantas",
        precio: 730,
        stock: 30

    },
    {
        id: 3,
        nombre: "Gomero Rubra",
        categoria: "Plantas",
        precio: 1530,
        stock: 20

    },
    {
        id: 4,
        nombre: "Maceta Rotoldeadas",
        categoria: "Macetas",
        precio: 845,
        stock: 40

    },
    {
        id: 5,
        nombre: "Macetas animales",
        categoria: "Macetas",
        precio: 1245,
        stock: 40

    },
    {
        id: 6,
        nombre: "Maceta Terracota Nro14",
        categoria: "Macetas",
        precio: 285,
        stock: 40

    },
    {
        id: 7,
        nombre: "Tutores de caña fina",
        categoria: "Accesorios",
        precio: 645,
        stock: 30

    },
    {
        id: 8,
        nombre: "Figuras de mariposas decorativas",
        categoria: "Accesorios",
        precio: 455,
        stock: 30

    },
    {
        id: 9,
        nombre: "Estanteria para plantas",
        categoria: "Accesorios",
        precio: 2285,
        stock: 20

    },
]


const container = document.getElementById("contenedor-productos"); //creo el contenedor donde van a ir todos los productos mostrados haciendo referencia al div "contenedor-productos" del html


// mostrar todos los produtos
listaProductos.forEach(producto => {

    const productoDivHtml = document.createElement("div"); //div que contiene los productos
    const nombre = document.createElement("h3"); //h3 que va a tener los nombres de cada producto
    const precio = document.createElement("p"); //parrafo con precio
    const stock = document.createElement("p"); // parrafo con stock
    const botonAgregar = document.createElement("button"); //boton de comprar


    productoDivHtml.className = "prod-div";

    nombre.innerText = `Nombre: ${producto.nombre}`
    precio.innerText = `Precio: ${producto.precio}`
    stock.innerText = `Stock: ${producto.stock}`


    productoDivHtml.appendChild(nombre);
    productoDivHtml.appendChild(precio);
    productoDivHtml.appendChild(stock);
    productoDivHtml.appendChild(botonAgregar);


    botonAgregar.innerText = "Agregar al Carrito"

    container.appendChild(productoDivHtml);

    botonAgregar.onclick = () => agregarProducto(producto); //funcion que al presionar click se agrega al carrito
})



//Mostrar Categorias por productos

const categoriaDivHtml = document.createElement("div"); //div que contiene las categorias
categoriaDivHtml.className = "categ-div";
const botonPlantas = document.createElement("button"); //boton de planta
const botonMacetas = document.createElement("button"); //boton de maceta
const botonAccesorios = document.createElement("button"); //boton de accesorios

container.appendChild(categoriaDivHtml); //agrego el div class=categ-div al contenedor-productos*/
categoriaDivHtml.appendChild(botonPlantas);
categoriaDivHtml.appendChild(botonMacetas);
categoriaDivHtml.appendChild(botonAccesorios);

botonPlantas.innerText = "Plantas"
botonMacetas.innerText = "Macetas"
botonAccesorios.innerText = "Accesorios"

botonPlantas.addEventListener("click", mostrarProdporCategPlanta)//Muestra los productos de la categoria Plantas
botonMacetas.addEventListener("click", mostrarProdporCategMacetas)//Muestra los productos por categoria Macetas
botonAccesorios.addEventListener("click", mostrarProdporCategAccesorios)//Muestra los productos por categoria Accesorios
const nombreCategPlanta = listaProductos.filter((producto) => producto.categoria === ("Plantas"))
const nombreCategMaceta = listaProductos.filter((producto) => producto.categoria === ("Macetas"))
const nombreCategAccesorio = listaProductos.filter((producto) => producto.categoria === ("Accesorios"))


//funcion para mostrar los productos de la categoria Plantas
function mostrarProdporCategPlanta() {

    nombreCategPlanta.forEach((prodCatPlantas) => {
        const prodCategPlantDivHtml = document.createElement("divPlanta");
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

        botonPlantas.removeEventListener("click", mostrarProdporCategPlanta)
    }


    )
}

//funcion para mostrar los productos de la categoria Macetas
function mostrarProdporCategMacetas() {

    nombreCategMaceta.forEach((prodCatMaceta) => {
        const prodCategMacetasDivHtml = document.createElement("divMaceta");
        const nombre = document.createElement("h3"); //h3 que va a tener los nombres de cada producto en la catergoria Plantas
        const precio = document.createElement("p"); //parrafo con precio
        const stock = document.createElement("p"); // parrafo con stock


        nombre.innerText = `Nombre: ${prodCatMaceta.nombre}`
        precio.innerText = `Precio: ${prodCatMaceta.precio}`
        stock.innerText = `Stock: ${prodCatMaceta.stock}`

        prodCategMacetasDivHtml.appendChild(nombre);
        prodCategMacetasDivHtml.appendChild(precio);
        prodCategMacetasDivHtml.appendChild(stock);
        prodCategMacetasDivHtml.className = "categPlanta-div";
        categoriaDivHtml.appendChild(prodCategMacetasDivHtml);

        botonPlantas.removeEventListener("click", mostrarProdporCategMacetas)
    }
    )
}

//funcion para mostrar los productos de la categoria Accesorios
function mostrarProdporCategAccesorios() {

    nombreCategAccesorio.forEach((prodCataccesorios) => {
        const prodCategaccesoriosDivHtml = document.createElement("divAccesorios");
        const nombre = document.createElement("h3"); //h3 que va a tener los nombres de cada producto en la catergoria Plantas
        const precio = document.createElement("p"); //parrafo con precio
        const stock = document.createElement("p"); // parrafo con stock


        nombre.innerText = `Nombre: ${prodCataccesorios.nombre}`
        precio.innerText = `Precio: ${prodCataccesorios.precio}`
        stock.innerText = `Stock: ${prodCataccesorios.stock}`

        prodCategaccesoriosDivHtml.appendChild(nombre);
        prodCategaccesoriosDivHtml.appendChild(precio);
        prodCategaccesoriosDivHtml.appendChild(stock);
        prodCategaccesoriosDivHtml.className = "categPlanta-div";
        categoriaDivHtml.appendChild(prodCategaccesoriosDivHtml);

        botonPlantas.removeEventListener("click", mostrarProdporCategAccesorios)
    }
    )
}



//agregar productos al carrito

let carrito = JSON.parse(localStorage.getItem("Carrito")) || [];


//Actualizar el local storage

function actualizarLocalStorage(){
    localStorage.setItem("Carrito", JSON.stringify(carrito)); //se actualiza
}

function agregarProducto(producto) {

    carrito.push(producto) //agrego el producto al carrito
    
    actualizarLocalStorage()//se actualiza el carrito en el local storage
   
    alert(`Felicidades! Agregaste ${producto.nombre} Precio: $${producto.precio} a tu carrito.`)


}

const conteinerCarrito = document.createElement("div"); //creo un div para el botón "Ver carrito"
conteinerCarrito.id = "carrito"; //creo id para el div ver carrito
container.appendChild(conteinerCarrito);

const botonVerCarrito = document.createElement("button");
botonVerCarrito.innerText = "Ver Carrito";
botonVerCarrito.onclick = () => verCarrito(carrito);
conteinerCarrito.appendChild(botonVerCarrito);


const carritohtml = document.getElementById("prod-agregados");




//ver carrito
function verCarrito() {

    carritohtml.innerHTML = "";
    
    localStorage.getItem("Carrito");
   
    if (carrito.length > 0) {

        carrito.forEach(prodElegido => {
            const divCarrito = document.createElement("div");
            const nombre = document.createElement("h3");
            const precio = document.createElement("p");
            const stock = document.createElement("p");
            const botonEliminarProd = document.createElement("button")
            botonEliminarProd.id = "eliminarProd";


            nombre.innerText = `Nombre: ${prodElegido.nombre}`;
            precio.innerText = `Precio: $${prodElegido.precio}`;
            stock.innerText = `Stock: ${prodElegido.stock}`;
            botonEliminarProd.innerText = "X";



            divCarrito.appendChild(nombre);
            divCarrito.appendChild(precio);
            divCarrito.appendChild(stock);
            divCarrito.appendChild(botonEliminarProd);
            carritohtml.appendChild(divCarrito);
            botonEliminarProd.onclick = () => borrarProd(prodElegido.id)
        })
    }
    else {

        alert("Tu carrito está vacio.")
        return;
    }


};

// Funcion para eliminar un producto del carrito
function borrarProd(id) {
    const prodFiltrados = carrito.findIndex((prod) => prod.id == id)

    

    if(prodFiltrados >=0){
        carrito.splice(prodFiltrados,1)
        alert("El producto ha sido eliminado del carrito")
        verCarrito()
    }
}


//Vaciar todo el carrito

const conteinerVaciarCarrito = document.createElement("div");
conteinerVaciarCarrito.id = "VaciarCarrito"; //creo id para el div carrito
container.appendChild(conteinerVaciarCarrito);


const botonVaciarCarrito = document.createElement("button");

botonVaciarCarrito.innerText = "Vaciar Carrito";
conteinerCarrito.appendChild(botonVaciarCarrito);



function vaciarCarrito() {
    if (carrito.length !== 0) {
        carrito = []; //se eliminan los productos del carrito 
        localStorage.removeItem("Carrito");
        alert("Se borraron todos los productos del carrito");
        verCarrito()
    } else {
        alert("El carrito está vacio");
    }

}

botonVaciarCarrito.onclick = () => vaciarCarrito()






