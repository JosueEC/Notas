package org.example.refactoring.consolidateConditional.god;

@SuppressWarnings("SpellCheckingInspection")
public class Main {
	private double extraSalary;
	private int seniority;
	private int education;
	private int incidents;
	private boolean certification;
	
	public double calculateSalary() {
		double result = 0;
		
		if(!isEelegibleExtraSalary()) {
			return result;
		}
		
		// Calculate extra salary
		result += 5;
		return result;
	}
	
	public boolean isEelegibleExtraSalary() {
		boolean estudios = seniority < 1 || education < 1; // Category
		boolean experiencia = incidents > 10 || !certification; // Category
		return estudios || experiencia;
	}
	/*
	* Esta seria la funcion en las que tendriamos separadas y
	* categorizadas las clausulas if, volviendo mas legible nuestro
	* codigo
	*/
}
