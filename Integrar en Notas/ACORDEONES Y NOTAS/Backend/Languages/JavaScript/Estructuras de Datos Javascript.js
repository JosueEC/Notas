//!##############################################################
//! ESTRUCTURAS DE DATOS ########################################
//!##############################################################

//!##############################################################
//! STACK O PILA ################################################
//!##############################################################
class Stack {
  constructor() {
    this.items = [];
  } // Inicializa la pila

  push(item) {
    this.items.push(item);
  } // Inserta un nuevo elemento a la pila

  pop() {
    return this.items.pop();
  } // Elimina el ultimo elemento ingresado de la pila

  peek() {
    return this.items[this.items.length-1];
  } // Devuelve el ultimo elemento ingresado a la pila, pero sin eliminarlo
}

let pila = new Stack();
pila.push(1);
pila.push(2)
pila.peek(); // 2
  // Esta es la forma en la que implementamos la clase de tipo Stack(pila)
  // la cual funciona con la regla LIFO(Last In - First Out), esta estructura
  // define que el utlimo elemento en entrar es el primero en salir. En teoria
  // esas son solo las funciones que realiza una pila, no debe poder realizar
  // otro tipo de modificaciones al arreglo, de lo contrario ya no seria una pila

//!##############################################################
//! QUEUE O COLA ################################################
//!##############################################################
class Queue {
  constructor() {
    this.items = [];
  } // Inicializa la Queue

  enqueue(item) {
    this.items.push(item);
  } // Agrega una item a la Queue

  dequeue() {
    return this.items.shift();
  } // Elimina un item de la Queue

  peek() {
    return this.items[0];
  } // Retorna el primer elemento de la Queue sin eliminarlo
}

let cola = new Queue();
cola.enqueue(1);
cola.enqueue(2);
cola.peek();//1
  // La estructura Queue o Cola funciona con la regla FIFO(First In - First Out)
  // el primero que entra es el primero que sale, es practicamente lo mismo que 
  // la Pila o Stack, la unica diferencia es la forma en la que sacamos los items
  // en este caso usamos shift, para poder sacar el primer elemento y asi cumplir
  // con la regla FIFO de esta estructura de datos

//!##############################################################
//! HASHTABLES ##################################################
//!##############################################################
// Las tablas Hash son una forma muy eficiente de almacenar datos y acceder a ellos
// rapidamente, funciona como el indice de un libro, tu sabes exactamente donde esta
// almacenado el dato gracias a la llave que proporcionas y de esta forma accedes
// rapidamente al dato, esto es mucho mas eficiente que recorrer nuestro arreglo de
// buckets en nuestra tabla hash

class HashTable {
  constructor(size) {
    this.buckets = new Array(size);
    this.numBuckets = this.buckets.length;
  }
  // Creamos nuestra clase y definimos sus propiedades, las cuales son, 
  // -> buckets: arreglo que almacena todos los datos
  // -> numBuckets: el tamaño del arreglo, necesario para calcular la posicion donde
  //  se almacena el dato (su llave hash)

  hash(key) { // Funcion hash que calcula la posicion en la que se guardara el dato
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.numBuckets;
  }
  // Simplemente suma todos los codigos respectivos a cada letra de la cadena que llega por
  // parametro y retorna el resto de esta suma dividida entre el numero total de buckets

  insert(key, value) { // Metodo que inserta los valores en la tabla en base a su hash
    const index = this.hash(key); // Calculamos la posicion en la que se va a guardar
    if (this.buckets[index] == null) { // Si el espacio en el que vamos a guardar el dato esta vacio
      this.buckets[index] = []; // Entonces creamos el nuevo objeto y lo guardamos en ese espacio
      // en este caso es un arreglo vacio, pero puede ser un objeto tambien
    }
    this.buckets[index].push([key, value]); // Para cualquiera de los dos casos, que es cuando el espacio
    // esta vacio y cuando no, esto creara el objeto en el espacio asignando los valores de key y value
    // para almacenarse en formato clave:valor, debemos recordar que estamos trabajando con un arreglo
    // por eso es util usar la funcion push para guardar el dato, estableciendo el indice en el que deseas
    // realizar el push
  }

  get(key) { // Esta funcion nos devuelve el objeto alamacenado en base a la clave que se le pase
    const index = this.hash(key); // Calculamos el indice en el que tenemos que buscar en el arreglo
    if (this.numBuckets[index] == null) { // Si el indice esta vacio
      return null; // Retornamos null indicando que el dato no existe
    }
    for (let i = 0; i < this.buckets[index].length; i++) { // Caso contrario recorremos el arreglo que esta almacenado
      // en la posicion del index, si este fuera un objeto, se usaria un for in
      if (this.buckets[index][i][0] === key) { // Ya que es un arreglo que contiene un arreglo, estamos hablando de
        // un arreglo bidimensional, por eso los indices se pasan de esa forma
        return this.buckets[index][i][1];
      }
      // this.buckets  [index]              [i]                         [0]
      //          Posicion donde        Posiciones        Posicion del arreglo que contiene
      //          esta guardado         dentro del        la clave que estamos comparando, en la posicion1
      //          nuestro dato          arreglo           esta el valor almacenado
    }
  }
} // Esta es la forma en la que se implementa una estructura HashTable

let hashTable = new HashTable();
hashTable.insert('josue123', {
  name: 'Josue',
  age: 26,
  email: 'josueev.cruz@gmail.com'
});
console.log(hashTable.get('josue123'));
  // En este ejemplo guardamos los datos de un usuario asociados a una clave, el valor
  // asociado a la clave es un objeto que contiene todos sus datos

//!##############################################################
//! LINKED LIST O LISTAS ENLAZADAS ##############################
//!##############################################################
class Node {
  constructor(element) {
    this.value = element;
    this.next = null;
  }
}
  // Esta es la forma en la que creamos una clase de tipo Nodo, para
  // instanciar objetos con esas propiedades, las propiedades que usa son
  // value y next, donde la primera es el valor que almacena y la segunda
  // es la referencia al siguiente Nodo

class LinkedList {
  constructor(head = null) {
    this.head = head;
    this.length = 0;
  }
  // Despues tenemos la clase LinkedList o Lista, la cual tiene las propiedades
  // de head y length (opcional). En esta clase es donde colocamos todos los metodos
  // para manipular los nodos(crear, eliminar, recorrer, buscar, etc)

  obtenerUltimoNodo() {
    let ultimoNodo = this.head; // Obtenemos el primer Nodo(Cabecera)
    if (ultimoNodo != null) { // La lista NO esta vacia
      while (ultimoNodo.next != null) { // Mientras exista 1 Nodo se ira recorriendo
        ultimoNodo = ultimoNodo.next; // Se actualiza el Nodo por la referencia al siguiente
      } // Este ciclo se realiza hasta que llega al ultimo Nodo.
    } else { // La lista esta vacia
      return null;
    }
    return ultimoNodo;
  }

  obtenerPenultimoNodo(nodo) {
    let penultimoNodo = this.head; // Se obtiene el head
    if (penultimoNodo != null) { // Se verifica que la lista no este vacia
      while (penultimoNodo.next != nodo) { // Se recorre la lista indicando que avance al 
        // siguiente Nodo mientras este sea diferente del Nodo que llega como parametro
        // el cual es el ultimo Nodo, de esta forma se detiene el ciclo cuando se llega
        // al penultimo Nodo
        penultimoNodo = penultimoNodo.next;
      }
    }
    return penultimoNodo;
  }

  add(element) {
    let nuevoNodo = new Node(element); // Se hace una instancia de un nuevo Nodo, pasando
    // el dato que llega como parametro
    if (this.head === null) { // La lista esta vacia
      this.head = nuevoNodo; // Es el primer nodo, asi que solo se hace referencia al head
    } else { // Caso contrario ya hay mas nodos en la lista
      let ultimoNodo = this.obtenerUltimoNodo(); // Obetenemos el ultimo Nodo
      ultimoNodo.next = nuevoNodo; // Y hacemos referencia a nuestro nuevo Nodo en la propiedad
      // next del ultimo Nodo que existe en la lista
    }
    this.length++; // Incrementamos el contador de Nodos
  }

  remove() {
    let ultimoNodo = this.obtenerUltimoNodo(); // Obtenemos el ultimo Nodo
    if (ultimoNodo === null) { // No hay ningun Nodo
      return false;
    } else if (ultimoNodo === this.head) { // Solo hay 1 Nodo en la Lista
      this.head = null; // Solo vaciamos la lista referenciando el head a null
      this.length = 0; // Y el contador lo reasignamos a 0
    } else { // Se desenlaza el ultimo nodo
      let penultimoNodo = this.obtenerPenultimoNodo(ultimoNodo); // Obtenemos el 
      // penultimo Nodo
      penultimoNodo.next = null; // Eliminamos su referencia al siguiente Nodo
      this.length--; // Decrementamos el contador
    }
    return ultimoNodo.value;
  }

  eliminarNodo(dato) {
		let actual = this.head; // Obtenemos el nodo actual o la lista en si
		let previo = null; // Esta variable almacenara el nodo previo al Nodo a eliminar

		if (actual === null) return 'Lista vacia'; // Lista vacia

		while (actual != null) { // Recorremos la lista
			if (actual.dato === dato) { // Verificamos que coincida el Nodo a eliminar con el Nodo actual
        // en el que estamos, en caso contrario actualizamos el previo y el actual avanzando 2 posiciones
				if (previo === null) {//Este caso es cuando el Nodo a eliminar es el primer Nodo
					this.head = actual.siguiente; // Solo actualizamos el head con la referencia al siguiente Nodo
				} else { // Caso contrario, se quiere eliminar un Nodo de enmedio o final de la lista
					previo.siguiente = actual.siguiente; // Se modifica la referencia del previo con la referencia
          // al siguiente Nodo del actual, desenlazando ese Nodo
				}
				this.length--; // Para cualquier caso se esta eliminando 1 Nodo, por lo que decrementamos el tamaño y
				return actual.dato; // por buenas practicas retornamos el valor eliminado
			}
			previo = actual; // Aqui es donde hacemos el intercambio de Nodos hasta encontrar el Nodo que queremos
			actual = actual.siguiente; // eliminar y ahora si desenlazarlo de la lista
		}
		return 'No existe el dato';
	}
    // Este metodo sirve para eliminar un dato especifico de la lista, ya sea el primer nodo, el ultimo o incluso
    // un Nodo de en medio de la lista

  search(cb){
    let nodoActual = this.head;
    if (!nodoActual) return null; // No hay nodos
    else{ // Hay al menos 1 nodo
      while (nodoActual) { // Mientras exista un Nodo
        if (typeof cb === ('function')) { // El parametro es una funcion
          if (cb(nodoActual.value)) return nodoActual.value; // La funcion retorna true o false
          // en base a la operacion que realize
        } else { // El parametro no es una funcion
          if (cb === nodoActual.value) return nodoActual.value; // Si el dato buscado es igual a
          // alguno de los datos almacenados en los Nodos, entonces se retorna ese dato
        }
        nodoActual = nodoActual.next;
      }
    }
    return null;
  }
  // Esta funcion es un caso especoial, especificamente para ese ejercicio, se nos pedia crear una
  // funcion de busqueda, la cual podia recibir un valor cualquiera o una funcion callback, asi que
  // si realiza la funcion de busqueda y obtencion del dato, asi como la funcion de busqueda y
  // manipulacion con el dato encontrado */

  searchSimple(dato){
		let actual = this.head; // Obtenemos la lista

		if (actual === null) return 'Lista Vacia'; // Verificamos que la lista no este vacia
		while (actual) { // Recorremos los nodos de la lista
			if (actual.dato === dato) return true; // Verificamos si el dato que estamos buscando es igual al dato
      // del nodo actual en el que estamos, si es asi, retorna true en este caso, lo que significa que
      // encontramos el dato
			actual = actual.next; // Caso contrario avanzamos al siguiente Nodo para seguir buscando el dato
		}
		return false; // Se recorrio toda la lista y no se encontro el dato, en este caso se retorna false
	}
    // Este es el codigo para crear una funcion simple de busqueda dentro de nuestra lista enlazada
}
// Este es un ejemplo de como se implementan las listas enlazadas usando
// clases,(Lista, Nodo)
// PASOS PARA TRABAJAR CON LINKEDLIST SIMPLE EN JAVASCRIPT:

// 1.-Creamos nuestra clase Nodo(dato, siguiente) con su constructor y propiedades
// 2.-Creamos nuestra clase Linkedlist() con su contructor y propiedades
// 3.-Creamos el metodo que agrega 1 nuevo Nodo
//   -Controlar el caso de lista vacia -> primer nodo agregado
//   -La lista no esta vacia, recorrer los Nodos para agregarlo al final
// 4.-Creamos el metodo eliminar el Ultimo Nodo
//   -Controlar el caso lista vacia
//   -Controlar el caso solo hay 1 Nodo
//   -Controlar el caso recorrer todos los nodos hasta llegar al ultimo y desenlazar ese Nodo del
//   penultimo Nodo


//!##############################################################
//! BINARY TREE O ARBOL BINARIO #################################
//!##############################################################
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.rigth = null;
  }
}
// La clase arbol binario se crea con las propiedades valor, izquierda y derecha, las cuales seran
// una rama del arbol y en si cada rama del arbol es un nuevo BinaryTree

BinarySearchTree.prototype.obtenerPrendas = function (string,coincidencias = []) {
  var coincidencias = coincidencias;
  if (string ===  this.value.nombre) {
    coincidencias.push(string);
  }
  if (this.left) this.left.obtenerPrendas(string,coincidencias);
  if (this.right) this.right.obtenerPrendas(string,coincidencias);
  
  return coincidencias;
};
  // Este es una ejemplo de implementacion de una funcion en un
  // arbol binario, un detalle importante es que esta funcion, envia
  // como parametro una variable de la cual necesitamos en el siguiente
  // caso recursivo, en este caso es un arreglo que va almacenando
  // valores, por eso es que es enviado como parametro al siguiente caso
  // recursivo
  
  // Esta funcion busca todas las prendas que coincidan con la busqueda 
  // del usuario, es una funcion recursivo, busca todas las coincidencias
  // del lado izquierda y todas las del lado derecho, cada que encuentra una
  // coincidencia le pushea al arreglo que enviamos como parametro y al
  // final retorna ese arreglo*/

BinarySearchTree.prototype.vender = function (array) {
  if (array.length === 0) return false;

  let coincidencia = null;
  array.forEach(prenda => {
    if (this.value.nombre === prenda) {
      coincidencia = this.value;
    }
  });

  if (coincidencia) {
    coincidencia['vendido'] = true;
  }

  if (this.left) this.left.vender(array);
  if (this.right) this.right.vender(array);
    
    // for(let i=0; i<array.length; i++){
    //   if(array[i] === this.value.nombre){
    //     this.value['vendido'] = true;
    //     console.log(this.value);
    //     console.log('----------------------------------');
    //     break;
    //   }else{
    //     if(this.left)this.left.vender(array);
    //     if(this.right)this.right.vender(array);
    //   }
    // }
}
  // Este es otro buen ejemplo de una funcion recursiva, que recorre
  // un arbol binario para realizar alguna accion, en este caso accede
  // a nodos en el arbol que coincidan con la busqueda del usuario
  // una vez encuentra alguna coincidencia se agrega, en este caso, una
  // nueva propiedad al objeto que contenia nuestro nodo */