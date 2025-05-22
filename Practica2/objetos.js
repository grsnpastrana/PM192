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


/*find, reduce forEach */
const personas = [
    {nombre: "Ana", edad: 22},
    {nombre: "Luis", edad: 35},
    {nombre: "Maria", edad: 28},
];

 const encontrar = personas.find(personas =>personas.nombre === "Luis")
console.log(encontrar) 

personas.forEach(persona => {
  console.log(persona.nombre + " y su edad es de " + persona.edad + " años");
});

const totalEdades = personas.reduce((acumulador, persona) => {
  return acumulador + persona.edad;
}, 0);

console.log("La suma total de las edades es:", totalEdades);