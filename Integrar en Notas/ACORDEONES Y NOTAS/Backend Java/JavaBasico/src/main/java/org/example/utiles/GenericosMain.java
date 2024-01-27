package org.example.utiles;

import java.util.ArrayList;
import java.util.List;

public class GenericosMain {
	/*
	 Los datos genericos nos sirven para parametrizar las instancias
	 de clases, de la misma forma que parametrizamos una funcion, los
	 genericos hacen esto mismo con las clases.
	 
	 Java puede inferir los datos de las instancias aunque no le pasemos
	 el generico, pero es mejor si definimos el dato generico desde la
	 instancia de la clase.
	 
	 NOTA: Tambien se pueden crear nuestras propias clases que reciban
	 genericos
	*/
	public static void main (String []args) {
		List<String> nombres = new ArrayList<>();
		// El generico se pasa a la clase a traves de los simboloes de
		// mayor y menor que, de esta forma, indicamos que la instancia
		// de esta clase sera una lista que contendra valores de tipo
		// String
	}
}
