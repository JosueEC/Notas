//!##############################################################
//! PROTOTYPE ###################################################
//!##############################################################
Array.prototype.mayoresQueTres = function(){
  var arregloModificado = [];

  for (let i = 0; i < this.length; i++) {
    if(this[i] > 3){
      arregloModificado.push(false);
    }else{
      arregloModificado.push(this[i]);
    }
  }

  return arregloModificado;
};

var arregloNum = [1, 2, 3, 4, 5];
var nuevoArreglo = arreglo.mayoresQueTres();
  // Esta es la forma en la que podemos crear nuevos
  // metodos en objetos ya creados en javascript, por ejemplo, aqui 
  // estamons agregando el metodo mayores que 3 al objeto array en 
  // javascript, de esta forma en cualquier momento vamos a poder usar 
  // este metodo directamente del objeto array, justo como se muestra
  // en las ultimas lineas de codigo.

  // De la misma manera, esta es la forma en la que podriamos crear 
  // nuevos metodos a las clases que ya hemos creado, para no tener que
  // regresar hasta la clase para crearlas

String.prototype.reverse = function(){
  let palabra = [];
  let palabraInvertida = "";
  let letras = this.split('');
    
  for (let i = 0; i < letras.length; i++) {
    palabra.unshift(letras[i]);
  }

  palabraInvertida = palabra.join("");
  return palabraInvertida;
};
  // Este es otro ejemplo en el que estamos creando un metodo en el 
  // objeto String, el cual nos devuelve la misma cadena pero al reves.
  // En este tipo de metodos es importante usar la palabra this, para 
  // referirnos a la variable a la que se le esta aplicando
  // el metodo

class Latinoamerica{
  constructor(){
    this.paises = [];
  }
}

Latinoamerica.prototype.agregarPais = function (pais){
  this.paises.push(pais);
};

var continente = new Latinoamerica();
continente.agregarPais('Mexico');
  // Esta seria la forma en la que agregariamos un nuevo metodo a una
  // clase, este metodo agregaria nuevos paises al atributo en el 
  // constructor

//!##############################################################
//! CLOUSURES ###################################################
//!##############################################################
function counter() {
  var _counter = 0;

  return function () {
    _counter++;
    return _counter;
  }
}
const contador = counter();
console.log(contador());//1
console.log(contador());//2
console.log(contador());//3

const otroContador = counter();
console.log(contador());//1
console.log(contador());//2
console.log(contador());//3
  // Las clousures son una forma de crear variables privadas
  // algo asi como en java cuando creas clases y variables privadas a las
  // cuales es dificil acceder. 
  // Una clousure se crea cuando creamos una funcion que retorna otra funcion
  // y esta funcion retornada hace uso de 1 o mas variables declaradas fuera
  // de la funcion retornada, estas variables quedaran asignadas a la funcion
  // retornada, permitiendo almacenar valores que quieras recuperar o guardar
  
  // NOTA: Es necesario crear una variable que almacene la clousure y podamos
  // ejecutarla. Tambien es una convencion colocar un guion bajo antes de la 
  // variable que en teoria sera privada, para dar a entender que es privada

function square(n) { // Funcion Callback
  return n*n;
}
  
function cacheFunction(square) {
  var _cache = {}; // 5:25
  
  return function(item) {
    if (_cache.hasOwnProperty(item)) { // 5 => 5:25
      return _cache[item];
    } else {
      _cache[item] = square(item);
      return _cache[item];
    }
  }
}
const squareCache = cacheFunction(square);
console.log(squareCache(5)); // 25
console.log(squareCache(5)); // 25
  // Este es un ejemplo practico de una clousure, aqui estamos creando
  // una para realizar la funcion de una memoria cache, la clousure, recibe
  // una funcion callback, esta realiza una potencia del numero que se mande
  // ejemplo: Llega 5 y devuelve 25, esta operacion se almacena en mi 
  // variable privada, la cual es un objeto(numero:resultado), asi, la proxima
  // vez que se vuelve a mandar ese mismo numero, solo busca la operacion en 
  // la cache y si ya existe solo la devuelve, caso contrario la realiza y la
  // guarda en cache

const miContador = (function(){
  let _contador = 0;

  function incrementar(){
    return _contador++;
  }
  function decrementar(){
    return _contador--;
  }
  function valor(){
    return _contador;
  }
  return{
    incrementar,
    decrementar,
    valor
  }
})();

miContador.valor(); // 0
miContador.incrementar(); // 1
miContador.decrementar(); // 0
  // Este es un ejemplo de una clousure con varias funciones anidadas
  // este clousure solo manipula un contador incrementando y decrementando
  // la variable contador, ademas de poder retornar el valor actual del
  // contador
  
  // Nota: Como puedes ver es muy parecido a crear una clase

function chequearDisponibilidad(ropas) {
  let _prendas = ropas;
  
  return function(stock){
    let coincidencias = 0;
    stock.forEach(prenda => {
      if (_prendas.includes(prenda)) {
        coincidencias++;
      }
    });

    if (coincidencias === _prendas.length) {
      return 'Todas las prendas fueron encontradas';
    }

    switch (coincidencias) {
      case 1:
        return '1 de las 3 prendas solicitadas se encuentran en el stock';
      case 2:
        return '2 de las 3 prendas solicitadas se encuentran en el stock';
      default:
        return 'No se encontraron las prendas solicitadas';
    }
  }
}
  // Este es otro ejemplo mas practico de la implementacion de una clousure, en este
  // caso requerimos recordar el valor de la prendas que se solicitaron, y compararlo
  // contra las prendas que se solicitan, asi retornando la respuesta de si hay o no
  // stock de las prendas que se solicitaron

//!##############################################################
//! RECURSIVIDAD ################################################
//!##############################################################
function atenderClientes(clientes) {
  if(Object.entries(clientes).length === 0) return clientes;
  
  delete clientes[Object.entries(clientes).length];

  return atenderClientes(clientes);
}

let clientes = {
  1: "Franco",
  2: "María",
  3: "Alejo"
}
console.log(atenderClientes(clientes));
  // Este es un ejemplo de una funcion recursiva, la cual elimina
  // elementos de un objeto de forma recursiva, debe de contar con
  // un caso de corte que termina la recursion, acciones que realiza 
  // o no, y el llamado a la funcion iniciando la recursion

function ordenar(array){
  let ordenado = true;
  // let temporal = 0;
  
  for(let i = 0; i < array.length-1; i++){
    if(array[i] > array[i+1]){
      ordenado = false;
      [array[i], array[i+1]] = [array[i+1], array[i]];
      // temporal = array[i+1];
      // array[i+1] = array[i];
      // array[i] = temporal;
    }
  }
  if(ordenado === false){
    return ordenar(array);
    }
  return array;//
}
// Este es un ejemplo de un metodo de ordenamiento(burbuja) el cual
// implementa la recursividad para realizar el proceso, incluso asi, 
// siendo mas eficiente que un algoritmo que usa dos for anidados

function recorreArreglo (arreglo, posicion = 0) {
  if (posicion != arreglo.length) {
    console.log(arreglo[posicion].num);
    recorreArreglo(arreglo, posicion + 1)
  }
}
let datos = [{ num: 1 }, { num: 2 }, { num: 3 }, { num: 4 },{ num: 5 }];
recorreArreglo(datos);
  // Esta es la forma en la que podemos iterar de forma recursiva 
  // cualquier arreglo, sin importar que contenga el arreglo, esta
  // funcion recursiva puede recorrerlo y con ciertas modificaciones
  // se puede acceder a los elementos que se contengan en cada posicion

//!##############################################################
//! CLASES Y HERENCIA ###########################################
//!##############################################################
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  saludar() {
    console.log("Hola mi nombre es " + this.nombre + ". Tengo " +
    this.edad + " años.");
  }
}

class Programador extends Persona {
  constructor(nombre, edad, añosDeExperiencia) {
    super(nombre, edad);
    this.añosDeExperiencia = añosDeExperiencia;
  }

  codear() {
    console.log("Soy " + this.nombre + ". Codeo desde hace " + 
    this.añosDeExperiencia + "años.");
  }
}
  // Esta es la forma en la que heredamos todos los metodos y atrubitos
  // de una clase hacia otra clase, en este caso la clase programador
  // hereda todos los atributos y los metodos de la clase persona, esta
  // lo hacemos usando la palabra extendes para heredar y la palabra 
  // super para acceder a las propiedades desde el constructor
  // de la nueva clase

//!##############################################################
//! CALLBACKS ###################################################
//!##############################################################
function primero(segundo) {
  setTimeout(function() {
    console.log("PRIMERO");
    segundo();
  }, 3000);
}

function segundo() {
  console.log("SEGUNDO");
}

primero(segundo);
  // Otra forma de entender mejor los callbacks, es que soy muy utiles
  // cuando queremos que alguna funcion no se ejecute hasta que otra
  // termine su ejecucion, por ejemplo aqui queremos que la funcion 
  // segundo se ejecute hasta que se haya ejecutado la funcion primero,
  // entonces lo que hacemos es pasarle como parametro la funcion 
  // segundo a la funcion primero de esta forma la funcion primero se
  // convierte en un callback, dentro de esta funcion invocamos a la 
  // funcion segundo y asi esta solo se ejecutara hasta que la funcion
  // primero se ejecute

var productos = [
  { price: 100, name: 'tv' },
  { price: 50, name: 'phone' },
  { price: 30, name: 'lamp' }
];

Array.prototype.filtrar = function(funcionDeFiltrado) {
  let arrayRes = [];
  console.log(this);

  for (let i = 0; i < this.length; i++) {
    if (funcionDeFiltrado(this[i])) {
      arrayRes.push(this[i]);
    }
  }
  return arrayRes;
}
  
let res = productos.filtrar(producto => {
  return (producto.price > 50);
});

console.log(res);

/*
this = [
  { price: 100, name: 'tv' },
  { price: 50, name: 'phone' },
  { price: 30, name: 'lamp' }
];

res =  [ { price: 100, name: 'tv' } ];
*/

// Esta es una forma mas aplicada de poder entender los callbacks, 
// en este caso agregamos el metodo flitrar al prototipo de Array, 
// fue slgo asi como, crear el metodo filter por nuestra cuenta. 
// A nuestro metodo prototype llega como parametro una funcion callback,
// a esta funcion sera llamada dentro de nuestra funcion prototype,
// en este caso en la funcion callback hay una condicion que retorna 
// true o false, mnadamos esta condicion como parametro a la funcion 
// del prototype, en la funcion del prototype recorremos el arreglo de 
// objetos que ha llegado le pasamos cada posicion, la cual seria cada 
// objeto y evaluamos el objeto con el callback, asi retornamos
// los elementos que cumplan con el callback 