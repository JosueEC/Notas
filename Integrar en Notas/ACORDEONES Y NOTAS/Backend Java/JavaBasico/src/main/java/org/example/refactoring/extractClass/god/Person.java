package org.example.refactoring.extractClass.god;

@SuppressWarnings("SpellCheckingInspection")
public class Person {
	private Long id;
	private String firstName;
	private String lastName;
	private Integer age;
	// address
	private Address address;
	/*
	* Entonces asi solo creamos una propieda del
	* tipo address, volviendo mas legible y menos
	* sucio el codigo de nuestra clase
	*/
}
