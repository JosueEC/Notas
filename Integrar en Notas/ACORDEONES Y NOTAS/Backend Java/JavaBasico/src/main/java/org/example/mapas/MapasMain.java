package org.example.mapas;

import java.util.HashMap;
import java.util.Map;

@SuppressWarnings("SpellCheckingInspection")
public class MapasMain {
	public static void main(String[] args) {
		/*
		 TODO|########################################################
		 TODO|  TRABAJAR CON MAPAS EN JAVA ###########################
		 TODO|########################################################
		*/
		/*
		 Los mapas son lo mismo que los objetos en Javascript, son
		 una estructura de datos que nos permiten almacenar valores
		 con la nomenclatura clave-valor (key - value)
		*/
		HashMap<String, Object> person = new HashMap<>();
		Map<String, Integer> users = new HashMap<>();
		/*
		 Sintaxis para instanciar un objeto de tipo Mapa
		 Ya sea como Map o como HashMap, cualquiera de los dos
		 puede instanciar un mapa
		 
		 NOTA: Los valores que se reciben como parametro en la
		 instancia de nuestro objeto Map, no pueden ser primitivos
		 deben ser de tipo envoltorio o especiales
		*/
		
		users.put("josue", 123);
		users.put("jesiel", 321);
		users.put("chava", 312);
		/*
		 Sintaxis para agregar elementos a nuestro mapa, a traves
		 del metodo .put() enviamos los valores pares clave-valor
		*/
		
		person.put("name", "Josue");
		person.put("age", 26);
		person.put("backend", "Java");
		person.put("frontend", "React");
		// Podemos agregar cualquier dato a un hashmpa colocando el
		// tipo Object en el generico donde vamos a guardar varios
		// tipos de valores
		
		System.out.println("name: " + person.get("name"));
		/*
		 Para obtener un dato en especifico usamos .get("") y la
		 clave del dato que deseamos recuperar
		*/
		
		person.remove("age");
		/*
		 Para remover un valor del hashmap, usamods .remove("") y la
		 clave del valor que queremos remover
		*/
		
		if (person.containsKey("backend") && person.containsValue("Java")) {
			System.out.println("Denle una chamba a ese brother!");
		}
		/*
		 Podemos comprobar la existencia de valores y claves en el
		 hashmap a traves de las funciones .containsKey() y .containsValue("")
		 ambos reciben el valor de la key y del value a buscar
		 respectivamente
		*/
		
		buclesEnListas(users);
		System.out.println(person);
	}
	
	/*
		 TODO|########################################################
		 TODO|  BUCLES CON MAPAS EN JAVA #############################
		 TODO|########################################################
		*/
	public static void buclesEnListas(Map<String, Integer> users) {
		System.out.println(users); // --> {chava=312, josue=123, jesiel=321}
		// Podemos mostrar la estructura de la lista con un sout
		
		for(String key: users.keySet()) {
			System.out.println(key); // --> josue, jesiel, chava
		}
		/*
		 Esta es la forma en la que accedemos a las claves de un mapa
		 .keySet() nos devuelve un ArrayList con las claves del mapa
		 de esta forma podemos iterar sobre las claves
		*/
		
		for(Integer value: users.values()) {
			System.out.println(value); // --> 123, 321, 312
		}
		/*
		 Esta es la forma en la que podemos acceder a los valores de
		 un mapa, es lo mismo que acceder a las llaves, solo cambia
		 el metodo, .values() devuelve un ArrayList con los valores
		 y de esta forma podemos iterarlos
		*/
		
		for(Map.Entry<String, Integer> pair: users.entrySet()) {
			System.out.println(pair.getKey() + "/" + pair.getValue());
		}
		/*
		 Esta es la forma en la que podemos acceder tanto a la
		 clave como al valor de los pares en nuestro mapa de
		 forma iterativa.
		 
		 A traves de un objeto Map.Entry<type, type> es como
		 accedemos a cada par en el mapa
		 
		 El metodo .entrySet() es el que nos devuelve los pares
		 y estos son iterados con un forEach
		 
		 .getKey() Nos devuelve la clave de un elemento Map.Entry
		 .getValue() Node devuelve el valor de un elemento Map.Entry
		*/
	}
}
