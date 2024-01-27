package org.example.refactoring.consolidateDuplicate.bad;

@SuppressWarnings("SpellCheckingInspection")
public class Main {
	private double extraSalary;
	private int seniority;
	private int education;
	private int incidents;
	private boolean certification;
	
	public double calculateExtraSalary() {
		double result = 0;
		
		if(isElegibleExtraSalary()) {
			result = 500;
			sendMessage(); // Metodo que se repite en la condicion
		} else {
			result = 0;
			sendMessage(); // Metodo que se repite en la condicion
		}
		return result;
	}
	
	public void sendMessage() {
		// send email
		// conncet smtp
		System.out.println("Sending message");
	}
	
	public boolean isElegibleExtraSalary() {
		boolean estudios = seniority < 1 || education < 1; // Category
		boolean experiencia = incidents > 10 || !certification; // Category
		return estudios || experiencia;
	}
}
