//! ############################################################
//! ARCHIVO yml DE DOCKER COMPOSE ##############################
//! ############################################################
// Docker Compose es una aplicacion/servicio de docker que nos permite
// tener varios contenedores de docker en un mismo entonro de 
// desarrollo y que estos, puedan comunicarse entre si.

// Para esto, es necesario crear un archivo llamado docker-compose.yml
// en el cual se establecen las configuraciones de los contenedores
//* version
//    Establece la version de docker-compose que se va a utilizar
//* services
//    Se establece la configuracion de los contenedores de docker
//    que van a ser creados y tendran comunicacion entre si. Cada
//    contenedor se identifica com un servicio
//* node-service, example_pg, ...
//    Este es una especie de identificador para docker-compose, pude
//    llevar el nombre que deseemos.
//* image
//    Establece la imagen que sera utilizada para el contenedor del
//    servicio/contenedor
//    En la image tambien podemos definir la version de la imagen
//    que desamos colocandola despues de ':' (postgres:15.4)
//* container_name
//    Establece el nombre del servicio/contenedor, es lo mismo que hace
//    la bandera --name. Este nombre puede ser el mismo que el del
//    servicio, no genera ningun problema y es mas facil no confundirse
//* restart:always
//    Esta instruccion indica que el contenedor de docker se va a
//    levantar recien se inicie la maquina que contiene la instancia
//    donde esta creado. Esto signifcia que no tendremos que levantar
//    el servicio con 'docker-compose up', si no que este se ejecuta de
//    forma automatica cada que se inicia la maquina
//* environment
//    Nos permite setear las variables de entorno para la aplicacion
//    que se va a ejecutar en el contenedor del servicio, en este caso
//    pasamos las de conexion con PostgreSQL, estas pueden ser las que
//    nosotros querramos
//* volumenes
//    Los volumenes suponen el modo en el que Docker permite persistir
//    los datos de tu aplicacion. Estos son alojados fuera del propio
//    contenedor, en el propio sistema de archivos del host donde
//    esta corriendo docker, de tal manera que se puede cambiar, apagar,
//    o borrar el contenedor sin que afecte a los datos
//*   ./db/init.sql
//    Es la ruta local en la cual tenemos creado nuestro archivo init.sql
//    Lo que hace este archivo es crear la base de datos en caso de que no
//    exista, pero esto ocurrira en el contenedor de docker
//*   /docker-entrypoint-initdb.d/init.sql
//    Es la ruta del contenedor en la cual se va a copiar nuestro archivo
//    init.sql, de esta forma el contenedor podra crear la base de datos
//    en la instancia de Linux
//* ports
//    Establece la configuracion de los puertos en la misma sintaxis
//    de Docker, donde primero va el puerto que queremos usar en nuestra
//    maquina y despues el puerto que el contenedor esta usando de
//    forma interna en le instancia de Linux
//* build .
//    Espera la ruta donde se encuentra el Dockerfile para crear la
//    imagen del servicio/contenedor a partir del mismo. Se coloca
//    un punto debido a que el Dockerfile se encuentra al mismo nivel
//    que el docker-compose.yml
//* command
//    Establece el comando que va a ser ejecutado al iniciarse el
//    contenedor, comunmente este seria el comando del package.json
//    para levantar el servicio

//? version: '3.9'

//? services:
//?   node-service:
//?     image: node:16
//?     container_name: node-project
//?     ports:
//?       - 5000:3000
//?     build: .
//?     command: node server.js
//?   example_pg:
//?     image: postgres:15.4
//?     container_name: example_pg
//?     restart: always
//?     environment:
//?       - POSTGRES_DB: example_db
//?       - POSTGRES_USER: postgres
//?       - POSTGRES_PASSWORD: admin
//?     volumes:
//?       - ./db/init.sql:/docker-entrypoint-initdb.d/init.sql
//?     ports:
//?       - 5432:5432

// Levantar la red de contenedores de docker-compose
// NOTA: Verificar que Docker este en ejecucion para que los servicios
// puedan ejecutarse
//? docker-compose up

// Levantar solo 1 de los servicios de la red de contenedores
//* example_pg
//    Es el nombre que se le dio al servicio en el archivo docker-compose
//    y el cual deseamos levantar unicamente
//? docker-compose up example_pg

//* NOTA: Cuando realizamos conexiones a contenedores ya no podemos
//* usar el 'localhost' dado que esta aplicacion este en el contenedor
//* de Docker en la distribucion de linux, por ende ahora usariamos
//* el nombre asignado en la bander container_name
// Ejemplo: la conexion con mongodb ejecutandose en un contenedor de
// Docker seria:
//? await mongoose.connect('mongodb://example-db/users_db')
// Donde example-db es el nombre asignado en la variable container_name
// del archivo docker-compose.yml y user_db es el nombre de la base
// de datos a la cual nos vamos a conectar