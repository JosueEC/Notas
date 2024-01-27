//? ----------------------------------------------------------------
//?     ORM
//? ----------------------------------------------------------------
/*
--  (Object Relational Mapping) Es una herramienta que se utiliza para
-- mapear objetos de un lenguaje de programacion a tablas de una base
-- de datos relacional. Esto permite que los desarrolladores
-- interactuen con una base de datos usando codigo en lugar de consultas
-- SQL directas.
*/


//? ----------------------------------------------------------------
//?     JSON
//? ----------------------------------------------------------------
/*
-- (JavaScript Object Notation) Es un archivo que almacena informacion
-- y asi mismo nos sirve para enviar o recibir informacion, por ejemplo
-- cuando el cliente solicita informacion al servidor, esta informacion
-- es devuelta a traves de un archivo JSON y el mismo proceso ocurre al
-- reves, la informacion que el servidor recibe del cliente viene en
-- formato JSON. Este archivo es independiente del lenguaje.
*/


//? ----------------------------------------------------------------
//?     NPM
//? ----------------------------------------------------------------
/*
-- (Node Package Manager) Es el administrador de paquetes de Node
*/


//? ----------------------------------------------------------------
//?     HOISTING
//? ----------------------------------------------------------------
/**
-- 
*/

/*
-- En este ejemplo podemos ver el comportamiento del Hoisting para
-- una variable de tipo VAR.

-- EL hoisting de var es GLOBAL, por lo que, si nosotros volveos a
-- declarar una variable de tipo var con el mismo nombre, esta se va
-- a sobreescribir a la que teniamos anteriormente, por eso en este
-- caso, lo que se imprime es el valor de la variable dentro del for,
-- esto ocurrira sin importar el contexto de la segunda declaracion
*/
var textVAR = 'Hola soy una variable de tipo VAR';

for (var i = 0; i < 3; i++) {
    var textVAR = 'Soy una segunda variable de tipo VAR';
}

console.log(textVAR); // 'Soy una segunda variable de tipo VAR'


/*
-- Pasa todo loc contrario con LET, su hoisting es LOCAL, asi que,
-- aunque volvamos a delcarar la variable con el mismo nombre, esta
-- no va a sobreescribir la que teniamos antes. En el caso de que
-- ambas se encuentren en el mismo contexto, esto nos marcaria un
-- error, indicando que la variable ya esta definida.
*/
const textLET = 'Hola, soy una variable LET';

for (let i = 0; i < 3; i++) {
    let textLET = 'Soy una segunda variable LET';
}

console.log(textLET); // 'Hola, soy una variable LET'


//? ----------------------------------------------------------------
//?     RxJS
//? ----------------------------------------------------------------
/*
-- Es una biblioteca para la programacion reactiva, la cual utiliza
-- observables. Esto facilita la composicion de codigo asincrono.

-- Esto lo logra gracias a tres patrones de diseño, como puden ser
-- el patron observer, iterator y la programacion funcional.
*/

//? ----------------------------------------------------------------
//?     BLOCKCHAIN
//? ----------------------------------------------------------------
/*
-- Se puede interpretar como una red publica que mantiene el registro
-- de transacciones que permite intercambiar dinero, asi como ejecutar
-- codigo, manteniendo segura la informacion a traves de algoritmos
-- criptograficos.
*/


//? ----------------------------------------------------------------
//?     NFT (Non Fungible Token)
//? ----------------------------------------------------------------
/*
-- Token No Fungible, significa que no puede ser intercambiado por algo
-- de su misma clase, porque este es unico (non-fungible).

-- Por ejemplo, una pieza de arte no puede ser intercambiada por otra
-- pieza de arte

-- El token es un registro dentro de la blockchain al cual se puede
-- dar un seguimiento.

-- Por ende, los NFTs son tokens registrados en una blockchain que
-- representan items unicos.

* ¿Porque esto es util?

-- Es dificil rastrear al creador de un archivo en la web, ya que este
-- puede ser copiado/replicado. Ejemplo:

-- Crear una pieza de arte en photoshop y deseas venderla, pero al
-- subirla a la web, cualquiera puede descargarla generando una copia
-- de tu archivo y ahora no sabes cual es el original.

-- Los NFTs resuelven esto, creando un NFT de tu archivo, el cual
-- almacena informacion sobre el mismo

* - Unique fingerprint (hash)
* - Token name
* - Token symbol

-- Este token (NFT) se almacena en alguna blockchain, como por ejemplo
-- la de 'etherium'

-- Por ende, ahora tu eres dueño del archivo digital que has creado, ya
-- que ahora existe un registro global que no puede ser alterado
-- maliciosamente

-- Asi mismo, puedes vender ese token/NFT a traves de una transaccion
-- en la blockchain

* NOTAS A TENER EN CUENTA:
-- En la blockchain solo se almacena la huella digital o el token, no
-- el archivo que has creado.

-- En otras palabras, un NFT es como tener un documento de autenticidad
-- de tus archivos digitales.

-- Cabe mencionar que un NFT no solo puede usarse para vender arte
-- digital, este puede usarse para vender tickets de conciertos, nombres
-- de dominios, articulos raros, bienes raices y basicamente cualquier
-- item que sea unico y se necesite rastrear la propiedad.

-- La idea de esto, es que la gente crea NFTs y la gente oferta por los
-- mismos con la esperanza de que el NFT podria valer mas en un futuro

-- Hablando tecnicamente, los NFT son smart contracts almacenados en
-- la blockchain
*/


//? ----------------------------------------------------------------
//?     SMART CONTRACT
//? ----------------------------------------------------------------
/*
-- Un contrato inteligente, almacena las propiedades unicas de un item
-- y realiza un seguimiento de los dueños del mismo, tanto del actual
-- como del antiguo.

-- Incluso, un NFT puede ser programado para dar regalias al autor
-- cada vez que este sea cambiado de dueño
*/
//? ----------------------------------------------------------------
//?     PROGRAMACION IMPERATIVA VS DECLARATIVA
//? ----------------------------------------------------------------
const listProgrammers = ['Josue', 'Chava', 'Jesiel'];
let names = [];

// TODO: Investigar la definicion para cada una en el contexto de JavaScript

/*
* Programacion Imperativa
-- Se enfoca en los pasos que hay que seguir para obtener un resultado,
-- en este caso se pone como ejemplo el uso de un forEach para realizar
-- la copia de los elementos de un arreglo:
*/
listProgrammers.forEach((programmer, index) => {
    names[index] = programmer;
});

/*
* Programacion Declarativa
-- Se enfoca solo en el resultado, sin preocuparse por los pasos que
-- se realizan para llegar al mismo, en este caso se pone como ejemplo
-- la sintaxis de spread operator, el cual "esparce" los elementos de
-- un arreglo, algo como si pasaramos uno por uno los elementos del
-- array
*/
names = [...listProgrammers];

/*
-- En este caso, ambas formas de programacion, hacen exactamente lo
-- mismo.

-- En el caso de la Programacion Imperativa es mas facil de leer pero
-- mas dificil de antener a largo plazo.

-- Contrario a la Programacion Delcarativa, que require un conocimiento
-- mas avanzado para leerlo, pero es mas facil de escalar a a largo
-- plazo.
*/


//? ----------------------------------------------------------------
//?     PARADIGMAS DE PROGRAMACION
//? ----------------------------------------------------------------
// TODO: Investigar la definicion de este tema y de cada paradigma
/*
-- Esta es la diferencia entre realizar tareas de forma procedimental
-- y de forma funcional. En ambas realizamos la suma de 10 numeros
-- enteros:
*/
/*
* Paradigma Procedimental
-- Es un codigo que se ejecuta de forma sincrona, definiendo valores
-- y sin retornar nada.
*/
let acumulador = 0;

for (let i = 0; i <= 10; i++) {
    acumulador = acumulador + 1;
}

/*
* Paradigma Funcional
-- Haciendo uso de una funcion, la cual podria recibir parametros,
-- realizar el mismo proceso de suma y ademas retornar uno o varios
-- parametros.
*/
function sumaLosDiezPrimerosEnternos() {
    let suma = 0;

    for (let i = 0; i <= 10; i++) {
        suma = suma + i;
    }

    return suma;
}

let sumaTotal = sumaLosDiezPrimerosEnternos();

/*
* Paradigma Orientado a Objetos
*/


/*
* Paradigma de Programacion Reactiva
-- Este en especifico, es un paradigma de programacion asincrona
-- orientado al flujo de datos y a la propagacion del cambio.

-- Basicamente se compone de 'OBSERVABLES' y 'OBSERVERS', donde
-- los eventos ocurren a partir del cambio de una fuenta de datos.

-- Un ejemplo de esto, son las notificaciones de YouTube, donde el
-- canal de YouTube es el OBSERVABLE, y un OBSERVER esta pendiente
-- de cuando este suba una nuevo video para notificar a los
-- suscriptores.
*/