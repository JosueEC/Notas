package org.example.interfaces;

import org.example.javaBasico.Coche;
import org.example.javaBasico.CocheElectrico;

@SuppressWarnings("SpellCheckingInspection")
public class CocheServiceSportImpl implements CocheService{
	
	@Override
	public Coche crearCoche() {
		System.out.println("creando coche deportivo");
		return new CocheElectrico();
	}
}
