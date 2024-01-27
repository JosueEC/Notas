package org.example.scanner;

import java.util.Scanner;

/*
	TODO|########################################################
	TODO| ENTRADA Y SALIDA DE DATOS EN JAVA #####################
	TODO|########################################################
*/
@SuppressWarnings("SpellCheckingInspection")
public class ScannerMain {
	public static void main(String[] args) {
		Scanner teclado = new Scanner(System.in);
		/*
		 A traves de un objeto de la clase Scanner es como
		 podemos capturar entradas de informacion desde la
		 consola.
		 Este metodo recibe como parametro el metodo .in de
		 la clase System
		 Esta clase es la misma que se usa para un sout
		 (System.out.println)
		*/
		
		System.out.println("Ingresa un nombre:");
		String nombre = teclado.nextLine();
		// Esta es la forma en la que podemos capturar los
		// datos ingresados. En este caso estamos capturando
		// la siguiente linea ingresada, podemos capturar
		// casi cualquier tipo de dato ingresado
		
		System.out.println("Ingresa tu edad:");
		int edad = teclado.nextInt();
		
		System.out.println("Tu nombre es: " + nombre + "\n" + "Tue edad es: " + edad);
	}
}
