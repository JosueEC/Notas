//? --------------------------------------------------------------
//?     EJEMPLO DE LA SINTAXIS DE UN docker-compose.yml
//? --------------------------------------------------------------
/*
* 1.- [version] 
-- Definimos que version de docker-compose vamos a
-- utilizar.

* 2.- [services]
-- Definimos los servicios que se van a levantar al
-- ejecutar el comando:
* docker-compose up -d

-- NOTA: En el docker-compose.yml tambien podemos deinir el container
-- de nuestra API RESTful para que este tambien se levante en conjunto
-- con los demas servicios.

* 3.- [java_app]
-- Nombre del servicio.
* [container_name]
--      Nombre que tendra el container cuando sea creado.
* [image]
--      Que imagen se usara como base para crear la nuestra, por
--       ejemplo, si es un servicio de postgres, usamos la imagen
--      [postgres:version], en el caso de una API RESTful podemos
--      poner el nombre de image que nosotros querramos.
* [build]
--      Ruta donde se encuentra el dockerfile de nuestra API REST
--      para que se pueda construir el container a partir de este
--      Dockerfile.
--      NOTA: El build solo se usa cuando se va a construir a partir
--      del Dockerfile que definimos en nuestra API RESTful, pero, por
--      ejemplo, en el servicio de [java_db] no es necesario, ya que
--      la imagen sera desacargad de DockerHub en ves de ser construida
--      a partir de un Dockerfile.
* [ports]
--      Puertos que seran expuestos para uso de nuestra aplicacion, el
--      primero es el puerto que expondra nuestro container y el segundo
--      es el puerto que "por defecto" usa el servicio que estamos
--      creando por dentro del container
* [environment]
--      Definicion de las variables de entorno que require el container
--      En este caso require las variables de conexion con una base de
--      datos de PostgreSQL.
--      NOTA: Observa que en el servicio de [java_db] el nombre de las
--      variables de entorno ya esta definido por una imagen de postgres
--      por eso empiezan con el sufijo POSTGRES_
* [jdbc:postgresql://java_db:5432/postgres]
--      Es la URI de conexion usada por el JDBC para conectarse a la
--      base de datos. El [java_db] es el dominio, antes seria
--      localhost, pero dado que nos vamos a conectar al contenedor que
--      se crear en el segundo servicio, es por eso que pasamos el
--      nombre de ese servicio.
* [depends_on]
--      Dado que la conexion con la base de datos depende de que antes
--      se haya levantado el servicio de [java_db], esto lo podemos
--      definir aqui, muy util para definir que el correcto funcionamiento
--      de un servicio depende de que primero se levante otro u otros
--      servicios.

* version: '3.9'

* services:
*   java_app:
*     container_name: java_app
*     image: java-app:1.0.0
*     build: .
*     ports:
*       - 8080:8080
*     environment:
*       - DB_URL=jdbc:postgresql://java_db:5432/api-rest-db
*       - DB_USERNAME=postgres
*       - DB_PASSWORD=postgres
*     depends_on:
*       - java_db
*   java_db:
*     container_name: java_db
*     image: postgres:12
*     ports:
*       - 5433:5432
*     environment:
*       POSTGRES_USER: postgres
*       POSTGRES_PASSWORD: postgres
*      POSGTRES_DB: api-rest-db
*/