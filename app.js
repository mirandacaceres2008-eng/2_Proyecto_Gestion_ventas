const productos = [ { id: 1, nombre: "Mouse", categoria: "Periferico", precio: 50000,
stock: 10, ventas: 12 },
{ id: 2, nombre: "Teclado", categoria: "Periferico", precio:
120000, stock: 5, ventas: 7 },
 { id: 3, nombre: "Monitor", categoria: "Pantalla", precio:
800000, stock: 2, ventas: 4 }, 
{ id: 4, nombre: "USB", categoria: "Accesorio", precio:
30000, stock: 0, ventas: 15 }, 
{ id: 5, nombre: "Diadema", categoria: "Audio", precio:
90000, stock: 8, ventas: 6 } ];

function mostrarProductos() {
    console.log (productos);
}
 function stockBajo() {
    return productos.filter(productos.stock < 5);
 }

 function agotados () {
    return productos.filter(p => p.stock === 0);
 }

 function nombrarPrecios() {
    return productos.map(p => `${p.nombre}: $${p.precio}`);
 }

 function ordenarPorPrecio() {
    return productos.sort((a, b) => a.precio - b.precio);
 }


 //Funcion 1 TOTAL iNVENTARIO

 function totalInventario() {
   return productos.reduce((acc, p) => acc + (p.precio * p.stock), 0);
 }

 //Funcion 2 Total Ventas
 function totalVentas() {
   return productos.reduce((acc, p) => acc + p.ventas, 0);
 }

 //Funcion 3 Buscar productos

 function buscarProducto(nombre) {
   return productos.find (p => p.nombre === nombre);

}

//Funcion 4 Agotados y en stock
function hayAgotados() {
   return productos.some(p => p.stock === 0);
}
function todosConStock() {
   return productos.every(p => p.stock > 0);

}

//Funcion 5 Clasificar el Precio
function clasificarPrecio(precio) {
   switch(true) {
      case precio < 50000:
         return "Barato";
      case precio < 200000:
         return "Medio";
      default:
         return "Caro";
   }
}


function menu () {

 let opcion;

while(opcion !== "0") {

    opcion = prompt("1.ver Productos 2.Total inventario 3.Total ventas 4.Buscar producto 5.Agotados y en stock 6.Clasificar precio 0.Salir");

     switch(opcion) {

     case "1":
         mostrarProductos();
         break;

    case "2":
        console.log(totalInventario());
        break;

    case "3":
        console.log(totalVentas());
         break;

    case "4":
        let nombre = prompt("Ingrese el nombre del producto:");
        console.log(buscarProducto(nombre));
         break;

    case "5":
         console.log("Hay agotados:", hayAgotados());
        console.log("Todos tienen stock:", todosConStock());
        break;

    case "6":
        let precio = parseFloat(prompt("Ingrese el precio:"));
        console.log(clasificarPrecio(precio));
        break;

    case "0":
        console.log("Saliendo...");
         break;

    default:
         console.log("Opción inválida");
        }
    }
}

 function reporteFinal() {
    let caro = productos.reduce((a,b) => a.precio > b.precio ? a : b);
    let barato = productos.reduce((a,b) => a.precio < b.precio ? a : b);

    let vendido = productos.reduce((a,b) => a.ventas > b.ventas ? a : b);

    console.log(caro, barato, vendido); 
 }
 