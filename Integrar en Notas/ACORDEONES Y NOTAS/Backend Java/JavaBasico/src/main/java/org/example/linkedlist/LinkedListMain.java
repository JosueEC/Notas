package org.example.linkedlist;

import java.util.LinkedList;
import java.util.List;

public class LinkedListMain {
	public static void main (String []args) {
		/*
	 - Es una clase de Java
	 - Es la representacion de una lista doblemente enlazada.
	 - Permite duplicados
	 - Mantiene el orden de insercion
	*/
		
		// -> Sintaxis
		List<String> listaNombres = new LinkedList<String>();
		
		// Añadir elementos al final de la Lista
		listaNombres.add("Josue");
		listaNombres.add("Jesiel");
		listaNombres.add("Chava");
		
		// Añadir elementos al principio de la lista
		listaNombres.add(0, "Yuli");
		
		for (String nombre:listaNombres) {
			System.out.println(nombre);
		}
	}
	
	
}
