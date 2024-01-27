package org.example.interfaces;

import org.example.javaBasico.Coche;
import org.example.javaBasico.CocheElectrico;

@SuppressWarnings("SpellCheckingInspection")
public class CocheServiceClassicImpl implements CocheService {
	@Override
	public Coche crearCoche() {
		System.out.println("Creando coche clasico");
		return new CocheElectrico();
	}
	/*
	 Este es un ejemplo de como se sobreescribe un metodo
	 abstracto de una interface
	*/
}
