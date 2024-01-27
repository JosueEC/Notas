package org.example.interfaces;

import org.example.javaBasico.Coche;

@SuppressWarnings("SpellCheckingInspection")
public class InterfacesMain {
	public static void main(String [] args) {
		CocheService service1 = new CocheServiceClassicImpl();
		CocheService service2 = new CocheServiceSportImpl();
		
		Coche coche1 = service1.crearCoche();
		Coche coche2 = service2.crearCoche();
	}
}
