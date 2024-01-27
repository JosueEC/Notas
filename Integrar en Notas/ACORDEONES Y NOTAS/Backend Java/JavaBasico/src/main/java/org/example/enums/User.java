package org.example.enums;

/*
 Para asignar valores de enums, basta con importar el enum y acceder
 a las constantes con la notacion de punto
*/
public class User {
	public static void main (String[] args) {
		Role role = Role.USER;
	
		// Tambien podemos recorrer la lista de enums con un forEach
		for (Role roleName: Role.values()) {
			System.out.println(roleName);
		}
		
	}
}
