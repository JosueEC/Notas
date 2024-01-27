package org.example.javaBasico;

import java.math.BigDecimal;

@SuppressWarnings("SpellCheckingInspection")
public class JavaBasico {
	public static void main(String[] args) {
		/*
			TODO####################################################
			TODO| CHEATSHEET JAVA BASICO ###########################
			TODO####################################################
		 */
		System.out.println("Hola Mundo");
		// Mostrar mensajes en la consola
		
		/*
		 * TODO###################################################
		 * TODO|  TIPOS DE DATOS PRIMITIVOS ######################
		 * TODO###################################################
		 */
		final String name = "Josue";
		/*
		 La palabra final es el equivalente de const en Java, esta
		 palabra nos permite indicar que el valor de esta variable
		 no puede cambiar, siempre va a ser el valor que se la haya
		 asignado.
		 
		 ! public void nameFunction (final int number) {}
		 final tambien puede ser usado en los parametros de una funcion,
		 para asi evitar que el parametro llegue a ser mutado dentro de
		 la funcion
		 
		 ! final public void nameFunction () {}
		 De igual forma podemos usarlo con la funciones, de esta manera
		 indicamos que este metodo no puede ser sobreescribido cuando se
		 hereda de la clase en la que fue creado
		 
		 ! final class Example {}
		 Si usamos final en una clase, estamos indicando que ninguna otra
		 clase puede heredar de esta, esta no puede ser clase padre de
		 ninguna otra clase.
		 
		 ! private final String name;
		 ! public nameClass (String name) { this.name = name; }
		 Por ultimo, la palabra final nos obliga a que las variables
		 declaradas como final, deben ser inicializadas de forma obligatoria
		 ya sea en la delcaracion o a traves de un constructor, por ende
		 no permitira un constructor vacio en la clase o que no reciba el
		 dato de la variables final
		*/
		/*
		 * TODO###################################################
		 * TODO|  TIPOS DE DATOS PRIMITIVOS ######################
		 * TODO###################################################
		 */
		//TODO| ENTEROS:
		byte number1 = 1; // 1 byte
		short number2 = 2; // 2 byte
		int number3 = 3; // 4 byte
		long number4 = 3; // 8 byte
		/*
		 Estos sirven para declarar variables que almacenan
		 tipos de datos numericos, se diferencian por la
		 cantidad de bytes que pueden almacenar.
		 
		 Por ejemplo long es el que mas capacidad tiene, por
		 lo que es mas recomendable en casos donde almacenas
		 ID's por ejemplo
		*/
		
		//TODO| PUNTO FLOTANTE:
		float decimal1 = 1.0f;
		double decimal2 = 4.99d; // 4.99
		/*
		 Estos sirven para almacenar valores con punto decimal.
		 Para float se coloca una f al final del numero para
		 indicar que es de punto decimal.
		 Para double es opcional colocar una d o no.
		*/
		
		//TODO| CARACTER:
		char caracter1 = 'a';
		/*
		 Se usa para almacenar SOLO 1 CARACTER, este se debe
		 colocar entre comillas simples
		 
		 NOTA: A los datos primitivos NO se les puede asignar
		 el valor nulo
		*/
		
		//TODO| BOOLEANOS:
		boolean verdadero = true;
		boolean falso = false;
		/*
		 Los booleanos sirven para guardar variables de true
		 o false, puden ser utiles para funciones de banderas
		*/
		
		/*
		TODO|####################################################
		TODO| TIPOS DE DATOS ESPECIALES (clases) ################
		TODO|####################################################
		 */
		//TODO| CADENAS DE TEXTO:
		String cadena1 = "texto";
		/*
		 En este podemos almacenar cadenas de texto, no importa
		 la longitud, estas siempre deben colocarse entre
		 comillas dobles.
		 NOTA: String se le puede asignar el valor nulo
		*/
		
		//TODO | RECOMENDADO PARA VALORES EXACTOS COMO 'precio'
		// BigDecimal precio = (BigDecimal) 10.99;
		
		//TODO| TIPOS ENVOLTORIO:
		Integer numero = null;
		Long numero2 = 2L;
		/*
		 Estos tipos envuelven al dato primitivo para que nos
		 permitan almacenar valores nulos. Esto es util cuando
		 no conocemos el valor de la variable en el momento, con
		 los datos envoltorio podemos crear la variable con null
		 
		 NOTA: Los tipos envoltorio comienzan con la primer letra
		 en mayuscula
		*/
		
		/*
		TODO|####################################################
		TODO| OPERADORES ########################################
		TODO|####################################################
		 */
		
		//TODO| ARITMETICOS
		/*
		 + suma
		 - resta
		 / division
		 * multiplicacion
		 % resto
		*/
		
		int numerico1 = 1;
		int numerico2 = 2;
		
		int suma = numerico1 + numerico2;
		int resta = numerico1 - numerico2;
		double division = (double) numerico1 / numerico2;
		int producto = numerico1 * numerico2;
		float resto = numerico1 % numerico2;
		
		//TODO| LOGICOS, RELACION, COMPARACION, BOOLEANOS
		/*
		> mayor que
		< menor que
		>=  mayor o igual que
		<=  menor o igual que
		==  igual
		!=  diferente
		&&  and
		||  or
		! negacion
		*/
		// Estos sirven para realizar comparaciones y comprobaciones
		// durante la ejecucion de nuestro codigo
		
		//TODO| ASIGNACION
		/*
		= mayor que
		+= menor que
		-=  mayor o igual que
		/=  menor o igual que
		*=  igual
		%=  diferente
		*/
		// Estos sirven para asignar valores a nuestras variables
		// por ejemplo:
		int valor = 1;
		valor *= 5;
		/*
		 Aqui estamos multiplicando la variable valor por 5 y
		 asignando ese resultado a la variable valor. Seria
		 equivalente a colocar: valor = valor * 5;
		*/
		
		//TODO| INCREMENTOS Y DECREMENTOS
		/*
		++ incremento en 1
		-- decremento en 1
		*/
		
		//TODO| CONCATENACION
		// + concatena valores (cadenas)
	}
	
	/*
	TODO|####################################################
	TODO| PARSEO O CASTEO DE VARIABLES ######################
	TODO|####################################################
	 */
	double variable1 = 230.89;
	int variableEntero = (int) variable1;
	/*
	 Forma para castear un double a entero, esto trunca los
	 decimales de la variable double quedandose solo con el
	 valor entero
	*/
	/*
	TODO|####################################################
	TODO| FUNCIONES #########################################
	TODO|####################################################
	 */
	private static void holaMundo() {
	}
	
	private static String retornaCadena() {
		return "texto";
	}
	
	public static void saludo(String nombre) {
		System.out.println("Hola " + nombre);
	}
	/*
	 Esta es la sintaxis para definir una funcion en Java:
	 
	 -public: puede ser visible desde otras clases
	 -private: solo es visible desde la clase en la que fue
	    creada
	 -protected: Solo puede ser visible y accesible desde
	    clases hijas de la clase donde fue creada o que se
	    encuentren en el mismo paquete
	    
	 static: Significa que pertenece a la clase donde fue
	 creada, esto es que puede ser invocada dentro de la
	 clase sin necesidad de instanciar un objeto de la
	 misma para poder acceder a la funcion.
	 
	 void: Tipo de dato que retorna la funcion, siendo void
	 que no retorna nada.
	 
	 retornaCadena(): Nombre o identificador de la funcion y los
	 parametros que recibe
	*/
	
	/*
	TODO|####################################################
	TODO| ACCESO A FUNCIONES ################################
	TODO|####################################################
	 */
	/*
	 Estas son las formas en las que podemos acceder a las
	 funciones de una clase desde otra clase, esto variara
	 en base al modificador de acceso de la funcion y a si
	 se encuentran el el mismo o diferente paquete
	*/
	
	//TODO| Mediante la clase:
	 //JavaBasico.saludo("Josue");
	//TODO| Instancia:
	 JavaBasico objeto = new JavaBasico();
	/*
	TODO|####################################################
	TODO| SOBRECARGA DE FUNCIONES ###########################
	TODO|####################################################
	 */
	private static void imprimeEdad() {
		System.out.println(26);
		System.out.println(26);
	}
	
	private static void imprimeEdad(String edad) {
		System.out.println("Hola " + edad);
	}
	
	private static void imprimeEdad(int edad) {
		System.out.println(edad);
	}

/*
	private static String imprimeEdad() {
		return "26";
	}
	
 La sobrecarga de metodos es la posibilidad de crear
 varias funciones con el mismo nombre pero con
 comportamientos diferentes.
 
 Por ejemplo, aqui tenemos
 3 funciones que se llaman igual, pero la 1a no recibe
 parametros, la 2a recibe una cadena y la 3a recibe un
 entero
 
 NOTA: Solo funciona con parametros, el modificador de
 acceso y el tipo de retorno no generar sobrecarga de
 metodos
*/
	
	/*
	TODO|####################################################
	TODO| ESTRUCTURAS DE CONTROL ############################
	TODO|####################################################
	 */
	//TODO| IF ELSE
	private static void ifElse() {
		if(5 < 10) {
			System.out.println("verdadero");
		} else {
			System.out.println("falso");
		}
	}
	/*
	 Esta es la sintaxis para usar condicionesl if else
	 en Java, es lo mismo que Javascript
	*/
	
	//TODO| BUCLES:
	private static void bucles() {
		for(int i = 0; i < 10; i++) {
			System.out.println(i);
		}
		// Esta es la sintaxis para usar el bucle for en Java
		
		int contador = 1;
		while(contador < 5) {
			System.out.println(contador);
			contador++;
		}
		// Esta es la sintaxis para usar el bucle while en Java
		
		//TODO| CONTINUE Y BREAK EN BUCLES:
		int contador2 = 1;
		while(contador2 < 10) {
			contador2++;
			if(contador2 == 6) {
				continue;
			}
			System.out.println(contador2);
			
			if(contador2 == 8) {
				break;
			}
		}
		/*
		 continue: Salta el proceso del ciclo ya avanza al
		    siguiente
		 break: Rompe el ciclo del bucle en el que esta
		    anidado y sale del mismo
		*/
		
		//TODO| SWITCH:
		String weather = "soleado";
		switch (weather) {
			case "soleado":
				System.out.println("Dia soleado");
				break;
			case "nublado":
				System.out.println("Dia nublado");
				break;
			default:
				System.out.println("Clima no identificado");
				break;
		}
		// Esta es la sintaxis para usar un switch en Java
	}
}
