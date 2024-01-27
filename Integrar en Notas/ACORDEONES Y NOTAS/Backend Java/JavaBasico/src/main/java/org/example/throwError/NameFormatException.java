package org.example.throwError;

/*
	TODO|########################################################
	TODO| CREACION DE EXCEPCIONES PERSONALIZADAS EN JAVA ########
	TODO|########################################################
*/
@SuppressWarnings("SpellCheckingInspection")
public class NameFormatException extends Exception{
	/*
	 Simplemente heredamos de la clase Exception para poder
	 acceder a los constructores y metodos de la clase
	 Exception
	*/
	private static final long serialVersionUID = 1L;
	
	public NameFormatException(String errorMessage) {
		super(errorMessage);
	}
	/*
	 A traves del constructor de nuestra clase y usando el
	 metodo super es como enviamos nuestro mensaje de error
	 al constructor de la clase Exception
	*/
}
