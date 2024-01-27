package org.example.javaBasico;

import org.example.javaBasico.Coche;

@SuppressWarnings("SpellCheckingInspection")
public class CocheHibrido extends Coche {
	String motorHibrido;
	
	public CocheHibrido() {}
	
	public CocheHibrido(String motorHibrido) {
		this.motorHibrido = motorHibrido;
	}
	
	public CocheHibrido(String color, String fabricante, String modelo, Double peso, Double largo, String motorHibrido) {
		super(color, fabricante, modelo, peso, largo);
		this.motorHibrido = motorHibrido;
	}
}
