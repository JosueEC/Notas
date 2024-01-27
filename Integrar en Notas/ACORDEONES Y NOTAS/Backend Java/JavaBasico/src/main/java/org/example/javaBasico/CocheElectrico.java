package org.example.javaBasico;

import org.example.javaBasico.Coche;

@SuppressWarnings("SpellCheckingInspection")
public class CocheElectrico extends Coche {
	/*
	 A traves de la palabra extends y el nombre de la clase
	 es como heredemaos todos lo atributos y funciones publicos
	 de la clase especificada
	*/
	String motorElectrico;
	
	public CocheElectrico() {}
	
	public CocheElectrico(String motorElectrico) {
		this.motorElectrico = motorElectrico;
	}
	
	public CocheElectrico(String color, String fabricante, String modelo, Double peso, Double largo, String motorElectrico){
		super(color, fabricante, modelo, peso, largo);
		this.motorElectrico = motorElectrico;
	}
	/*
	 Mediante la palabra super es como podemos hacer llegar
	 valores a las propiedades del constructor que las recibe
	 en la clase coche
	*/
	
	@Override
	public void acelerar(Integer cantidad) {
		int masVelocidad = cantidad * 2;
		super.acelerar(masVelocidad);
	}
	/*
	 La etiqueta @Override verifica que exista el metodo a
	 sobreescribir en la clase de la que se esta heredando
	 
	 La sobreescritura de metodos nos sirve para modificar el
	 comportamiento de la funcion que esta en la clase padre
	 
	 Por ejemplo aqui, antes de enviar el dato como parametro
	 de la funcion de la clase padre, estamos multiplicando el
	 valor por 2 y despues mandandolo.
	 
	 Es como agregar pasos extra antes o despues de la ejecucion
	 de la funcion de la clase padre
	 
	 NOTA: A traves de la palabra super tambien podemos acceder
	    a las funciones de la clase padre
	*/
	
	@Override
	public String toString() {
		return "CocheElectrico{" +
				"motorElectrico='" + motorElectrico + '\'' +
				", color='" + color + '\'' +
				", fabricante='" + fabricante + '\'' +
				", modelo='" + modelo + '\'' +
				", peso=" + peso +
				", largo=" + largo +
				", velocidad=" + velocidad +
				'}';
	}
}
