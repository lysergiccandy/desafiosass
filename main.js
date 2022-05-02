//BUSQUEDA DE PRODUCTOS
let busquedaUsuario = prompt("Realice su busqueda");
let busquedaLower = busquedaUsuario ? busquedaUsuario.toLowerCase() : "";

const tienda = [
  {
    id: 1,
    titulo: "sansevieria",
    imagen: "./images/kindpng_187973.png",
    info: "una planta de interior facil de cuidar y que limpia el aire",
    precio: 1200,
  },
  {
    id: 2,
    titulo: "cordatum verde oscuro",
    imagen: "./images/cordatumverdeoscuro.png",
    info: "Se caracteriza por sus hojas en forma de corazon",
    precio: 1500,
  },
  {
    id: 3,
    titulo: "dieffenbachia tropic",
    imagen: "./images/dieffenbachiatropic.png",
    info: "Es utilizada habitualmente como planta decorativa para el interior de las casas",
    precio: 900,
  },
  {
    id: 4,
    titulo: "filodendro red",
    imagen: "./images/filodendrored.png",
    info: "Se caracteríza por el color rojizo en sus tallos",
    precio: 1900,
  },
  {
    id: 5,
    titulo: "monstera deliciosa",
    imagen: "./images/monsteradeliciosa.png",
    info: "Hojas grandes y Atractivas que dan aspecto tropical a cualquier ambiente",
    precio: 3500,
  },
  {
    id: 6,
    titulo: "sansevieria enana",
    imagen: "./images/sansevieriaenana.png",
    info: "Se caracteriza por su bajo mantenimiento y es ieal para espacios reducidos",
    precio: 1300,
  },
];

const productos = tienda.filter((el) => el.titulo.includes(busquedaLower));

if (productos.length >= 1) {
  console.log(productos);
} else {
  alert(`No podemos encontrar ${busquedaUsuario}`);
}

//CARRITO
class Producto {
  cantidad = 1;
  constructor(id) {
    this.id = id;
  }
}

const listaProductos = JSON.parse(localStorage.getItem("productos")) || []; //si tengo el parametro lo trae, sino crea un array

// Muestra en consola lo que ya existe en el carrito, el subtotal por articulo y total general
let totalGeneral = 0;
listaProductos.forEach((producto) => {
  const productoEnTienda = tienda.find((p) => p.id == producto.id);
  const total = productoEnTienda.precio * producto.cantidad;
  console.log(
    `${productoEnTienda.titulo} - Cantidad: ${producto.cantidad} - Precio Unitario: $${productoEnTienda.precio} - Total: $${total}`
  );
  totalGeneral += total;
});
console.log(`Total General: $${totalGeneral}`);

function agregarCarrito(id) {
  //creo funcion definiendola como agregarCarrito, despues llamo a la funcion otorgando el parametro id

  // Busco el indice del ID agregado en la lista existente de productos
  const productoExisteIndex = listaProductos.findIndex((p) => p.id == id);

  // Chequeo si el ID existe en la lista
  if (productoExisteIndex != -1) {
    // Si existe sumo 1 a cantidad
    listaProductos[productoExisteIndex].cantidad++;
  } else {
    // Si no existe lo agrego
    const producto = new Producto(id);
    listaProductos.push(producto);
  }

  localStorage.setItem("productos", JSON.stringify(listaProductos)); //agrego 'productos' a la 'listaProductos', entonces me lo muestra en el localStorage.
}
