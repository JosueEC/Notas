package org.example.refactoring.extractMethod.god;

@SuppressWarnings("SpellCheckingInspection")
public class Main {
	public void printHTML() {
		printHead();
		printBody();
		printFooter();
	}
	
	private void printBody() {}
	
	private  void printHead() {}
	
	private void printFooter() {
		System.out.println("This is the footer");
		System.out.println("script");
		System.out.println("copyright");
		System.out.println(" ");
	}
	/*
	* De esta forma el codigo tambien queda como una
	* funcion y asi solo hacemos llamado de funciones
	* en la funcion main, esto vuelve mas legible y
	* mantenible nuestro codigo
	*/
}
