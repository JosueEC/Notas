package org.example.arrays;

@SuppressWarnings("ALL")
public class Main {
	public static void main(String[] args) {
		/*
		 * #####################################################
		 * ARRAY O VECTOR DE VARIABLES #########################
		 * #####################################################
		 */
		int[] notas2 = new int[10];
		/*
		 Sintaxis para declarar un array de enteros a traves de
		 la palabra reservada 'new'
		 
		 NOTA: En esta sintaxis, siempre se debe establecer el
		    tamaño del arreglo
		*/
		
		notas2[0] = 8;
		notas2[1] = 9;
		// Sintaxis para asignar o modificar valores de un arreglo
		
		System.out.println(notas2[0]);
		/*
		 Sintaxis para obtener el valor de un arreglo, en este
		 caso se obtiene y se muestra en consola
		*/
		
		int[] notas = {8, 10, 5, 9, 10, 7, 5};
		/*
		 Sintaxis para declarar un arreglo definiendo de forma
		 implicita los valores del mismo.
		 
		 NOTA: Para este no es necesaria definir un tamaño,
		 incluso se podria dejar vacio, pero la idea seria poder
		 definir que elementos va a contener el array
		*/
	}
	
	/*
	 * #####################################################
	 * BUCLES DE ARRAY #####################################
	 * #####################################################
	 */
	public static void buclesArreglos(int [] notas2) {
		for(int i = 0; i < notas2.length; i++) {
			System.out.println(notas2[i]);
		}
		/*
		 Sintaxis para recorrer un array usando el clasico
		 bucle for
		*/
		
		for(int item:notas2) {
			System.out.println(item);
		}
		/*
		 Sintaxis para recorrer un array usando el bucle
		 forEach. Se le debe dar un nombre al elemento que se
		 accede en cada iteracion y especificar el array que se
		 va a iterar
		*/
	}
	
	/*
	 * #####################################################
	 * METODOS DE ARRAY ####################################
	 * #####################################################
	 */
	public static void metodosDeArreglo(int [] notas) {
		/*
		notas.binarySearch(notas, 9);
		 Este metodo nos permite realizar una busqueda binaria
		 en un arreglo de elementos
		 
		notas.sort(notas);
		 Este metodo nos permite ordenar un arreglo de forma
		 ascendente
		 equals(array1, array2);
		 Este metodo nos permite verificar si dos array son
		 iguales, devolviendo un valor booleano true o false
		*/
	}
}
