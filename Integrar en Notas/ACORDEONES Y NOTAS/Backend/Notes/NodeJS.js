//!##############################################################
//! CONCEPTOS DE NODEJS #########################################
//!##############################################################
//? NodeJS: 
//  Entorno de ejecucion para Javascript

//? REPL: 
//  Read, Evalue, Print, Loop (Ciclo de lectura, evaluacion e 
// 	impresion)

//? node: 
//  Para entrar al REPL de Node JS

//? .break:
// 	Se usa algunas veces cuando quieres salir de la ejecucion
//? .clear:
// 	Es un segundo alias para break, es la misma funcion que el clear
// 	en la consola bash.
//? .editor
// 	Entra al modo editor de NodeJS, es algo asi como su propio editor
// 	de codigo en la terminal
//? .exit
// 	Sale de REPL
//? .help
// 	Muestra todos estos comandos de ayuda y su descripcion
//? .load
// 	Carga un archivo de Javascript desde un archivo dentro de la sesion
// 	REPL
//? .save
// 	Guarda todos los comandos evaluados en esa sesion REPL

//!##############################################################
//! CONCEPTOS DE NPM ############################################
//!##############################################################
//? NPM: Node Package Management (Administrador de Paquetes de Node)

//? npm install express
// 	Con este comando es como instalamos paquetes de npm en nuestra
// 	carpeta del proyecto, en este caso, estamos instalando express.
// 	A su vez, cuando instalemos algun paquete, se creara automaticamente
// 	una dependencia en nuestro archivo JSON. Esto es, parque que cuando
// 	alguien desargue nuestra aplicacion en cualquier computadora, tenga
// 	que descargar esas dependencias para que pueda funcionar.

//? npm uninstall express
// 	Es el comando con el cual desinstalamos paquetes npm de nuestra
// 	carpeta del proyecto.

//? npm install express@4.15.1
// 	Esta es la forma en la que podemos instalar versiones especificas
// 	de cierto paquete de node, por ejemplo, aqui estamos instalando
// 	una version anterior a la version mas actual del paquete express

//? npm install nodemon --save-dev
// 	Con este comando podemos instalar los paquetes de npm especificando
// 	que seran una dependencia para el desarrollo, esto significa que estas
//   dependencias solo se van a requerir en desarrollo y no en produccion

//? npm install node-fetch@2 --global
// 	Con este comando le indicamos al Node Package Managment que deseamos
// 	instalar cierto paquete de Node, de forma global en nuestro proyecto,
// 	esto solo sucedera si tenemos los permisos para hacerlo

//? npm install
// 	Instala todas las dependencias que por defecto vienen con el 
// 	paquete de NodeJS

//? npm install ci
//   Instala todas las dependecias en la version exacta establecida en el
//   package.json

//? npm run 'nombre del archivo'
// 	Ejecuta el script de entrada de nuestro proyecto

//!##############################################################
//! MODULOS BUILT-IN ############################################
//!##############################################################

//!##############################################################
//! MODULO OS ###################################################
//!##############################################################
const os = require('os');
const { Console } = require("console");
	// El modulo os es el que nos permite obtener informacion de nuestro
	// sistema operativo, en este caso, este modulo no es global, por lo
	// que es necesario crear nuestra sentencia require para importarlo
	// al modulo
console.log(os.type());
	// Nos retorna una cadena con el tipo de sistema operativo en el que
	// se esta ejecutando nuestra aplicacion de node
console.log(os.homedir());
	// Nos devuelve una cadena con el directorio padre del sistema, seria
	// la ruta original del sistema de archivos C:/Documentos/etc
console.log(os.uptime());
	// Nos devuelve un entero con el numero de segundos que han pasado
	// desde que se activo el sistema operativo, desde su encenido
console.log(os.userInfo());
	// Nos retorna un objeto con informacion sobre el usario del equipo

  
//!##############################################################
//! MODULO TIME #################################################
//!##############################################################
// 1 segundo = 1,000 milisegundos
function sumar(a,b){
  console.log(a + b);
}
setTimeout(sumar, 3000, 5, 5);
	// El modulo time nos proporciona funciones que nos permiten trabajar
	// con relojes y temporizadores, en este caso la funcion setTimeout
	// define un tiempo de espera para que cierta funcion sea ejecutada,
	// recibe como parametro la funcion, el tiempo de espera en milisegundos
	// y el parametro que recibe la funcion, si la funcion recibe mas de un
	// argumento, estos solo se pasan al final separados por comas

setImmediate(funcion, argumento1, argumento2);
	// Esta funcion del modulo time, nos permite establecer que una funcion
	// se ejecute inmediatamente despues de que se ejecute todo el codigo
	// asincrono, en este caso, seria casi casi al final de todas las demas
	// ejecuciones

setInterval(suma, 1500, 'Node JS');
	// Nos sirve para ejecutar un codigo un numero infinito de veces con
	// un retraso especifico de milisegundos entre cada ejecucion. Hasta que
	// termine ese proceso.
	// Los argumentos que recibe son: funcion a ejecutar, intervalo de
	// tiempo entra cada ejecucion de la funcion y los argumentos que
	// recibe la funcion

//!##############################################################
//! MODULO FS ###################################################
//!##############################################################
const fs = require('fs');

fs.readFile('index.html', 'utf-8', (err, contenido) => {
	if (err) {
		throw err;
	}
	console.log(contenido);
});
	// Este modulo nos permite acceder a funciones para manipulacion de 
	// archivos, en este cado readFile nos permite leer el conteido de
	// un archivo. En este ejemplo intentamos leer el contenido de un archivo
	// html, le pasamos el nombre del archivo(poner ruta si es necesario),
	// el fromato en el que queremos que se codifique, una funcion que
	// verifica si ocurrio algun error o en caso contrario que muestra el
	// contenido. La sentencia throw, nos permite terminar la ejecucion 
	// del programa justo cuando ocurreo un error, asi el codigo siguiente
	// ya no se ejecuta

fs.rename('index.html', 'main.html', (err) => {
  if (err) {
    throw err;
  }
  console.log('Nombre cambiado exitosamente');
});
	// Este es el metodo del modulo fs con el que podemos cambiar el nombre
	// de algun archivo, recibe como parametros el nombre original del
	// archivo, el nuevo nombre para el archivo, y una funcion, la cual
	// verifica que no haya ocurrido algun error al momento de cambiar el
	// archivo, si es asi lanzamos el error, caso contrario notificamos
	// al usuario

fs.appendFile('main.html', '<p>Hola<p>', (err) => {
  if (err) {
    throw err;
  }
  console.log('Archivo actualizado');
});
	// Este metodo nos permite agregar elementos a un archivo, recibe como
	// parametros el nombre del archivo a modificar, el contenido que se
	// le va a agregar al final del archivo, y la funcion que captura el
	// error o la correcta ejecucion. Si el archivo no existe, el metodo
	// lo crea, en este caso append agrega el contenido al archivo, sin 
	// reemplazar lo que ya contenia el archivo originalmente

fs.writeFile('main.html', 'Nuevo Contenido', (err) => {
  if (err) {
    throw err;
  }
  console.log('Contenido reemplazado exitosamente');
});
	// Este metodo del modulo fs nos permite crear un nuevo archivo con
	// el contenido que le pasemos como parametro, si el archivo con ese
	// nombre ya existe, entonces va a reemplazar el contenido que ya
	// tenia con el contenido que nosotros le pasamos

fs.unlink('index.html', (err) => {
	if (err) {
		throw err;
	}
	console.log('Archivo eliminado exitosamente.');
});
	// Este metodo del modulo fs nos permite eliminar archivos, en este caso
	// recibe el nombre del archivo a elminiar y la funcion que captura
	// el error o la correcta ejecucion del metodo

// Estas funciones trabajan de manera asincrona, lo que significa que
// primero se ejecutara todo el codigo sincrono y al final se ejecutaran
// estas funciones, ademas estas funciones nos se ejecutaran en el orden
// en el que esten, lo haran en funcion de cual se ejecute mas rapido.

// Si queremos que se ejecuten de forma sincrona solo hay que agregar
// el sufijo Sync a la funcion y asi le indicamos que trabaje de forma
// sincrona (fs.unlikSync())

//!##############################################################
//! ARCHIVOS JSON ###############################################
//!##############################################################
// Al importar un archivo JSON con la clausula require, este por detras
// parsea el JSON a un modulo de Javascript, de esta forma podemos
// acceder y manipular sus datos con codigo
const curso = require('./curso.json');
const { EventEmitter } = require("stream");

console.log(curso.titulo);
  // Una ves que usamos la sentencia require, podemos acceder a los
  // valores del archivo JSON como si fuera un objeto

let infoCurso = {
  "titulo": "Aprende Node JS",
  "numVistas": 45642,
  "numLikes": 21123,
  "temas": ["Javascript", "Node.js"],
  "esPublico": true
}

//? Serializacion y Deserializacion
// Convertir un objeto a bytes y viceversa
// Objeto --> Cadena de Caracteres
let infoCursoJSON = JSON.stringify(infoCurso);
  // Este metodo nos permite transformar un objeto a una cadena de
  // caracteres en formato JSON

// Cadena de Caracteres --> Objeto
let infoCursoObjeto = JSON.parse(infoCursoJSON);
  // Con esta funcion es como podemos hacer el caso contrario, a la 
  // funcion anterior, en este caso estamos parseando una cadena de
  // caracteres a un objeto

//!##############################################################
//! EVENTOS EN NODEJS ###########################################
//!##############################################################
const EventEmitter = require('events');
	// Asi es como importamos los eventos de la clase EventEmitter para
	// poder usarlos en nuestro archivo de Javascript

const emisorEventos = new EventEmitter();
	// Creamos una instancia para acceder a todos sus metodos a traves
  // de nuestra variable

emisorEventos.on('Compra', (articulo) => {
	console.log(`${articulo} agregado al carrito`);
});

emisorEventos.emit('Compra', 'Teclado Gamer');
	// En esta linea lo que estamos haciendo es, primero, definir el
	// evento compra a traves de la funcion .on del EventEmmiter, 
  // esta funcion es algo asi como un escuchador que esta pendiente
	// de que se emita cierto evento, en este caso esta pendiente de que
	// se emita el evento compra, cuando se emite ese evento, entonces
	// se ejecuta la funcion que viene asociada, en este caso solo imprime
	// un mensaje.

	// La segunda linea es la que emite el evento (emit), es algo asi como
	// una lanzador del evento, este activa la funcion del evento que creamos con
  // .on y entonces se ejecuta la funcion que esta asociada al evento

	// La funcion tambien puede recibir parametros, en este caso solo
	// recibe 1 y se le pasa el valor en los argumentos de emit, separado
	// por comas

//!##############################################################
//! PROMESAS EN JAVASCRIPT ######################################
//!##############################################################
//! POSIBLES ESTADOS DE UNA PROMES:
//? pending (pendiente)
//? fulfilled (completada)
//? rejected (rechazada)

const promesCumplida = true;

const miPromesa = new Promise((resolve, rejected) => {
	setTimeout(() => {
		if (promesCumplida) {
			resolve('Promesa Cumplida!');
		} else {
			rejected('Promesa Rechazada...');
		}
	}, 3000);
});
	// Esta seria la estructura o la forma en la cual creamos una promesa
	// en javascript, las promesas nos sirven para verificar si un evento
	// asincrono en se ejecuto de manera correcta o no.
	
	// La funcion que recibe la promesa es una funcion callback, los valores
	// de resolve y rejected son funciones, por lo que al ser enviadas como
	// parametro, convierten a la funcion en un callback, no debemos cambiar
	// el nombre de esas variables

  // Cada funcion se ejecuta en el caso de que la promesa se resolvio o se
  // rechazo, en ambos casos retorna otra promesa, la cual debe ser manejada
  // en el exito o el error

const manejarPromesCumplida = (valor) => {
	console.log(valor);
}

const manejarPromesRechazada = (razonRechazo) => {
	console.log(razonRechazo);
}

miPromesa.then(manejarPromesCumplida, manejarPromesRechazada);
	// Esta es la forma en la que manejamos los casos para una promesa
	// en este caso son 2 funciones, una para el caso de la promesa
	// cumplida y otra para el caso de la promesa rechazada, estas 2
	// funciones se le pasan como parametro al metodo then, para que este
	// realice las operaciones en base al resultado de la ejecucion de la
	// promesa, ya sea cumplida o rechazada

miPedidoDePizza
	.then((mensajeDeConfirmacion) => {
		console.log(mensajeDeConfirmacion);
	})
	.then(null, (mensajeDeError) => {
		console.log(mensajeDeError);
	});
	// Esta es otra sintaxis con la que podemos colocar todo lo anterior
	// en un solo bloque de codigo, y funciona de igual forma que las lineas
	// de arriba donde tenemos las funciones separadas

miPedidoDePizza
	.then((mensajeDeConfirmacion) => {
		console.log(mensajeDeConfirmacion);
	})
	.catch((mensajeDeError) => {
		console.log(mensajeDeError);
	});
	// De igual forma, podemos usar la sentencia catch para poder capturar
	// cuando la promesa no se ejecuta correctamente, hace los mismo que 
	// poner un segundo then, pero a este no es necesario poner al valor null
	// como parametro, ya que esta funcion se ejecuta por defecto cuando la
	// promesa es rechazada

function ordenarProducto(producto) {
	return new Promise((resolve, rejected) => {
		console.log(`Ordenando: ${producto} de la tienda`);
		setTimeout(() => {
			if (producto === 'taza') {
				resolve('Ordenando taza de la tienda...');
			} else {
				rejected('Este producto no esta disponilbe actualmente');
			}
		}, 2000);
	});
}

function procesarPedido(respuesta) {
	return new Promise((resolve, rejected) => {
		console.log('Procesando respuesta...');
		console.log(`La respuesta fue: ${respuesta}`);
		setTimeout(() => {
			resolve('Gracias por tu compra. Disfruta tu producto');
		}, 4000);
	});
}

ordenarProducto('taza')
	.then(respuesta => {
		console.log('Respuesta recibida');
		console.log(respuesta);
		return procesarPedido(respuesta);
	})
	.then(respuestaProcesada => {
		console.log(respuestaProcesada);
	})
	.catch(error => {
		console.log(error);
	});
	// Esta es uan forma en la que podemos crear procesos asincronos usando
	// encadenamiento de promesas, en este caso encadenamos la funcion ordenar
	// producto con la funcion procesar pedido, asi, aunque ambas funciones
	// son asincronas, estas se ejecutaran en el mismo orden siempre, porque
	// estan encadenadas una con la otras

async function realizarPedido(producto) {
	try {
		const respuesta = await ordenarProducto(producto);
		console.log('Respuesta recibida');
		const respuestaProcesada = await procesarPedido(respuesta);
    console.log(respuestaProcesada);
	} catch (error) {
		console.log(error);
	}
}
	// Esta es otra sintaxis con la cual podemos ejecutar codigo asincrono
	// en esta utilizamos las palabras reservadas async y await, la primera
	// se usa antes de la palabra function y se usa para establecer que esa
	// sera una funcion asincrona, la segunda palabra se usa antes de la 
	// invocacion de alguna funcion asincrona, de esta forma se le indica al
	// compilador que debe esperar hasta que esa funcion se ejecute para ahora
	// si continuar con el demas codigo