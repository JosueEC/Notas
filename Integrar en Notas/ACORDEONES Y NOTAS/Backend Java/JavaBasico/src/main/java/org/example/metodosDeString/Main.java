package org.example.metodosDeString;

@SuppressWarnings("SpellCheckingInspection")
public class Main {
	public static void main(String[] args) {
		//TODO|###########################################
		//TODO| METODOS DE LA CLASE STRING ###############
		//TODO|###########################################
		
		/*
		* length()
		* startsWith("")
		* endsWith("")
		* indexOf("")
		* substring(1, 5)
		* trim()
		* equals()
		* compareTo()
		*/
		
		String cadena = "Hello World";
		
		cadena.length();
		// Devuelve la longitud de la cadena
		cadena.toLowerCase(); // hello world
		// Transforma la cadena a minusculas
		cadena.toUpperCase(); // HELLO WORLD
		// Transforma la cadena a maysuculas
		cadena.startsWith("H"); // true
		// Devuelve true o false si la cadena empieza con la
		// cadena enviada en el parametro
		cadena.endsWith("d"); // true
		// Devuelve true o false si la cadena termiana con la
		// cadena enviada en el parametro
		cadena.indexOf("o"); // 4
		// Devuelve la posicion de la cadena enviada en el
		// parametro, recuerda que una cadena se puede acceder
		// como un arreglo
		cadena.substring(1, 1); // "H"
		// Recorta una cadena en base a los parametros enviados
		// el primero es el indice de inicio del recorte, y el
		// segundo es la cantidad de elementos a recortar
		cadena.trim(); // "HelloWorld"
		// Elimina los espacios en blanco de la cadena
		cadena.equals("HELLO WORLD");
		// Valida si una cadena es igual a otra, es el operador
		// de igualdad de las cadenas String
		cadena.equalsIgnoreCase("Hello World");
		// Hace lo mismo que la funcion de arriba, pero esta
		// ignora las letras mayusculas y minusculas
	}
}
