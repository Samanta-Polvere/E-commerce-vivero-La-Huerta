alert("Hola! Somos Vivero La Huerta! Aquí vas a encontrar muchas opciones para convertir un ambiente en TU ESPACIO.");

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
}