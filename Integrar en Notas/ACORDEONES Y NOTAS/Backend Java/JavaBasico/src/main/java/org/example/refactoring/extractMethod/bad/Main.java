package org.example.refactoring.extractMethod.bad;

@SuppressWarnings("SpellCheckingInspection")
public class Main {
	public void printHTML() {
		printHead();
		printBody();
		
		System.out.println("This is the footer");
		System.out.println("script");
		System.out.println("copyright");
		System.out.println(" ");
	}
	
	/*
	* Aqui tenemos codigo que podria separarse en
	* otra funcion para el caso en el que se vuelva
	* a requerir
	*/
	
	private void printBody() {}
	
	private  void printHead() {}
}
