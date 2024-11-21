//alert("Hola! Somos Vivero La Huerta! Aquí vas a encontrar muchas opciones para convertir un ambiente en TU ESPACIO.");

Swal.fire({
    title: "Hola! Somos Vivero La Huerta!",
    text: "Aquí vas a encontrar muchas opciones para convertir un ambiente en TU ESPACIO.",
    imageUrl: "./img/LogoViveroLaHuerta.png",
    imageWidth: 300,
    imageHeight: 300,
    confirmButtonText: "Ingresar!",
    confirmButtonColor: "#4f664a",
    imageAlt: "Vivero La Huerta",
    color: "#4f664a",
    width: "500",

});

const whatsApplahuerta = document.getElementById("whatsApp-lahuerta");

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

//creo un set timeout para loguarse
const contenedor = document.getElementById("index-contenedor");
const contenedorLoader = document.createElement("div");
contenedorLoader.className = "contenedor-loader";
const loader = document.createElement("div");
loader.className = "loader";
contenedor.appendChild(contenedorLoader);
contenedorLoader.appendChild(loader);
contenedorLoader.style.display = "none";

//funcion para loguearse
function loguearse() {
    const dniIngresado = parseInt(dni.value);
    const contraseñaIngresada = parseInt(contraseña.value);

    const usuarioExistente = listaUsuario.find(usuario => usuario.dni === dniIngresado && usuario.contraseña === contraseñaIngresada);

    if (usuarioExistente) {
        //const mensajeLogueo =
        contenedorLoader.style.display="block"

        setTimeout(()=>{

            contenedorLoader.style.display = "none";
         Swal.fire({
            title: `¡Hola ${usuarioExistente.nombre} ${usuarioExistente.apellido}.`,
            text:"Bienvenido a vivero La Huerta!",
            icon: "success",
            color: "#4f664a",
            confirmButtonColor: "#4f664a"
           
        });
       
    }, 2200);    
        
    }
    else {
        contenedorLoader.style.display="block"
        setTimeout(()=>{

            contenedorLoader.style.display = "none";
        Swal.fire({
            title: "No hemos podido encontrarte 😥",
            text:"Es necesario que te registes para poder comprar",
             icon: 'warning',
             color: "#4f664a",
             confirmButtonColor: "#4f664a",
             iconColor: "#051401"
        });
    }, 2200);
    }
}

acceder.addEventListener("click", loguearse);

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