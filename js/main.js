alert("Hola! Somos Vivero La Huerta! Aquí vas a encontrar muchas opciones para convertir un ambiente en TU ESPACIO.");

let registro = parseInt(prompt("Para poder comprar es necesarios que estes registrado. Si aún no te has registrado y lo deseas hacer presioná 1. Si ya te encuentras registrado y queres comprar, presioná 2 . En caso que no desees continuar presioná 3 para salir de las opciones y seguir mirando nuestra web!."));

if (registro === 1) {
    let nombre = prompt("Ingresá tu nombre ");
    let apellido = prompt("Ingresá tu apellido");
    let mail = prompt("Ingresá tu correo electronico");
    let contraseña = prompt("Ingresá tu contraseña");

    function registrarse(nombre, apellido, mail, password) {
        console.log("Nombre: " + nombre);
        console.log("Apellido: " + apellido);
        console.log("E-mail: " + mail);
        console.log("Contraseña: " + contraseña);
    }
    registrarse(nombre, apellido, mail, contraseña);

    alert("¡Hola " + nombre + " " + apellido + "!. ¡Ya sos parte de nuestra comunidad!");

    const continuarCompra = parseInt(prompt("Si deseas continuar con la compra presioná 1, sino presioná 2 para salir del proceso de compra. "));

    const arraycategoria = ["Macetas", "Plantas", "Accesorios"];

    const arraymacetas = ["Maceta Rotoldeadas", "Macetas animales", "Maceta Terracota Nro14"];

    const plantas = ["Orquidea Phalaenopsis", "Ficus Hawaii", "Gomero Rubra"];

    const accesorios = ["Tutores de caña fina", "Figuras de mariposas decorativas", "Estanteria para plantas"];

    if (continuarCompra === 1) {
        alert("Ya puedes comprar!");
        let seleccionarCateg = parseInt(prompt("Accedé a la categoria que más te guste para poder ver los productos: Opción 1 Categoría: Plantas, Opcion 2 Categoría: Macetas y Opción 3 Categoría: Accesorios. "));
        switch (seleccionarCateg) {
            case 1:
                let prodPlanta = parseInt(prompt("Accedé al producto que más te guste : Opción 1 Orquidea Phalaenopsis , Opcion 2 Ficus Hawaii y Opción 3 Gomero Rubra. "));
                switch (prodPlanta) {
                    case 1:
                        alert("Seleccionaste Articulo Orquidea Phalaenopsis. Precio: $530");

                        break;

                    case 2:
                        alert("Seleccionaste Articulo Ficus Hawaii. Precio: $730");
                        break;
                    case 3:
                        alert("Seleccionaste Articulo Gomero Rubra. Precio: $1530");
                        break;
                    default:
                        alert("Ingresá un producto válido.Opción 1 Orquidea Phalaenopsis , Opcion 2 Ficus Hawaii y Opción 3 Gomero Rubra.");
                }
                break;
            case 2:
                let prodMacetas = parseInt(prompt("Accedé al producto que más te guste : Opción 1 Maceta Rotoldeadas , Opcion 2 Macetas animales y Opción 3 Maceta Terracota Nro14. "));
                switch (prodMacetas) {
                    case 1:
                        alert("Seleccionaste Articulo Maceta Rotoldeadas. Precio: $845");

                        break;

                    case 2:
                        alert("Seleccionaste Articulo Macetas animales. Precio: $1245");
                        break;
                    case 3:
                        alert("Seleccionaste Articulo Maceta Terracota Nro14. Precio: $285");
                        break;
                    default:
                        alert("Ingresá un producto válido.Opción 1 Maceta Rotoldeadas , Opcion 2 Macetas animales y Opción 3 Maceta Terracota Nro14.");
                }
                break;
            case 3:
                let prodAccesorios = parseInt(prompt("Accedé al producto que más te guste : Opción 1 Tutores de caña fina , Opcion 2 Figuras de mariposas decorativas y Opción 3 Estanteria para plantas. "));
                switch (prodAccesorios) {
                    case 1:
                        alert("Seleccionaste Articulo Tutores de caña fina. Precio: $645");

                        break;

                    case 2:
                        alert("Seleccionaste Articulo Figuras de mariposas decorativas. Precio: $455");
                        break;
                    case 3:
                        alert("Seleccionaste Articulo Estanteria para plantas. Precio: $2285");
                        break;
                    default:
                        alert("Ingresá un producto válido.Opción 1 Tutores de caña fina , Opcion 2 Figuras de mariposas decorativas y Opción 3 Estanteria para plantas.");
                }
                break;
            default:
                alert("Categoría no válida. Debes elegir entre las siguientes: Opción 1 Categoría: Plantas, Opcion 2 Categoría: Macetas y Opción 3 Categoría: Accesorios.");
        }

    }
    else {
        alert("Has salido del proceso de compra. ¡Esperamos que vuelvas pronto!");
    }

}
