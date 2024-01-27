//? ---------------------------------------------------------------
//?     EJEMPLO DE UNA API REST DOCKERIZADA
//? ---------------------------------------------------------------
/*
-- NOTA: Cada que se vaya a desplegar una nueva version de la aplicacion
-- con Docker, debemos generar un nuevo build para que COPY use la
-- version mas actual de nuestra aplicacion.

1.- [FROM] Primero elejimos la version del jdk que usaremos como imagen
-- para crear nuestro contenedor.

2.- [COPY] Indicamos la ruta y el nombre donde se encuentra el
-- ejecutable de nuestra aplicacion.

-- Para generar el ejecutable, debemos generar un build del proyecto,
-- usando el comando
* ./mvnw clear package -DskipTests
-- podemos generar el ejecutable desde la consola.

-- Este ejecutable siempre se guarda en la carpeta target.
-- Una vez pasamos la ruta dy nombre, damos un espacion y le damos
-- el nuevo nombre que tendra el ejecutable dentro del contenedor de
-- docker

3.- [ENTRYPOINT] Indicamos el comando que se ejecutara una vez que se
-- levante el contenedor de docker de nuestra aplicacion

-- Este comando es el que ejecutara nuestro .jar, es el mismo que se
-- usaria para correr un archivo .class pero pasando la bandera -jar
-- para especificar que se trata de nuestro .jar
* java -jar java-app.jar

-- La anterior forma seria para la consola, para definirlo en el
-- Dockerfile seria de la siguiente forma:
* ["java", "-jar", "java-app.jar"]

-- Entonces, finalmente nuestro Dockerfile quedaria de la siguiente
-- forma:
* FROM openjdk:17-jdk-alpine
* COPY target/follow-my-job 0.0.1-SNAPSHOT.jar java-app.jar
* ENTRYPOINT ["java", "-jar", "java-app.jar"]
*/