package org.example.refactoring.extractClass.bad;

@SuppressWarnings("SpellCheckingInspection")
public class Person {
	private Long id;
	private String firstName;
	private String lastName;
	private Integer age;
	// address
	private String street;
	private String postalCode;
	private String city;
	private String country;
	private String door;
	
	/*
	* Si tenemos una clase con varias variables que
	* pertenecen a otro contexto, podemos separarlas en
	* otra clase para crear un objeto
	*
	* Por ejemplo: Aqui tenemos los atributos que de
	* address, los cuales podemos separar en una clase
	*/
}
