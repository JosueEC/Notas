package org.example.javaBasico;

@SuppressWarnings("SpellCheckingInspection")
public abstract class Coche {
	/*####################################################
	 * CLASES ABSTRACTAS #################################
	 * ###################################################
	 */
	/*
	 A traves de la palabra reservada abstract es como
	 definimos una clase como abstracta.
	 
	 El concepto de una clase abstracta es una clase a partir
	 de la abstraccion de un objeto, dejando que sus clases hijas
	 la definan a traves de los detalles.
	 
	 No serviria de nada instanciar una clase abstracta porque
	 es una estructura muy general que no define nada.
	 
	 NOTAS:
	 - El polimorfismo tambien funciona con las clases
	 abstractas-
	 - No podemos crear instancias de una clase abstracta,
	 esta solo se instancia a traves de una clase hija.
	 - Una clase abstracta contiene al menos 1 metodo abstracto.
	 
	 METODO ABSTRACTO:
	 Un metodo abstracto es aquel que no posee cuerpo o sea que
	 no ha sido definido. Este define el 'que se debe hacer'
	 pero no el 'como se debe hacer'
	*/
	
	/*####################################################
	 * INTERFACES ########################################
	 * ###################################################
	 */
	/*
	 Una interfaz es una coleccion de metodos abstractos y
	 propiedades constantes, en la que se especifica, que se
	 debe de hacer, pero no el como se debe de hacer.
	 
	 Las interfaces vienen a solucionar el problema de herencia
	 multiple, ya que en Java, esto no es posible.
	 
	 Por ejemplo:
	 Tenemos la clase Perro, la cual hereda de Mascota, pero
	 tambien queremos que herede de la clase Canino.
	 
	 Ejemplo de la implementacion de una interface
	
	public class Perro extends Mascota implements Canino {
		@Override
		public void aullar() {}
		
		@Override
		public void ladrar() {}
	}
	*/
	
	/*
	 NOTAS: Una clase hija solo puede heredar de SOLO UNA clase
	 abstracta, pero puede implementar todas las interfaces
	 que desee
	*/
	String color;
	String fabricante;
	String modelo;
	Double peso;
	Double largo;
	Integer velocidad;
	
	// CONSTRUCTORES
	public Coche() {}
	
	public Coche(String color, String fabricante, String modelo, Double peso, Double largo) {
		this.color = color;
		this.fabricante = fabricante;
		this.modelo = modelo;
		this.peso = peso;
		this.largo = largo;
		this.velocidad = 0;
	}
	/*
	 Hacemos uso de la sobrecarga de metodos para poder crear
	 varios constructores con comportamientos diferentes
	*/
	
	// COMPORTAMIENTO
	public void acelerar(Integer cantidad) {
		if(cantidad > 0 && cantidad <= 120) {
			this.velocidad += cantidad;
		}
	}
	
	/*
	 public abstract float area();
	 
	 Asi es como definimos un metodo abstracto.
	 
	 La idea es que existe una clase Figura, de la cual se
	 crean varias clases hija (cuadrado, circulo, triangulo).
	 
	 Cada clase hija tiene su propia formula para calcular el area,
	 es por eso que para no reescribir el metodo en cada clase
	 hija, mejor creamos en la interfaz figura el metodo
	 calcularArea() para que cada clase hija este obligada a
	 implementarla y definir como se debe de hacer
	
	
	public float radio;
	@Override
	public float area() {
		return 3.1416f * (this.radio * this.radio);
	}
	*/
	
	/*
	 Al heredar o implementar una clase abstracta, estamos
	 obligados a definir sus metodos abstractos, la sintaxis
	 de arriba es la forma en la que se deberia definir el
	 metodo en la clase hija
	*/
	
	@Override
	public String toString() {
		return "Coche{" +
				"color='" + color + '\'' +
				", fabricante='" + fabricante + '\'' +
				", modelo='" + modelo + '\'' +
				", peso=" + peso +
				", largo=" + largo +
				", velocidad=" + velocidad +
				'}';
	}
}
