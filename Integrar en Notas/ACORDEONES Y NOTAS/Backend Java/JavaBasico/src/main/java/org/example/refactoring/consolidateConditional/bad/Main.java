package org.example.refactoring.consolidateConditional.bad;

@SuppressWarnings("SpellCheckingInspection")
public class Main {
	private double extraSalary;
	private int seniority;
	private int education;
	private int incidents;
	private boolean certification;
	
	public double calculateExtraSalary() {
		double result = 0;
		if(seniority < 1) {
			return 0;
		}
		if(education < 1) {
			return 0;
		}
		if(incidents > 10) {
			return 0;
		}
		if(!certification) {
			return 0;
		}
		
		// Calculate extra salary process
		// ...
		return result;
	}
	/*
	* Cuando tenemos muchas condiciones if que se relacionan
	* podemos separarlas en una funcion que las evalue por
	* categoria
	*/
}
