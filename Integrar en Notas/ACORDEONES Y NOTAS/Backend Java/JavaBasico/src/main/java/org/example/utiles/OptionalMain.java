package org.example.utiles;

import java.util.Objects;
import java.util.Optional;

public class OptionalMain {
	/*
	  Optional es un objeto contenedor que puede o no contener
	  el valor null. Tiene los siguientes metodos:
	  isPresent(): Devuelve true o false dependiendo de
	  si el valor existe o no.
	  ifPresent(): Ejecuta una accion si el valor existe, recibe una
	  funcion lambda
	  orElse(): Retorna un valor por defecto si el objeto no esta
	  presente, el valor que recibe como parametro es el que va a
	  retornar, esto en caso de que querramos que se devuelva un
	  valor, exista o no
	 */
	public Optional<String> getCadena (String password) {
		if (password.equals("1234")) {
			return Optional.empty();
			// .empt() Devuelve un objeto vacio, lo cual es diferente
			// a devolver null como tal
		} else {
			return Optional.of("Acceso concedico");
			// .of() Nos permite envolver un valor dentro de un Optional
			// para cumplir con el retorno de la funcion
		}
	}
}
