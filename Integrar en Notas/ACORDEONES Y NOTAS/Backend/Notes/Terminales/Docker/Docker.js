//! ############################################################
//! COMANDOS DE DOCKER #########################################
//! ############################################################
//? Ctrl + Insert
// Comando para copiar texto desde la consola en windows

//? Shift + Insert
// Pegar texto en la consola en windows

//! ############################################################
//! COMANDOS DE DOCKER #########################################
//! ############################################################
// Para trabajar con contenedores primero debemos descargar la 
// imagen de Docker de la aplicacion que deseamos utilizar

// Bajar una imagen de Docker desde dockerhub.com
//? docker pull mysql
// La imagen es una especie de plantilla/instalador de la
// aplicacion

// Ejecutar una imagen de Docker
//? docker run mysql
// Al ejecutar una imagen lo que hacemos es levantar una instancia
// de la ejecucion de la aplicacion, pudiendo inclusive tener
// varias instancias de mysql levantadas al mismo tiempo en puertos
// diferentes 

// Mostrar el listado de las imagenes/plantillas que se tienen
// de forma local
//? docker images

// Borar una o varias imagenes de Docker
//? docker rmi image1 image2 ...

// Mostrar los contenedores que estan en ejecucion
//? docker ps

// Listar todos los contenedores aunque no esten en ejecucion
//? docker ps -a

// Eliminar uno o varios contenedores
//? docker rm container1 container2 ...

// Eliminar uno o varios contenedores de manera forzada
//? docker rm container1 container1 ... -f

// Listar los volumenes
//? docker volume ls

// Eliminar uno o varios volumenes
//? docker volume rm volume1 volume2 ...

//! ############################################################
//! COMANDOS PARA MANIPULAR CONTENEDORES #######################
//! ############################################################
// Establecer configuraciones del contenedor en el comando run
//* -e 
//    Indica que vamos a establecer variables de entorno
//* MYSQL_ROOT_PASSWORD=''
//    Indica el seteo de la variable de entorno para la contraseña
//    del contenedor de mysql
//* --name ''
//    Nos permite definir la propiedad name del contenedor, esto
//    para poder identificarlo
//? docker run -e MYSQL_ROOT_PASSWORD=admin --name mysql-container mysql

// Detener la ejecucion de un contenedor
// El comando recibe el nombre que se asigno en la bandera --name o
// el id del contenedor devuelto en el comando docker ps.
// Opcionalmente se le puede pasar la cantidad de segundos que debe
// esperar para finalizar la instancia, por defecto es 10 segundos
//? docker stop mysql-container

// Eliminar un contenedor de docker.
// Tambien puede recibir el id del contenedor, el cual es devuelto
// en el comando docker ps
//? docker rm mysql-container

// Conectarme a un contenedor/instancia
// Para esto debemos tener el contenedor levantado y en una nueva
// terminarl ejecutamos el comando:
//* exec
//    Este comando nos permite usar porgramas de docker
//* -it
//    Esta bandera establece que la ejecucion de de forma iterativa
//* mysql-container
//    Nombre del contenedor, el cual le asignamos en el comando docker run
//* bash
//    Dado que el contenedor esta sobre una distribucion de linux,
//    podemos usar comandos/aplicaciones de linux, aqui usamos la terminal
//    bash de linux
//? docker exec -it mysql-container bash
// Este comando ejecuta una terminal bash en la misma terminal CMD, la
// cual trabaja con linux, y es como si estuvieramos trabajando en el
// sistemas operativo de linux donde tenemos accesos a todos los comandos
// del mismo

// Levantar un contenedor de docker estableciendo el puerto donde va
// a estar escuchando
//* -p
//    Esta bandera nos permite definie el puerto en el cual se va a
//    levantar la aplicacion del contenedor de DockerS
//* 7777:3306
//    Esta es la sintaxis para establecer un nuevo puerto, primero va
//    el puerto en el que deseamos que se levante la aplicacion de forma
//    externa al contenedor y despues va el puerto que utiliza por
//    defecto de forma interna el contenedor
//? docker run --name mysql-container2 -p 7777:3306 -e MYSQL_ROOT_PASSWORD=nuevacontraseña mysql

// Levantar un contenedor de Docker, pero que al detenerlo este se
// borre tambien. Para eso se usa la bandera
//* --rm
//? docker run --rm mysql-container
// Generar una imagen de Docker a partir de un Dockerfile
//* -t
//    Establece el nombre de la imagen, la cual Docker reconoce como
//    una tag, por eso la t en la bandera
//* node-app
//    Nombre que le asignamos al contenedor para podr identificarlo
//* .
//    Indica la ruta donde se encuentra el archivo Dockerfile, en este
//    caso el '.' indica que se encuentra en la carpeta raiz
//? docker build -t node-app .

// Entrar a los archivos de un proyecto almacenado en un contenedor
// de docker
// El comando recibe el nombre que se establecio en la bandera --name
// al levantar el contenedor. batch es la aplicacion que se ejecuta
// al entrar en la carpeta
//* NOTA: Esto es como entrar a navegar en el sistema operativo de
//* Linux donde esta nuestra aplicacion, dado que despues de este
//* comando podemos navegar con la terminal bash y ejecutar cualquier
//* comando de la misma
//? docker exec -it mysql-container batch

// Para salir de esta ejecucion solo ejecutamos el comando:
//? exit

//! ############################################################
//! MIGRACIONES EN BASE DE DATOS CON ORM #######################
//! ############################################################
//* NOTA: Las migraciones nos permiten realizar modificaciones en la
//* estructura de la base de datos de manera progresiva, todo esto
//* sin perder la informacion que previamente ya contenia la(s) tablas

//* Es necesario generar el archivo de migraciones y ejecutar el mismo
//* para que estos cambios sean aplicados en la BD.

//* El archivo de migraciones no es mas que codigo SQL puro que es
//* generado por el ORM


//! ############################################################
//! COMANDOS PARA GENERAR Y EJECUTAR MIGRACIONES ###############
//! ############################################################
// Estos comandos pueden ser agregado en la seccion scripts del
// package.json para ser ejecutados con mas comodidad. Puedes
// Encontrarlo en la documentacion de TypeORM -> Migrations

//? "orm:init": "typeorm-ts-node-esm -d ./src/config/data.source.ts"
// Este comando inicia el servicio del ORM que estemos usando, se le
// debe pasar la ruta para acceder al archivo que contiene la DataSourceConfig
// necesaria para conectarse a la base de datos

//? "m:gen": "set NODE_ENV=develop&& npm run orm:init migration:generate"
// Este comando genera el archivo de migracion, se le debe pasar la
// ruta donde sera almacenado el archivo y el nombre que tendra de esta
// forma:
//* npm run m:gen -- ./src/migrations/init
// Esta es otra forma de generar la migracion:
//* npx typeorm-ts-node-esm migration:generate ./src/migrations/update-post-table -d ./src/data-source.ts

//? "m:run": "set NODE_ENV=develop&& npm run orm:init migration:run"
// Este comando ejecuta las migraciones realizando los cambios en la
// base de datos

//* npx typeorm-ts-node-esm migration:run -- -d path-to-datasource-config
// Esta es la forma que que tambien se puede lograr en base a la documentacion
// de TypeORM

// Nota: Como puedes ver, ambos comandos usan el comando orm:init, este
// es necesario para ejecutar el ORM. Igualmente, ambos comandos setean
// la variable NODE_ENV en develop, esto es debido a que el DataSourceConfig
// lee las variables desde el .env, y con esta instruccion indicamos que
// las variables leidas sean las del entorno de desarrollo