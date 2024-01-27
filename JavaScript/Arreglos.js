//? -----------------------------------------------------------
//?     ARREGLOS EN JAVASCRIPT
//? -----------------------------------------------------------
//?     MATRICES
//? -----------------------------------------------------------
/*
-- Esta es la forma mas facil en la que se puede acceder a los
-- valores de una matriz o arreglo bidimencional

* MATRIZ:     [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
* Indice i:       0           1           2
* Indice j:     0  1  2    0  1  2    0  1  2

* matriz[2][1] --> 8
*/


//? -----------------------------------------------------------
/*
-- Esta es una de las formas en las que podemos declarar un arrgeglo
-- con valores explicitos en JavaScript
*/
let names = ['Josue', 'Jesiel', 'Chava'];

/*
-- Esta es otra forma en la que podemos declarar un arreglo con
-- valores explicitos. Esta funcion acepta los valores como tal
-- o el numero de espacios que debe reservar el arreglo.
*/
let names2 = new Array('Josue', 'Jesiel', 'Chava');
let names3 = new Array(3);

/*
-- Esta es la forma en la que verficamos que un elemento sea un array
-- Devuelve true o false segun sea el elemento evaluado.

TODO: Investigar todos los metodos del tipo Array
*/
const array1 = [];
const isArray = Array.isArray(array1); // true

/*
-- Agrega un elemento al final del arreglo original. Retorna la posicion
-- en la que quedo el elemento insertado, lo cual seria lo mismo a la
-- longitud del arrgelo.
*/
names.push('Andres');
/*
-- Agrega un elemento al inicio del arreglo original. Retorna la
-- longitud total del arreglo despues de haber insertado el o los
-- elementos
*/
names.unshift('Brayan');
/*
-- Elimina eñ ultimo elemento del arreglo y lo retorna
*/
names.pop();
/*
-- Elimina el primer elemento del arreglo y lo retorna
*/
names.shift();
/*
-- Une los elementos del arreglo en una sola cadena, estos iran
-- separados por el caracter que se pase en el parametro, el cual
-- puede incluso ser vacio, espacios, saltos de linea, etc.
*/
names.join(',');
/*
-- Invierte el orden del arrgelo de atras hacia adelante
*/
names.reverse();
/*
-- Ordena los elementos del arreglo y retorna el arreglo ordenado.
-- Para arreglos de cadenas de texto, retornara las cadenas ordenadas
-- de forma alfabetica. Para el caso de arreglos con valores numericos
-- se debe pasar una funcion callback que realiza comparaciones entre
-- a y b para ordenar el arreglo, ya sea ascendente o descendente.
*/
//TODO: Investigar la funcion para ordenar valores numericos con sort
names.sort();
/*
-- Sustituye o elimina valores en base a los parametros que se le dan
-- al metodo. Son 3 parametros, el primero es la posicion en la que
-- empieza el recorte, el segundo parametro es la cantidad de elementos
-- que va a sustituir o eliminar a partir de la posicion del primer
-- parametro, y el tercer parametro es el valor con el cual se van a
-- sustituir los valores que estan dentro del rango de los parametros
-- 1 y 2. El tercer parametro es opcional.
-- 
-- Este metodo retorna los valores que fueron recortados/sustituidos del
-- arreglo original, estos vienen como un nuevo arreglo. Es como partir
-- pedacitos de un arreglo.
*/
//TODO: Investigar la descripcion correcta de .splice()
names.splice(0, 1, 'Andres');
/*
-- Recorta las posiciones del arreglo que se establecen en los
-- parametros y las devuelve como un nuevo arreglo.
-- 
-- Como podras ver, es exactamente lo mismo que .splice(), la diferencia
-- es que .slice() solo recorta y no permite sustituir a diferencia
-- de .splice()
*/
//TODO: Investigar el funcionamiento de slice
names.slice(0, 3);
/*
-- Verifica que el valor recibido por parametros se encuentre en el
-- arreglo que se esta evaluando, retorna un booleano
*/
names.includes('Josue'); // true
/*
-- Devuelve la posicion del elemento en el arreglo que se esta
-- evaluando, en caso de que el elemento no exista en el arrgelo,
-- entonces devuelve '-1'.

-- La funcion lee el arreglo de izquierda a derecha y devolvera el
-- indice de la primer coincidencia que encuentre
*/
names.indexOf('Chava'); // 2
/*
-- Hace exactamente lo mismo que el anterior, pero este lee el arreglo
-- de derecha a izquierda, contrario a .indexOf(). Esto significa que
-- si hay mas de un elemento igual al recibido por parametro, la funcion
-- solo devolvera el indice de el primero que encuentre de derecha a
-- izquierda
*/
names.lastIndexOf('Chava'); // 2
/*
-- Este metodo concatena los elementos de 2 arrays formando uno solo
-- sin mutar ninguno de los 2 arreglos originales, este mas bien retorna
-- un nuevo arreglo con todos los valores de ambos arreglos en 1 solo
-- arreglo
*/
const allNames = names.concat(names2);
/*
-- Aplana los nieveles de anidacion de un arreglo, es decir, si varios
-- arreglos y elementos se encuentran anidados dentro de un mismo
-- arreglo y de forma desordenada, esta funcion devuelve los elementos
-- sin anidacion y en un solo arreglo:
-- 
-- [[[1]], [2], [[3]], 4] --> [1, 2, 3, 4]
*/
names.flat();