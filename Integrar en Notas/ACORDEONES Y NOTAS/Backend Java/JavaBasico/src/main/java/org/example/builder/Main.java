package org.example.builder;

public class Main {
	public static void main (String []args) {
		UserDTO user = new UserDTO.Builder()
				.name("Josue")
				.email("josueev.cruz@gmail.com")
				.password("12345")
				.age(26)
				.country("Mexico")
				.build();
	}
}
