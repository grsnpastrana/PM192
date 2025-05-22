/* desestructuracion */
const persona = {
    nombre : "Ivan Isay",
    edad : 37,
    direccion : {
        ciudad: "QRO",
        pais : "MX"
    }
}

const {nombre, edad, direccion:{ciudad,pais}} = persona;

const presentar = (nombre, edad,ciudad) => "Me llamo " + nombre + " tengo " + edad + " años y vivo en " + ciudad;
console.log(presentar(nombre,edad,ciudad));

/* funcion map */
const productos = [
    {nombre: "Laptop", precio: 12000},
    {nombre: "Mouse", precio: 250},
    {nombre: "Teclado", precio: 700},
    {nombre: "Monitor", precio: 3000},
];

const nombres = productos.map(productos => productos.nombre)
console.log(nombres);
