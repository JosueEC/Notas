//!###################################################
//! MODULO HTTP ######################################
//!###################################################

//!###################################################
//! CREAR UN SERVIDOR CON HTTP #######################
//!###################################################
// Importamos la libreria
const http = require('http')

// Definimos una funcion de respuesta
function responderPeticion (req, res) {
  res.end('Hola Mundo')
}

// Instanciamos el servidor a traves de http
const server = http.createServer(responderPeticion)

// Ponemos a la escucha al servidor
server.listen(3000)