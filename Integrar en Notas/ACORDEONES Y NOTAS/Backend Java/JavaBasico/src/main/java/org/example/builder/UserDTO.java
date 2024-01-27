package org.example.builder;
// Lo que hace Builder, es que nos permite una nueva forma de instanciar
// objetos a partir de clases. Cuando una clase contiene demasiados
// atributos, se vuelven complejos los constructores y las instancias. Builder
// soluciona este problema.
public class UserDTO {
	private final String name;
	private final String email;
	private final String password;
	private final Number age;
	private final String country;
	
	public UserDTO (String name, String email, String password, Number age, String country) {
		this.name = name;
		this.email = email;
		this.password = password;
		this.age = age;
		this.country = country;
	}
	
	/*
	 A este constructor es donde llega nuestro objeto builder, del cual
	 se van a tomar las propiedades para inicializar el objeto
	*/
	public UserDTO(Builder builder) {
		this.name = builder.name;
		this.email = builder.email;
		this.password = builder.password;
		this.age = builder.age;
		this.country = builder.country;
	}
	
	/*
	 Para esto, es necesario crear una clase interna (inner class) la cual
	 va a dar acceso de modificacion a nuestros atributos, en esta clase
	 se definen solo lo setters de los atributos, y el retorno va a ser la
	 misma clase interna. Un dato es que estos setter no suelen llevar el
	 sufijo "set" al principio de la funcion, en su lugar solo va el nombre
	 de la propiedad
	*/
	public static class Builder {
		private String name;
		private String email;
		private String password;
		private Number age;
		private String country;
		
		public UserDTO.Builder name (String name) {
			this.name = name;
			return this;
		}
		
		public UserDTO.Builder email (String email) {
			this.email = email;
			return this;
		}
		
		public UserDTO.Builder password (String password) {
			this.password = password;
			return this;
		}
		
		public UserDTO.Builder age (Number age) {
			this.age = age;
			return this;
		}
		
		public UserDTO.Builder country (String country) {
			this.country = country;
			return this;
		}
		
		/*
		 Esta funcion es la que nos devuelve el objeto instanciado, esta
		 instancia el objeto a traves del constructor que definimos
		 arriba de esta clase.
		 
		 El metodo builder nos permite realizar acciones sobre los parametros
		 que llegan a cada propiedad, por ejemplo, aqui verificamos si el
		 name llega vacio, entonces inicializamos la propiedad con el valor
		 "No name"
		*/
		public UserDTO build () {
			if (name == null) {
				name = "No name";
			}
			
			return new UserDTO(this);
		}
	}
}
