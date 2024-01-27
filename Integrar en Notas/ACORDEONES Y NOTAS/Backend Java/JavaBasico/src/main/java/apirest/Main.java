package apirest;

import java.math.BigDecimal;
import java.util.LinkedList;

@SuppressWarnings("ALL")
public class Main {
	/*
	 ? TODO #####################################################
	 ? TODO HOJA DE TRUCOS PARA CREAR UNA API REST ##############
	 ? TODO #####################################################
	 */
	// 1.- Crear nuestro proyecto con spring-initializer.
	
	/*
	 ? TODO #####################################################
	 ? TODO DEPENDENCIAS INICIALES ##############################
	 ? TODO #####################################################
	 */
	/*
	 * Spring Web
	 * Spring Data JPA
	 * PostgreSQL Driver
	 * Validation
	 * Lombok
	 */
	
	/*
	 ? TODO #####################################################
	 ? TODO ESTRUCTURA DEL PROYECTO #############################
	 ? TODO #####################################################
	 */
	/*
	Carpetas o capas de una API REST con Java
	 * domain
	 * web
	 * persistence
	 * common
	*/
	
	/*
   ? TODO #####################################################
   ? TODO CONEXION CON LA BASE DE DATOS CON .properties #######
   ? TODO ############## (PostgreSQL) #########################
 */
	/*
	En la carpeta resources encontramos el archivo
	application.properties, este archivo es el equivalente al
	.env en Javascript, aqui podemos crear todos nuestros secrets.
	Estos archivos se deben agregar al .gitignore
	*/
	/*
	 * spring.datasource.username=root
	 * spring.datasource.password=Aayush
	 * spring.datasource.url=jdbc:mysql://localhost:3306/mapping
	 * spring.jpa.hibernate.ddl-auto=update
	 */

/*
   ? TODO #####################################################
   ? TODO CONEXION CON LA BASE DE DATOS CON .yml (PostreSQL) ##
   ? TODO #####################################################
 */
	/*
	Otra forma de hacerlo, que es mas legible, es borrar el
	archivo application.properties y crear uno propio llamado
	application.yml
	
	La sintaxis para establecer las propiedades de la conexion
	es la siguiente:
	
	* spring:
  *   datasource:
  *     driver-class-name: org.postgresql.Driver
  *     url: jdbc:postgresql://
  *   username:
  *   password:
    
 Esos son los valores por defecto, solo cambiarian el driver
 si es el caso que es una BD diferente.
 
 ! En la url: va el dominio y el puerto de la BD
 ! En username: va el nombre de usuario para loggearse en la BD
 ! En password va la contraseña para loggearse a la BD
 
 Ejemplo de conexion con una BD local de PostgreSQL:
 
 *  spring:
 *    datasource:
 *      driver-class-name: org.postgresql.Driver
 *    url: jdbc:postgresql://localhost:5432/apione_db
 *    username: postgres
 *    password: admin
	*/
	
	/*
	 ? TODO #####################################################
	 ? TODO CONFIGURACION DE JPA ################################
	 ? TODO #####################################################
	 */
	/*
	En el mismo archivo de application.yml vamos a agregar de
	la misma forma la configuracion de JPA:
	
	*jpa:
  * hibernate:
  *   ddl-auto: update
  * show-sql: true
   
 hibernate: establecemos que Hibernate sera el proveedor de JPA
 ddl-auto: establecemos el comportamiento del ORM
  ! validate -> Valida el esquema, hace cambios en la BD
  ! create-only -> Una creacion de la BD  sera generada
  ! drop ->  Una eliminacion del BD sera generada
  ! update -> Actualiza el esquema
  ! create -> Crea el esquema, destruyendo el esquema anterior
  ! create-drop -> Elimina el esquema cuando la aplicacion es detenida
  ! none -> No hace nada con el esquema, no hace cambios
  ! show-sql: Recibe true o false si es que deseas que el codigo SQL
      ejecutado se muestre en la consola.
	*/

/*
 ? TODO ####################################################
 ? TODO DESGLOCE DE LA CAPA DOMAIN #########################
 ? TODO ####################################################
 */
	/*
    En esta carpeta vamos a colocar nuestros modelos o entidades
    de nuestra aplicacion.
    
    Dentro de domain creamos el package:
    * entity
  */
	
	/*
 ? TODO ####################################################
 ? TODO CREACION DE UNA ENTIDAD EN SPRINGBOOT ##############
 ? TODO ####################################################
 */
	//? @Entity
	//? @Table(name = "category")
//? 	public class Category {
	//?	    @Id
	//?	    @GeneratedValue(strategy = GenerationType.SEQUENCE)
	//?	    private Long id;
	//?	    @Column(name = "name", nullable = false, length = 50)
	//?	    private String name;
//? 	}
	
	/*
	! @Entity:
			Esta etiqueta de spring nos ayuda a indicarle
	    al mismo que esta clase se trata de una entidad
	! @Table:
			Nos permite establecer el nombre de la tabla que se
	    se guardara en la BD
	    ? @Table(
	    ?   name="tableName"
	    ? )
	! @Id:
			Nos permite definir que el campo debajo de la etiqueta
		  ahora sera tomado como el ID
	! @GeneratedValue:
			Obliga al campo a que sea autoincremental o podemos definir
			el tipo de secuencia dependiendo de los parametros.
			? @GeneratedValue(
			?   strategy=GenerationType.IDENTITY  -> autoincrementable +1
			?   startegy=GenerationType.SEQUENCE  -> tu defines la sequencia
			?)
	! @Column:
			Nos permite indicar que la variable de abajo sera una
	    columna y podemos. En esta columna podemos indicar todas
	    las caracterisiticas de la columna si como sus restricciones
	    ? @Column(
	    ?   name="ColumnName",
	    ?   nullable=false,
	    ?   length=512
	    ? )
	*/
	
	/*
 ? TODO ####################################################
 ? TODO NOTACIONES CON LOMBOK ##############################
 ? TODO ####################################################
 */
	//? @AllArgsConstructor @NoArgsConstructor @Getter @Setter
	/*
		Con la libreria de Lombok podemos ahorrarnos la escritura
		de codigo del constructor, de setters y getters de las
		propiedades de nuestra entidad.
		
		! @AllArgsConstructor:
				Crea un constructor que recibe todos los valores de las
				propiedades de la entidad
		! @NoArgsConstructor:
				Crea un constructor vacio o sin argumentos, para crear
				instancias de la entidad sin necesidad de pasar parametros
		! @Getter:
				Crea todas las funciones get para cada una de las
				propiedades de la entidad
		! @Setter:
				Crea todas las funcion set para cada una de las
				propiedades de la entidad
	*/
	
	/*
 ? TODO ####################################################
 ? TODO RELACIONES EN SPRINGBOOT ###########################
 ? TODO ####################################################
 */
	//! ONE TO ONE (Uno a Uno)
	/*
		En esta relacion podemos decir que un Alumno puede tener
		asociado un objeto carrera o que una carrera puede tener un
		objeto alumno asociado, cualquiera de los dos esta bien.
	
		Esto significa que la llave foranea puede estar en cualquiera
		de los objetos relacionados.
		
		Para generar esta relacion, entonces, solo basta con crear un
		objeto como propiedad en la entidad que mas logica tiene, por
		ejemplo aqui es mas logico crearla en Alumno
	*/
	//? @OneToOne
	//? private Career career;
	/*
	 Con la creacion de esta propiedad y la anotacion
	 @OneToOne de JPA, es como estamos estableciendo la
	 relacion OneToOne entre un Alumno y una Carrera.
	 
	 De esta forma decimos que un alumno pertenece
	 a una carrera
	*/
	/*
	! ONE TO MANY (Uno a Muchos)
	 En Base de Datos, cuando tenemos que crear una relacion
	 OneToMany, la llave foranea siempre va del lado Many(n).
	 Es decir, aqui una Carrea tiene varias materias, por lo que
	 la llave foranea de Carrera iria en la tabla materia
	*/
	/*
	 En nivel logico, esta relacion se establece a traves de
	 una lista de objetos la cual va del lado del OneTo(1 to).
	 Es decir, en este caso tiene mas sentido que la Carrera
	 conozca la lista de Materias a que la Materia conozca la
	 Carrera
	*/
	//? @OneToMany
	//? private LinkedList<Subject> subjectList;
	/*
	 Mediante la anotacion OneToMany y una lista de objetos es
	 como establecemos una relacion de Uno a Muchos. En este
	 caso solo es unidireccional, pues solo le estamos indicando
	 a Carrea que esta asociada a una lista de Materias, pero
	 a Materia no le estamos indicando nada.
	*/

//! MANY TO ONE (Muchos a Uno)
	//? @ManyToOne(optional = false)
	//? @JoinColumn(
	//?		name = "category_id",
	//?		referencedColumnName = "id",
	//?		insertable = false,
	//?		updatable = false
	//? )
	//? private Category category;
	/*
	Este es un ejemplo de como podemos establecer una relacion
	ManyToOne(Muchos a Uno) en SpringBoot. En este caso se lee:
	Muchos productos pertenecen a una categoria.
	
	! @ManyToOne(
	!   optional = false
	! )
		Esta es la anotacion para establecer una relacion de muchos
		a uno, en el optional indicamos si este dato es opcional o
		requerido
	! @JoinColumn(
	!   name = "category_id",
	!   referencedColumnName = "id",
	!   insertable = false,
	!   updatable = false
	! )
		Esta es la anotacion para indicar la conexion con la tabla:
		name = nombre de la columna para la llave foranea
		referencedColumnName = establece cual es el dato que sera
				la llave foranea
	*/
}
