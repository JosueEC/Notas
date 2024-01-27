package org.example.javaBasico;

import org.example.javaBasico.Coche;
import org.example.javaBasico.CocheElectrico;
import org.example.javaBasico.CocheHibrido;

@SuppressWarnings("SpellCheckingInspection")
public class MainPOO {
	public static void main(String[] args) {
		/*
		TODO|####################################################
		TODO| CREACION DE OBJETOS A PARTIR DE CLASES ############
		TODO|####################################################
		*/
/*
				Coche audi = new Coche();
		 Creacion de un objeto de la clase coche mediante su
		 constructor vacio
			
			Coche chevy = new Coche("rojo",
					"nissan",
					"sport",
					1430.45d,
					5.4d);
		 Creacion de un objeto de la clase coche mediante su
		 constructor con parametros y usando la palabra
		 reservada 'new'
		*/
		
		/*
				audi.acelerar(50);
		 Asi se accede a las funciones de una clase mediante
		 la instancia de un objeto de la misma
		 
				System.out.println(audi);
		 Asi podemos imprimir en consola los valores de los
		 atributos de nuestro objeto instanciado
		 
				audi.color = "negro";
		 Asi es como podemos modificar alguna propiedad de
		 nuestro objeto instanciado
		*/
		
		/*
		TODO|####################################################
		TODO| HERENCIA ##########################################
		TODO|####################################################
		 */
		CocheElectrico tesla = new CocheElectrico("v8");
		tesla.color = "gris";
		tesla.acelerar(10);
		/*
		 Gracias a que la clase CocheElectrico hereda de la
		 clase Coche, es que podemos acceder a todos los
		 atributos y funciones publicas en la clase Coche
		 desde nuestra instancia de CocheEelectrico
		*/
		
		CocheElectrico honda = new CocheElectrico("azul",
				"honda",
				"civic",
				1400.20d,
				5.5d,
				"v8");
		/*
		 Gracias a que en la clase CocheElectrico tenemos un
		 constructor que hace uso de la plabar super para enviar
		 valores al constructor que los espera de la clase Coche,
		 es como podemos enviar estos datos en una instancia de
		 CocheElectrico que hereda de la clase Coche
		*/
		
		/*
		TODO|####################################################
		TODO| POLIMORFISMO ######################################
		TODO|####################################################
		 */
//		Coche coche1 = new Coche();
		CocheElectrico coche2 = new CocheElectrico();
		CocheHibrido coche3 = new CocheHibrido();
		
		//TODO| Polimorfismo
		Coche coche4 = new CocheElectrico();
		Coche coche5 = new CocheHibrido();
		/*
		 El plimorfismo se establece creando una instancia de la
		 clase padre pero inicializandola con un objeto de la
		 clase hija, esto solo es posible porque la clase hija
		 hereda de la clase padre.
		 
		 En el polimorfismo, un mismo objeto puede tener varias
		 formas con las que puede ser instanciado.
		*/
		
		if (coche4 instanceof CocheElectrico) {
			System.out.println("Si es una instancia de CocheElectrico");
		}
		/*
		 A traves de la plabara reservada instanceof preguntamos
		 si cierto objeto es una instancia de cierta clase.
		 
		 NOTA: Un ejemplo de polimorfismo es si quisieramos crear
		 una lista o array de Coches, pero que tenga diferentes
		 tipos (CocheHibrido, CocheElectrico), debemos asignar
		 el tipo base para que nos permite agregar a la lista o
		 al array varios coches de diferentes tipos y no crear
		 una lista o array por cada tipo de coche.
		*/
		
	}
}
