package org.example.tryCatch;

@SuppressWarnings("SpellCheckingInspection")
public class TryCatchMain {
	public static void main(String[] args) {
		/*
		 TODO|########################################################
		 TODO|  USO DE TRY-CATCH EN JAVA #############################
		 TODO|########################################################
		*/
		/*
		 La estructura try-catch nos permite capturar y manejar
		 errores en nuestro codigo en tiempo de ejecucion
		*/
		
		try {
			int result = 5 / 0;
		} catch(ArithmeticException error) {
			error.printStackTrace();
			// Con esta linea es como mostramos el error en consola
		} finally {
			System.out.println("Cierre de recursos");
			/*
			 El codigo que se encuentra dentro de la clausula finally
			 se ejecuta si o si, sin importar si ocurrio un error
			 o no.
			 Por ejemplo aqui cerrariamos una conexion con la BD
			*/
		}
		
		System.out.println("fin");
		
		/*
		 NOTA: podiramos colocar el tipo Exception para el error
		 pero es una buena practica y mas recomendable colocar el
		 tipo de error que queremos capturar.
		 
		 NOTA: try-catch capura el error y permite que siga la
		 ejecucion del codigo, por lo que la impresion de "fin"
		 si se mostraria en consola
		*/
	}
}
