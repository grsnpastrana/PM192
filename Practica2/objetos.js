const persona = {
    nombre : "Ivan Isay",
    edad : 37,
    direccion : {
        ciudad: "QRO",
        pais : "MX"
    }
}

const {nombre, edad, direccion:{ciudad,pais}} = persona;

const presentar = (nombre, edad,ciudad) => "Me llamo " + nombre + " tengo" + edad + " años y vivo en " + ciudad;
console.log(presentar(nombre,edad,ciudad));