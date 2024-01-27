package org.example.throwError;

import java.util.Scanner;

/*
	TODO|########################################################
	TODO| LANZAMIENTO DE EXCEPCIONES PERSONALIZADAS EN JAVA #####
	TODO|########################################################
*/
@SuppressWarnings("SpellCheckingInspection")
public class ThrowErrorMain {
	public static void main(String[] args) {
		try{
			leerNombres();
			/*
			 Englobamos en un try-catch la funcion que puede
			 lanzar una excepcion del tipo que hemos creado
			*/
		} catch(NameFormatException error) {
			/*
			 Capturamos esa ecepcion especifica que hemos
			 creado y la manejamos de la forma correspondiente
			*/
			error.printStackTrace();
		}
	}
	
	/*
	 Este metodo es el que puede llegar a lanzar la excepcion
	 es necesario agregar la clausula throws y el tipo de
	 excepcion que va a propagar el metodo
	*/
	private static void leerNombres() throws NameFormatException {
		Scanner teclado = new Scanner(System.in);
		
		System.out.println("Introduce un nombre");
		while (teclado.hasNext()) {
			System.out.println("Introduce un nombre");
			String nombre = teclado.nextLine();
			if (nombre.length() < 8) {
				teclado.close();
				throw new NameFormatException("El nombre debe contener 8 caracteres como minimo");
			}
			/*
			 La clausula IF verifica que no se haya introducido
			 una cadena menor a 8 caracteres, en el caso de que
			 si, se crea y se lanza nuestra expecion personalizada
			 enviando el mensaje de la excepcion como parametro al
			 constructor de la clase Exception
			*/
		}
		teclado.close();
	}
}
