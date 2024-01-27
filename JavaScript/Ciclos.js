//? -----------------------------------------------------------
//?     CICLOS FOR EN JAVASCRIPT
//? -----------------------------------------------------------
const persona = {
    name: 'Josue',
    age: '26',
    occupation: 'Backend Developer'
};

/*
-- Podemos usar 'for in' para recorrer objetos, 'propiedad' toma el
-- valor de cada key del objeto que se pase despues de 'in'. Con la
-- instruccion del console.log podemos acceder a los valores del
-- objeto en base a la key recibida en 'propiedad' y usando bracket
-- notation.
*/
for (const propiedad in persona) {
    console.log(persona[propiedad]);
};

/*
-- 'for of' tambien puede recorrer objetos, pero este nos recorre el
-- valor del indice de cada propiedad del objeto. En la mayoria de los
-- casos tiene mas utilidad 'for in'
*/
for (const personaIndex of persona) {
    console.log(personaIndex);
};

/*
-- 'for' tambien nos permite recorrer todos los elementos de un arrgelo
-- este es mas util cuando se desea tener conocimiento de los indices
-- del arreglo y realizar manipulaciones en base a los mismos.

-- Recorrer una matriz es un gran ejemplo para usar 'for'.

-- A traves de palabras especiales como 'break' y 'continue' podemos
-- replicar comportamientos parecidos a los demas ciclos como find,
-- filter, map, etc.

-- 'break' termina la ejecucion del ciclo en el que se encuentra
-- contenido. En este caso los ciclos se terminan cuando el valor
-- de 'i' es 3.
*/
for (let i = 0; i < 10; i++) {
    if (i === 3) {
        break;
    }
}

/*
-- Por otro lado, 'continue' lo que hace es saltarse el ciclo pero
-- continua con los demas ciclos. En este caso, cuando el valor de 'i'
-- sea 3, avanza al siguiente ciclo (4) sin ejecutar el codigo que va
-- despues del if. Esto solo ocurre para el ciclo 3.
*/
for (let i = 0; i < 10; i++) {
    if (i === 3) {
        continue;
    }
}


/*
-- 'forEach' nos permite recorrer los elementos de un arreglo y poder
-- realizar acciones en cada elemento recorrido a traves de una funcion
-- callback que es enviada como parametro.

-- 'forEach' no muta el arreglo original, solo lo recorre, por ende su
-- retorno es 'undefined' y en algunos navegadores es mas lento que
-- otros ciclos.
*/
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((num) => num + 1); // undefinded

/*
-- 'filter' nos permite recorrer los elementos de un arreglo y filtrar
-- los mismos a partir de una condicion establecida en la funcion
-- callback que recibe como parametro.

-- 'filter' tampoco muta el arreglo original, pero este si devuelve
-- un arreglo con los elementos filtrados que cumplieron con la condicion
-- establecida en el callback
*/
const languages = ['java', 'javascript', 'python', 'golang'];
const busqueda = languages.filter((language) => language.length > 4); // Array

/*
-- 'map' tambien nos permite recorrer los elementos de un arreglo y
-- aplicar acciones definidas en la funcion callback que se envia por
-- parametro.

-- La diferencia entre 'forEach' y 'map' es que 'map' si muta el arreglo
-- original y devuelve ese arreglo mutado. Igualmente en algunos navegadores
-- 'map' es mas rapido que 'forEach'
*/
const numbersPlusOne = numbers.map((number) => number + 1);

/*
-- 'find' tambien nos permite recorrer los elementos de un arreglo y
-- evaluarlos en base a la condicion establecida en la funcion callback
-- que se envia como parametro.

-- 'find' se detiene en el momento en el que encuentra el primer elemento
-- que cumple con la condicion del callback y retorna ese valor encontrado
-- en caso de que ningun valor cumplio la condicion entonces retorna
-- 'undefined'
*/
const positiveNumbers = [1, 2, -1];
const negativeValue = positiveNumbers.find((number) => Math.sign(num) === (-1));

/*
-- 'every' igualmente recorre todos los elementos de un array, su
-- objetivo es verificar que todos los elementos del arrary cumplan
-- con una misma condicion establecida en la funcion callback.

-- Aqui estamos verificando que todos los elementos del arreglo decenas
-- sean mayores a 10, si esto se cumple retorna true, caso contrario
-- retorna false.
*/
const decenas = [30, 39, 29, 1, 10, 13]; 
const areDecenas = decenas.every((decena) => decena > 10); // false

/*
-- 'reduce' nos permite realizar operaciones con todos los elementos
-- de un arrgelo. Recibe 2 parametros, el primer es el elemento
-- anterior del arrgelo y el segundo es el elemento actual del arreglo
*/
// TODO: Investigar mejor el metodo reduce
const valuesTest = [1, 2, 3];
const sumaReduce = valuesTest.reduce((a, b) => a + b, 0);

//? -----------------------------------------------------------
//?     EJEMPLOS DE USO DE LOS CICLOS DE JAVASCRIPT
//? -----------------------------------------------------------
// Para recorrer arreglos de objetos y acceder a las propiedades
const amigos = [
    {
        name: 'Josue',
        edad: 26
    },
    {
        name: 'Jesiel',
        edad: 30
    }
];

const edades = amigos.map((amigo) => amigo.edad);// [26, 30]

//? -----------------------------------------------------------
// Obtener la suma de los elementos numericos de un array
const valores = [12, 23, 45, 12, 78, 3];
const suma = 0;

valores.forEach((valor) => suma += valor);
