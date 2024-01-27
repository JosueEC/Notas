function arreglarFormato(cadena) {
  return cadena.charAt(0).toUpperCase() + cadena.slice(1).toLowerCase();
}
  // Esta funcion convierte la primer letra de una cadena a mayusculas y las demas a
  // minusculas, de igual forma se puede modificar para que cambie el formato de la
  // cadena segun nuestras necesidades

  arreglo.split('');
  // Separa el arreglo en caracteres, en el parametro se establece con
  // que caracter va a separar los caracteres, comunmente solo se pone
  // comillas vacias

//!##############################################################
//! FORMAS DE DECLARAR FUNCIONES ################################
//!##############################################################
function saludar(nombre) {
  return;
}

const saludar = function(nombre) {
  return;
}

const saludar = (nombre) => {

}
const saludar = nombre => document.write(nombre);
  // Estas son diferentes formas de crear funciones en Javascript

//!##############################################################
//! OBJETO MATH #################################################
//!##############################################################
Math.sign(-1);
  // Verifica el signo del parametro
  // POSITIVO --> 1
  // NEGATIVO --> -1
  // CERO --> 0
Math.sqrt(numero);
  // Me devuelve la raiz cuadrada del numero que se pasa como parametro
Math.cbrt(numero);
  // Devuelve la raiz cubica del numero
Math.max(5,12,45,8,6,3);
  // Devuelve el numero mayor de la serie de numeros
Math.min(5,12,45,8,6,3);
  // Devuelve el numero menor de la serie de numeros
let random = parseInt(Math.random()*100);
  // Linea para mostrar numeros aleatorios entre 0 - 100
Math.round(numero);
  // Redondea un valor con punto decimal al entero mas cercano
Math.floor(4.9);
  // Hace lo mismo que el anterior, pero este redonde hacia abajo, 
  // no importa que tan cerca esta del siguiente valor
Math.ceil(numero);
  // Redondea un numero hacia arriba, no importa que tan lejos o 
  // cerca este del siguiente numero
Math.trunc(numero);
  // Elimina la parte fraccionario de un numero y solo devuelve el 
  // valor entero

//!##############################################################
//! METODOS DE CADENA ###########################################
//!##############################################################
let cadena = "Hola Mundo";

string.replace('a',"").replace('b',"").replace('c',"");
  // Remplaza el o los carcateres establecidos por el segundo caracter
  // que se le pasa como parametro, en este caso reemplaza las letras
  // a,b y c por cadenas vacias, retorna la cadena modificada
cadena.concat("Como les va");
  // Este metodo concatena la cadena de texto que
  // se le pase como parametro al metodo, la concatena al final de la 
  // cadena original, retorna la cadena resultante
cadena.startsWith("H");
  // Pregunta si la cadena que estamos evaulando empieza con el o los
  // caracteres que pasamos como parametro, en este caso nos devolvera
  // el valor true porque la cadena si empieza con esos caracteres, 
  // en caso contrario devolvera un false
cadena.endsWith("Mundo");
  // Es la misma logica que el metodo de arriva pero esta ocurre al 
  // final de la cadena y no al principio
cadena.includes("un");
  // Busca si existe el caracter o el conjunto de caracteres en una
  // cadena, si es asi devolvera un true y en caso contrario devolvera
  // un false
cadena.indexOf("M");
  // Hace exactamente lo mismo que el metodo anterior, pero este en
  // lugar de solo devolver true o false, devuelve el indice en el cual
  // se encuentra la cadena, en este caso devolvera el valor 6, porque
  // es el indice donde se encuentra ese caracter
cadena.lastIndexOf("undo");
  // Es lo mismo que la anterior, pero el metodo anterior recorre la 
  // cadena de adelante hacia atras y este metodo lo hace al reves, de 
  // atras hacia adelante, por lo cual nos devolvera el indice de la 
  // cadena que haya encontrado de atras hacia adelante
cadena.padStart(5,"a");
  // Este metodo rellena la cadena de texto a partir de los parametros
  // que recibe el metodo, en este caso el primer parametro es el tamaño
  // final que debera tener la cadena, si la cadena original
  // es de 5 caracteres y le pasamos el parametro 10, entonces el metodo
  // rellenara los otros 5 caracteres faltantes con el caracter(es) que
  // le pasemos en el segundo parametro del metodo
cadena.padEnd(5,"a");
  // Es lo mismo que la anterior pero este lo hace al final de la cadena
  // y no al principio como el metodo anterior
cadena.repeat(2);
  // Repite la misma cadena la cantidad de veces que nosotros pasemos
  // en el parametro del metodo, esta repeticion se concatena en la
  // misma cadena
cadena.split(",");
  // Divide la cadena en base al caracter que se le pase como parametro,
  // estas divisiones las retorna en forma de una arreglo
cadena.split(' ', 3);
  // Con un segundo parametro establecemos cuantas posiciones va a recortar
  // por ejemplo aqui recorta las 3 primeras posiciones de la cadena que
  // estan separadas por 1 espacio en blanco
cadena.substring(0,3);
  // Corta la cadena en base a los parametros que se envian al metodo,
  // en este caso comienza en la posicion 0 y corta hasta la posicion 2,
  // porque el 3 ya no lo cuenta, para este ejemplo este metodo nos
  // devolveria "Hol"
cadena.toLowerCase();
  // Convierte las letras de una cadena a minuscula
cadena.toUpperCase();
  // Convierte las letras de una cadena a mayuscula
cadena.trim();
  // Elimina los espacios en blanco que contiene una cadena
cadena.trimStart();
  // Elimina los espacios solo al principio de la cadena
cadena.trimEnd();
  // Elimina los espacios solo al final de la cadena

//!##############################################################
//! OBJETOS EN JAVASCRIPT #######################################
//!##############################################################
var persona = {
  nombre: "Josue",
  edad: 26,
  estuidos: {
    esProgramador: true,
    esDiseñador: false
  },
  habilidades: ["html","css","javascript"]
};
  // Esta es la sintaxis con la que podemos crear un objeto, el valor
  // antes de los 2 puntos es la clave o llave, funciona come el indice
  // en los arreglos, estos deben de ser unicos, los valores asignados
  // a la llave pueden ser de cualquier tipo, incluso pueden ser
  // objetos o arreglos e incluso funciones, los valores asginados a 
  // las llaves si se pueden repetir

persona["estatura"] = 1.68;
  // Esta es la forma en la que creamos nuevas propiedades en nuestro
  // objeto usando la forma de brackets notation
persona.nombre = "Chingon";
  // De esta forma modificamos los elementos del objeto usando la
  // dot notation
console.log(persona.nombre)
  // Y asi es como accedemos a los valores de un objeto a traves de
  // su clave
persona.experiencia = 0;
  // De esta forma es como podemos crear propiedades en los objetos, 
  // se selecciona el objeto, se le asigna un nombre a la propiedad y 
  // se le da un valor nunca debemos crear porpiedades vacias
delete persona.experiencia;
  // Esta es la forma en la que podemos eliminar propiedades, usando
  // la palabra reservada delete seguido del objeto y la propiedad que
  // queremos eliminar

var misFunciones = {
  saludar: function() { console.log("Hola") },
  despedir: function() { console.log("Adios") }
};
console.log(misFunciones.saludar());
  // Esta es la forma en la que podemos crear un objeto que almacena
  // funciones

let gato ={
  meow: function() {
    return "Meow!";
  }
};
console.log(gato['meow']());
  // Con la linea de arriba es como puedes acceder a una funcion 
  // almacenada en un objeto usando la bracket notation
console.log(gato.meow())
  // Con esta otra linea tambien se accede a la funcion en nuestro
  // objeto pero usando dot notation

var comidas = {};
var diferenciaDeNotaciones = function(propUno, propDos){
  comidas.propUno = ['Frutas', 'Vegtales'];
  comidas[propDos] = ['Hamburguesa','Papas Fritas'];
}
diferenciaDeNotaciones('saludable', 'noSaludable');
  // En este ejemplo podemos ver la diferencia y utilidad entre 
  // dot notation y bracket notation, si nosotros queremos que el 
  // nombre de las claves sea dinamico, esto solo lo podremos hacer con
  // bracket notation, ya que a su valor se le puede pasar una variable,
  // mientras que con dot notation esto no se podria hacer
  // Importante: el nombre de las propiedades siempre debe ser un 
  // string para que pueda funcionar

persona.hasOwnProperty('estatura');
  // Este metodo nos permite verificar si existe una propiedad con 
  // ese nombre en nuestro objeto, devuelve true en caso de que si y 
  // false en caso de que no

carros.sort(((a, b) => a.modelo - b.modelo));
  // Este metodo ordena un objeto en base a el valor de alguna de sus 
  // propiedades, por ejemplo en este caso ordena en base al año del
  // modelo del carro

var llaves = Object.keys(persona);
  // Este metodo nos permite obtener un arreglo con todas las llaves o 
  // propiedades del objeto que se le pase como parametro

for(var propiedad in persona){
  console.log("Esta es la propiedad: " + propiedad);
  console.log("Este es el valor: " + persona[propiedad]);
}
  // Esta es la forma en la que podemos recorrer los objetos, esto 
  // recorre su propiedades y tambien podemos acceder a sus valores.
  // Consta de una variable de iteracion que tommara el valor de cada 
  // propiedad y el objeto que vamos a recorrer

var mascota = {
  animal: "perro",
  raza: "chihuahua",
  amistoso: true,
  dueña: "Maria Lopez",
  info: function() {
    console.log("Mi perro es un " + this.raza);
  }
};
  // Esta es la forma en la que accedemos a las propiedades del objeto 
  // dentro del mismo objeto, usando la palabra reservada this, para 
  // decir que nos estamos refiriendo a ese valor en ese contexto
  // Aqui la palabra this solo tiene acceso en el contexto del objeto
  // mascota, fuera de el no puede acceder a otra variables.
  // En objetos es recomendable no usar funciones flecha, debido a que
  // this no puede ser referenciado desde ellas

//!##############################################################
//! FECHAS EN JAVASCRIPT ########################################
//!##############################################################
const fecha = new Date();
  // Nos retorna especificamente la fecha en la que fue creada la fecha,
  // osea, toma la fecha exacta de ese momento y la guarda en la
  // variable
const fecha_cadena = new Date("march 25 2020");
  // Estabelcemos nuestra fecha con el formato mes, dia y año, este
  // debe ser pasado en ingles, de lo contrario no funciona
const fecha_valores = new Date(2022, 0, 15);
  // Establece una fecha con los valores que le pasan, es importante
  // mencionar que en este caso los meses los lee como si estuvieran
  // guardados en un arreglo, asi que en este caso nos traeria el mes
  // de enero porque es el que estaria en la posicion 0
const dia = fecha.getDate();
const mes = fecha.getMonth();
const anio = fecha.getFullYear();
console.log(dias, mes, anio);
  // En estas lineas estamos obteniendo el dia, mes y año por separado
  // esto lo hacemos a traves de nuestro objeto que creamos antes en el
  // cual obtuvimos a fecha actual, el objeto 'ahora'

function formatDate (format) {
  const date = new Date()
  const map = {
    dd: date.getDate(),
    mm: date.getMonth() + 1,
    yy: date.getFullYear().toString().slice(-2),
    yyyy: date.getFullYear()
  }

  return format.replace(/dd|mm|yyyy/gi, matched => map[matched])
}
  // Esta funcion nos permite obtener la fecha actual en el formato que
  // nosotros le pasemos como parametro
console.log(formatDate('yyyy-mm-dd'))

//!##############################################################
//! METODOS DE CONSOLA ##########################################
//!##############################################################
console.log("Hola");
  // Imprime en la consola el parametro que se le pasa al metodo
console.assert(5 < 3);
  // Evalua una comparativa, si el resultado es true, no muestra nada,
  // pero en caso contrario que el reesultado es false solo muestra 
  // la adevertencia de que el assert fallo
console.clear();
  // La consola se limpia del codigo excrito previamente
console.error("Ocurrio un problema");
  // Muestra un mensaje de error en la consola
console.error(new Error('Ocurrio un Error'));
  // Esta es otra forma en la que podemos crear un error con la consola
  // esta nos devuelve informacion mas detallada acerca del error
console.info("Hola");
  // Muestra un mensaje informativo, a diferencia de console.log, 
  // que muestra un mensaje de depuracion
console.table(["Josue","Jesiel","Chava"]);
  // Nos muestra el objeto desglozado en index y elemento del index
  // en forma de tabla,
  // para poder verlo mas graficamente
console.warn("Cuidadito");
  // Imprime un mensaje de advertencia en la consola
console.dir( [1, 2, 3, 4, 5] );
  // Muestra el objeto y sus propiedades, de forma un poco mas 
  // grafica, muy parecido al debug en JAVA
console.count();
  // Muestra el numero de veces que se ejecuto esta funcion, puede 
  // servir para contar el numero de veces que se ejecuto
  // una funcion sin necesidad de crear una variable en el codigo e 
  // irla incrementando
console.countReset();
  // Reinicia el valor a 1 
console.group("Nombres");
  // Crea una seccion de grupo, la cual se puede minimizar o agrupar 
  // en la consola. Se le puede asignar un nombre
  // al grupo o tambien se puede dejar sin nombre
console.end();
  // Cierra el grupo que se abrio antes, para que lo siguiente que se 
  // escriba sea parte del siguiente grupo o como tal quede 
  // fuera de ningun grupo
console.groupCollapsed("Frutas");
  // De igual forma que el group anterior, abre un grupo, pero la 
  // diferencia es que este lo abre cerrado
  // y el anterior lo abre abierto
console.time();
  // Inicia un temporizador en consola
console.timeLog();
  // Detiene el temporizador y nos muestra cuanto tiempo paso desde 
  // que ejecutamos la instruccion anterior
console.timeEnd();
  // Hace lo mismo que el metodo de arriba
console.log(process.argv);
  // Esta linea nos muestra la ruta donde ese encuentra el archivo del
  // programa que estamos ejecutando
console.log(process.memoryUsage());
  // Con esta linea podemos saber cuanta memoria se esta usando para
  // la ejecucion de ese archivo JS
