package org.example.refactoring.extractVariable.god;

public class Main {
	public void printProductPrice(Order order) {
		// 1.- precio total de los productos
		Double quantityPrice = order.getPrice() * order.getQuantity();
		
		// 2,. descuento
		Double offerPrice = order.getPrice() * order.getOffer();
		
		// 3.- precio final = precio total menos el descuento
		Double finalPrice = quantityPrice -offerPrice;
		
		// 4.- calculo del precio del envio
		Double shippingPrice = order.getShipping() * 2;
		
		// TODO - 4.- nuevo calculo
		
		// 5.- precio final
		System.out.println(finalPrice - shippingPrice);
		
		/*
		* Podemos separar cada operacion en una variable, pudiendo
		* reutilizarlas y volver mas legible el codigo
		*/
	}
}
