//BUSQUEDA DE PRODUCTOS
let busquedaUsuario = prompt("Realice su busqueda");
let busquedaLower = busquedaUsuario.toLowerCase();

const tienda = [{
    titulo: "sansevieria",
    imagen: "./images/kindpng_187973.png",
    info: "una planta de interior facil de cuidar y que limpia el aire",
    precio: 1200
},
{
    titulo: "cordatum verde oscuro",
    imagen: "./images/cordatumverdeoscuro.png",
    info: "Se caracteriza por sus hojas en forma de corazon",
    precio: 1500
},
{
    titulo: "dieffenbachia tropic",
    imagen: "./images/dieffenbachiatropic.png",
    info: "Es utilizada habitualmente como planta decorativa para el interior de las casas",
    precio: 900
},
{
    titulo: "filodendro red",
    imagen: "./images/filodendrored.png",
    info: "Se caracteríza por el color rojizo en sus tallos",
    precio: 1900
},
{
    titulo: "monstera deliciosa",
    imagen: "./images/monsteradeliciosa.png",
    info: "Hojas grandes y Atractivas que dan aspecto tropical a cualquier ambiente",
    precio: 3500
},
{
    titulo: "sansevieria enana",
    imagen: "./images/sansevieriaenana.png",
    info: "Se caracteriza por su bajo mantenimiento y es ieal para espacios reducidos",
    precio: 1300
}
]

const productos = tienda.filter((el) => el.titulo.includes(busquedaLower));

if (productos.length >= 1) {
    console.log(productos);
} else {
    alert(`No podemos encontrar ${busquedaUsuario}`);
}


//CARRITO
class Producto {
    constructor(id) {
        this.id = id;
    }
}
const listaProductos = JSON.parse(localStorage.getItem("productos")) || []; //si tengo el parametro lo trae, sino crea un array

function agregarCarrito(id) { //creo funcion definiendola como agregarCarrito, despues llamo a la funcion otorgando el parametro id
    let producto = new Producto(id); //defino mi variable, creo una nueva CLASS usando el template creado en 'class producto'
    listaProductos.push(producto);  // llamo a mivariable, y le pusheo producto (new producto)
    localStorage.setItem("productos", JSON.stringify(listaProductos)); //agrego 'productos' a la 'listaProductos', entonces me lo muestra en el localStorage.

}


