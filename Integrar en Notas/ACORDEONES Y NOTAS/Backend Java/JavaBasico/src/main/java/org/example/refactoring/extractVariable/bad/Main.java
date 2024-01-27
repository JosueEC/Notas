package org.example.refactoring.extractVariable.bad;

@SuppressWarnings("SpellCheckingInspection")
public class Main {
	public void printProductPrice(Order order) {
		Double totalPrice = order.getPrice() * order.getQuantity() - order.getOffer() + order.getShipping() * 2;
		
		System.out.println(totalPrice);
		
		/*
		* En lugar de colocar todas las operaiones en
		* una sola linea, volviendo el codigo mas dificil
		* de leer, podemos...
		*/
	}
}
