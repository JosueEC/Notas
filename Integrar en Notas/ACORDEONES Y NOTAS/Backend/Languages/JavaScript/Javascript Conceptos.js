//!##############################################################
//! NIVELES DE LENGUAJES DE PROGRAMACION ########################
//!##############################################################
// Estos lenguajes, al final se transforman a lenguaje maquina
// para que el ordenador pueda entenderlo y ejecutarlo

//? 0.-LENGUAJE MAQUINA: 0 y 1 o binario
//
//? 1.-LENGUAJE ENSAMBLADOR: Instrucciones muy especificas que se le dan
//    al ordenador

//   Nota: Estos dos primeros se consideran como lenguajes de bajo nivel,
//   se dice esto, porque ambos tienen acceso directo sobre el hardware y 
//   la arquitectura del ordenador

//? 2.-LENGUAJE MEDIO-BAJO NIVEL: En esta categoria entran C y C++, estos dos
//   lenguajes tienen caracteristicas de un lenguaje de alto nivel y de un
//   lenguaje de bajo nivel, estos lenguajes ya son mas legibles para el
//   humano, pero tambien pueden acceder a los registros de memoria del 
//   ordenador

//? 3.-LENGUAJES MEDIO-ALTO NIVEL: Son la mayoria de lenguajes modernos que
//   se estan utilizando hoy en dia

//? 4.-LENGUAJES DE ALTO NIVEL: Son lenguajes basados en los lenguajes de
//   medio nivel, e igual podemos incluir a los frameworks

// Nota: Los frameworks son una serie de caracteristicas adicionales a los
//   lenguajes de medio nivel, por lo general son librerias, esto con la
//   finalidad de volver aun mas sencillo la labor de programar


//!##############################################################
//! PROCESO DE CONVERSION #######################################
//!##############################################################
// 1.-TRADUCTOR: Es un programa que se encarga de traducir nuestro codigo 
//     escrito en un lenguaje de medio o alto nivel a lenguaje maquina, para
//     que la computadora pueda interpretarlo.

// Nota: Existen lenguajes compilados e interpretados, los primeros primero
//     deben ser compilados por el traductor para despues ser interpretados
//     por el ordenador, 

//!##############################################################
//! CONTROL DE VERSIONES ########################################
//!##############################################################
// GITHUB: Es una plataforma para el control de versiones de un proyecto

// COMMIT: Un commit, seria lago equivalente a crear una nueva version
//         de un programa

//!##############################################################
//! CONCEPTOS DE LA POO ################################
//!##############################################################

//? ABSTRACCION: 
//  Cuando definimos las propiedades de un objeto o lo que es lo
// 	mismo, una clase, debemos solo definir las necesarias u utilizadas, con
// 	pocas propiedades se puede definir correctamente a una clase u objeto

//? ENCAPSULAMIENTO: 
//  En una sola clase debemos de contener todos los metodos
// 	definidos para un objeto, pero cada objeto podra tener sus propios
// 	valores definidos para cada propiedad

//? HERENCIA: 
//  Podemos tener una clase padre, de lc cual pueden derivar otras
// 	clases que serian clases hijo, estas clases hijo pueden heredar todas
// 	las propiedades y funciones del padres y ademas tener las propias 
// 	definidas para ellos.

//? POLIMORFISMO: 
//  Nosotros podemos definir varios metodos con el mismo nombre
// 	pero cada metodo realizara una accion diferente quiza o en si solo
// 	tendrian en comun el nombre, la diferencia serian los parametros que
// 	definen cada metodo.

//? Ejemplo:
// 	Cuando te registras en una pagina y puedes hacerlo por diferentes
// 	metodos:

// 	resgistro('correo');
// 	registro('telefono');
// 	registro('google');
// 	resgitro('facebook');

//!##############################################################
//! CONCEPTOS DE LA PROGRAMACION ################################
//!##############################################################
//? PROGRAMACION FUNCIONAL:
//? 	1.-Funciones Puras:
// 		  Se refiere a crear funciones que realizen un proceso y retornen un
// 		  resultado que no es modificado si este se vuelve a ejecutar, en si
// 		  que no esten accediendo a variables que esten fuera de esa funcion.

// 		  Cuando las funciones tienen dentro variables que se van modificando
// 		  se dice que tienen un estado interno.


// RECURSIVIDAD: Factorial de un Numero
function factorial(num) {
	let fact = 0;
	for(let i = num-1; i > 0; i++) {
		fact = fact * i;
	}
	return fact;
}

console.log(factorial(5));

function factorial_recursivo(num) {
	if (num === 1) {
		return 1;
	} else {
		return num * factorial(num-1);
	}
}

console.log(factorial_recursivo(5));
	// El codigo que se muestra anteriormente, realiza la funcion de operacion
	// factorial de un numero, se muestra la forma en la que se resuelve con
	// programacion estructurada y la forma mas optima que seria con 
	// recursividad.

//!##############################################################
//! STACKS DE DESARROLLO ########################################
//!##############################################################
//! 		STACKS BASADOS EN PHP
//? WAMP:
// 	-Windows
// 	-Apache
// 	-MySQL
// 	-PHP, Perl Python

//? LAMP:
// 	-Linux
// 	-Apache
// 	-MySQL
// 	-PHP, Perl, Python

//? XAMPP:
// 	-X(Multiplataforma)
// 	-Apache
// 	-MySQL
// 	-PHP, Perl, Python

//! 		STACKS BASADOS EN JAVASCRIPT

//? MERN:
// 	-MongoDB (Base de Datos)
// 	-Express (Framework de Back-end)
// 	-ReactJS (Framework de Front-end)
// 	-NodeJS (Ecosistema)

//? MEAN:
// 	-MongoDB
// 	-Express
// 	-AngularJS
// 	-NodeJS

//? MEVN:
// -MongoDB
// -Express
// -VueJS
// -NodeJS

//? PERN:
// 	-PostgresSQL
// 	-Express
// 	-ReactJS
// 	-NodeJS
