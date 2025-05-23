const restar = require('./utils');

console.log("25 - 18 =", restar(25, 18));


const verificarUsuario = require('./promesa');
verificarUsuario("admin")
  .then(mensaje => console.log(mensaje))   
  .catch(error => console.log(error));

verificarUsuario("juan")
  .then(mensaje => console.log(mensaje))
  .catch(error => console.log(error));      
