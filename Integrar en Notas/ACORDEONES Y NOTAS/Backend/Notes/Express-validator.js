//! ####################################################
//! GUIA DE EJEMPLO PARA USAR EXPRESS-VALIDATOR.JS #####
//! ####################################################

//! ####################################################
//! CONSTANTE DE VALIDACIONES ##########################
//! ####################################################
const { check } = require('express-validator')
const { validateResult } = require('../../helpers/validateHelper')

const validateCreate = [
  check('name')
    .exists()
    .notEmpty(),
  (req, res, next) => {
    validateResult(req, res, next)
  }
]
// module.exports = { validateCreate }

//? validateCreate: 
//    Constante donde se establecen las validaciones de los campos
//? check(''): 
//    Aqui se establece el campo que se va a validar y de forma encadenada las validaciones que se le van a aplicar al campo especificado
// NOTA: Los campos y sus validaciones se separan por comas
// NOTA: El ultimo campo que recibe la constante es la funcion que ejecuta las validaciones, esta recibe la request, la response y la funcion next.
// En este caso nosotros estamos creando un helper, ya que este codigo se va a repetir para todas las constantes de validacion, por ende le enviamos la req, res y next

//! ####################################################
//! HELPER DE VALIDACION DE CAMPOS #####################
//! ####################################################
require('dotenv').config()
const { HTTP_FORBIDDEN } = process.env

const { validationResult } = require('express-validator')

const validateResult = (req, res, next) => {
  try {
    validationResult(req).throw()
    return next()
  } catch (error) {
    res.status(HTTP_FORBIDDEN).send({
      code: Number(HTTP_FORBIDDEN),
      error: error.array()
    })
  }
}
// module.exports = { validateResult }

// Este es un bloque de codigo que sera ejecutado por todas las constantes de validacion de las entidades, es por eso que lo separamos en un helper para solo ser llamado y evitar la repeticion de codigo
//? validationResult(req).throw(): 
//    Esta funcion es la que ejecuta las validaciones que establecimos para los campos, en caso de que alguna validacion falle, esta funcion devuelve un objeto con los detalles de cada error. A traves del throw() lanzamos estos errores para ser capturados en el catch y devolverlos como respuesta al servidor
//? error.array():
//    Accede y muestra el contenido de los errores encontrados durante las validaciones

//! ####################################################
//! AGREGAR EL MIDDLEWARE DE VALIDACION ################
//! ####################################################
const { Router } = require('express')
const videogameController = require('../controllers/videogame.controller')
const { validateCreate } = require('../../validators/videogame')

const router = Router()

router.post('/', validateCreate, videogameController.saveVideogame)

// module.exports = router

// Agregamos nuestra constante de validaciones como un middleware a la ruta en la cual queremos realizar la validacion, de esta forma las validaciones ocurren antes de siquiera llegar al controller de la entidad