//? -----------------------------------------------------------
//?     FUNCIONES ESPECIALES DE UTILIDAD
//? -----------------------------------------------------------
/*
-- Muestra un mensaje en una ventana emergente del navegador.
*/
alert('Hello World!');

/*
-- Muestra una ventana emergente del navegador con un input para
-- ingresar informacion.
*/
prompt('¿Cual es tu nombre?');

/*
-- Imprime elementos en el documento HTML usando JavaScript.
*/
document.write('Hello World');

/*
-- Concatena elementos, al menos uno de los elementos tiene que ser un
-- String
*/
concat();

/*
-- Nos devuelve el valor de verdad de la variable evaluada, ya sea
-- como tru o false, sirve para cualquier tipo de variable u objeto.
*/
console.log(!!variable);

/*
-- Devuelve el tipo de dato de la variable/objeto que se le pase.
-- Tambien funciona con funciones
*/
const type = typeof 1; // Number
if ((typeof 1) === 'function') console.log('Is a function');

/*
-- Permite construir plantillas de texto, muy util cuando se desea
-- concatenar el valor de variables a la plantilla de texto
*/
const saludo = `Hello ${variable}!`;

/*
-- Verifica si el numero evaluado es un valor numerico y no otra cosa,
-- devuelve true o false dependiendo del valor evaluado.
*/
const nan = isNaN(1);

/*
-- Establece el numero de digitos que se van a mostrar despues del
-- punto decimal de un numero decimal, acepta un rango desde 0 - 20
*/
const decimalNumber = 3.141645678;
decimalNumber.toFixed(4); // 3.1416

/*
-- Este es un intercambio de valores usando la sintaxis de
-- desestructuracion que viene en ES6. Con esta sintaxis podemos
-- ahorrarnos el proceso de crear una variable temporal para guardar
-- el intercambio y despues asignarla:
-- 
-- temporal = array[i+1];
-- array[i+1] = array[i];
-- array[i] = temporal
-- 
-- Aqui lo que se hace es guardar la posicion i+1 para intercambiarla
-- con la posicion i pero sin perderla usando la variable temporal.
-- 
-- La instruccion de abajo, hace exactamente lo mismo.
*/
//* [x, y] = [y, x];


//? -----------------------------------------------------------
//?     TIPOS DE DATOS
//? -----------------------------------------------------------
/*
-- Estos son los datos primitivos en JavaScript.
-- NOTA: El valor de verdad de null y undefined es false.
*/
String
Number
Boolean
null
undefined
/*
-- NaN tambien es un tipo de dato, pero se considera un tipo
-- de dato especial de JavaScript.
*/
NaN


//? -----------------------------------------------------------
//?     DATOS ESPECIALES
//? -----------------------------------------------------------
/*
-- En JavaScript, disponemos de datos especiales, los cuales nos
-- proveen de metodos muy utiles para desarrollar logica en
-- nuestras aplicaciones:
*/


//? --------------------------------------------
//?     Array
//? --------------------------------------------
const arr1 = [1, 2, 3];
/*
-- Devuelve true o false en base a si el elemento evaluado es o no
-- un elemento de tipo Array
TODO: Investigar todos los metodos de Array
*/
const isArray = Array.isArray(arr1); // true


//? --------------------------------------------
//?     Number
//? --------------------------------------------
const num2 = 1;
const chain = '12345'
/*
-- Devuelve true false en base a si el elemento evaluado es o no
-- un valor entero
TODO: Investigar todos los metodos de Number
*/
const isInteger = Number.isInteger(num2);

/*
-- Castear un valor a un valor numerico (number)
*/
const nowIsNumber = Number(chain);


//? --------------------------------------------
//?     Object
//? --------------------------------------------
const person = {
    name: 'Josue',
    age: 27,
    occupation: 'Backend Developer'
};

/*
TODO: Investigar todos los metodos de Object
-- Devuelve un arrray con las keys y los values del objeto recibido
-- por parametros. Y dado que devuelve un arreglo, entonces tenemos
-- acceso a metodos de arrya como .length .map .filter etc 
*/
const keyValues = Object.entries(person);

/*
-- Verifica si el objeto recibido como primer parametro, tiene la
-- propiedad(key) recibida en el segundo parametro. Devuelve un
-- booleano.

-- Es una forma de verificar si cierto objeto contiene cierta
-- propiedad con un cierto valor.
*/
const hasName = Object.hasOwnProperty.call(person, 'name');


//? -----------------------------------------------------------
//?     TIPOS DE VARIABLES
//? -----------------------------------------------------------
/*
-- En JavaScript tenemos 3 tipos de variables
*/
const num = 1; // Variable fija o constante, su scope es de bloque
var num1 = 2; // Se puede modificar su valor y su scope es global
let num3 = 3; // Se puede modificar su valor pero su scope es local/bloque

/*
-- Tambien podemos declarar variables separadas por comas
*/
var name = 'Josue', age = 26, occupation = 'developer';
let day = 'Monday', month = 'November', anio = 2023;



//? -----------------------------------------------------------
//?     OPERADORES
//? -----------------------------------------------------------
x+=y; // x = x + y;
x-=y; // x = x - y;
x*=y; // x = x * y;
x/=y; // x = x / y;
x%=y; // x = x % y;
x**=y; // x = x ** y;


//? -----------------------------------------------------------
//?     FORMAS DE DECLARAR FUNCIONES
//? -----------------------------------------------------------
/*
-- Estas son las diferentes formas de declarar funciones en JavaScript,
-- la segunda son llamadas funciones flecha y tienen algunas propiedades
-- extra a las funciones normales:
*/
function saludar(nombre) {
    return 'Hola ' + nombre;
}

const saludar = (nombre) => `Hola ${nombre}`;

const saludar = nombre => document.write(`Hola ${nombre}`);