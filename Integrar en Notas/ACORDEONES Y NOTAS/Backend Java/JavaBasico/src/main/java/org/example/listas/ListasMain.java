package org.example.listas;

import org.example.javaBasico.Coche;
import org.example.javaBasico.CocheElectrico;

import java.util.ArrayList;

public class ListasMain {
	@SuppressWarnings("SpellCheckingInspection")
	public static void main (String[] args) {
		/*
		 TODO|########################################################
		 TODO|  TRABAJAR CON LISTAS EN JAVA ##########################
		 TODO|########################################################
		*/
		/*
		 Las listas nos permiten almacenar varios elementos del
		 mismo tipo. La ventaja contra los arrays es que las
		 listas son dinamicas y no es necesario establecer un
		 tamaño
		*/
		
		ArrayList<String> nombres = new ArrayList<>();
		/*
		 Sintaxis para inicializar una lista en Java, debemos
		 importar la clase List o ArrayList de java.util, establecer el
		 tipo de dato de los elementos de la lista junto con
		 el nombre de la lista, y finalmente inicializara con
		 la palabra new, el cual debe ser un objeto de la clase
		 ArrayList
		*/
		
		nombres.add("Josue");
		nombres.add("Jesiel");
		nombres.add("Chava");
		/*
		 Sintaxis para agregar valores a nuestra lista de
		 elementos
		*/
		buclesConListas(nombres);
		listasDeObjetos();
	}
	
	/*
		TODO|########################################################
		TODO| BUCLES CON LISTAS EN JAVA #############################
		TODO|########################################################
	*/
	@SuppressWarnings("SpellCheckingInspection")
	public static void buclesConListas(ArrayList<String> nombres) {
		System.out.println(nombres);
		// Un sout basico imprime la estructura con los datos
		
		for(String nombre: nombres) {
			System.out.println(nombre);
		}
		/*
		 A traves de un forEach podemos acceder a los datos de
		 nuestra lista, en este caso solo los mostramos en
		 consola
		*/
	}
	
	/*
		TODO|########################################################
		TODO| LISTAS DE OBJETOS EN JAVA #############################
		TODO|########################################################
	*/
	@SuppressWarnings("SpellCheckingInspection")
	public static void listasDeObjetos() {
		ArrayList<Coche> coches = new ArrayList<>();
		/*
		 Podemos crear listas de clases, solo debemos pasar la clase como
		 generico a nuestra ArrayList y tendremos una lista de objetos de
		 nuestra clase
		*/
		coches.add(new CocheElectrico("V8"));
		coches.add(new CocheElectrico("V9"));
		coches.add(new CocheElectrico("V10"));
		
		System.out.println(coches);
		
		for(Coche auto: coches) {
			System.out.println(auto);
		}
	}
}
