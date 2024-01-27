package org.example;

public class Main {
	@SuppressWarnings("SpellCheckingInspection")
	public static void main(String[] args) {
		System.out.println("Hello world!");
		/*
		 * #####################################################
		 * NOTAS Y CONCEPTOS DE JAVA ###########################
		 * #####################################################
		 */
		
		/*
		 * #####################################################
		 * JVM : Java Virtual Machine ##########################
		 * #####################################################
		 */
		/*
		 Es una maquina virtual la cual permite ejecutar codigo de Java,
		 de esta forma, programas 1 vez en codigo Java, se genera un
		 ejecutable, y este puede ser corrido en cualquier maquina que
		 tenga instalada la JVM
		 
		La JVM no solo compila codigo, tambien de encarga de:
		- Administracion de memoria (Garbage Colector)
		- Multiplataforma
		- Seguridad
		- Optimizacion (Uso del procesador)
		- Librerias
		*/
		
		
		
		/*
		 * #####################################################
		 * PRECESO DE COMPILACION EN JAVA ######################
		 * #####################################################
		 */
		/*
		
		.java
		Nosotros generamos archivos con la extension .java, estos archivos
		no son comprendidos por el dispositivo.
		
		JAVAC
		Este es el nombre del compilador de Java, a traves de este podemos
		compilar nuestros archivos .java y convertirlo a bytecode cona la
		extension .class, el cual es el lenguaje que entiende la JVM.
		
		NOTA: Por eso en la consola se usa el comando javac holaMundo.java
		
		W.O.R.A (Write Once, Run Everywhere)
		Este concepto esta asociado a la JVM, significa que escribimos
		el codigo 1 sola vez y lo ejecutamos donde sea.
		 */
		
		/*
		 * #####################################################
		 * JVM, JRE, JDK #######################################
		 * #####################################################
		 */
		
		/*
		JRE: Java Runtime Envoironment: Este se compone de la JVM y las
		librerias de codigo escritas con Java. Este es el ambiente
		necesario para correr programas escritos con Java
		
		JDK: Java Development Kit: Este se compone del JRE y un conjunto
		de herramientas para desarrollo de aplicaciones con Java
		*/
		
		/*
		 * #####################################################
		 * VARIABLES DE ENTORNO ################################
		 * #####################################################
		 */
		
		/*
		 JAVA_HOME
		 Esta es la forma en la que le indicamos a la CMD donde puede
		 encontrar los programas para ejecutar los comandos de Java.
		 
		 1.- Debemos dirigirnos a la carpeta donde se instalo Java,
		 especificamente la carpeta 'bin' donde se encuentra 'javac'.
		 
		 2.- Copiamos la ruta de esta carpeta, ya que la vamos a agregar
		 como una variable de entorno en nuestro sistema.
		 
		 3.- En el buscador de Windows ponemos 'Editar vairables
		 de entorno' y es aqui donde vamos a crear nuestra ruta.
		 
		 4.- Agregamos una Nueva variable del sistema con el nombre de
		 JAVA_HOME y pegamos la ruta de la carpeta de bin
		 
		 PATH
		 1.- En esta misma seccion de variables del sistema, buscamos
		 la variable 'Path' y la editamos, damos click en Nuevo y pegamos
		 igualmente la ruta de la carpeta bin
		*/
	}
}