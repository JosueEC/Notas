//? ---------------------------------------------------------------
//?     DESARROLLO DE MICROSERVICIOS CON NestJS (MONOREPO)
//? ---------------------------------------------------------------
/*
-- Para empezar, debemos crear la aplicacion base de nuestro proyecto
-- de microservicios. Esto los podemos hacer con el comando:
-- * nest new <app_name>

-- Esta primera aplicacion sera la que actuara como nuestra api-gateway

-- Lo siguiente es empezar a generar nuestros servicios, esto lo
-- logramos con el comando:
* nest generate app <service_name>

-- Ahora generaremos un modulo en el cual ira la logica que deseemos
-- compartir entre servicios, cosas como guards, funciones, modulos,
-- etc.

-- NOTA: Esto es muy util y posible cuando creamos microservicios en
-- un monorepo, ya que las librerias/scripts se comparten en el
-- directorio raiz. Para ello usamos el comando:
* nest generate library <library_name>
*/


//? ---------------------------------------------------------------
//?     INSTALACION DE LIBRERIAS NECESARIAS
//? ---------------------------------------------------------------
/*
-- Para cualquier aplicacion de NestJS necesitamos el modulo de
-- configuracion:
* npm install --save @nestjs/config

-- Y para poder crear y trabajar con microservicios necesitamos el
-- respectivo modulo de NestJS:
* npm install --save @nestjs/microservices

-- Finalmente para este caso necesitamos las dependencias par usar
-- RabbitMQ como nuestro message broker:
* npm install --save amqplib amqp-connection-manager
*/


//? ---------------------------------------------------------------
//?     CREACION DEL ARCHIVO docker-compose.yml
//? ---------------------------------------------------------------
/*
-- Vamos a usar Docker para facilitar el uso del message broker de
-- RabbitMQ y la bases de datos de Redis y PostgreSQL.

-- Para eso debemos crear un archivo docker-compose.yml en el cual
-- definiremos la configuracion de nuestros servicios.

-- Lo primero es definir la version de docker-compose que usaremos y
-- a continuacion toca definir la configuracion de cada uno de los
-- servicios:

* version: '3'
* services:

-- Para RabbitMQ esta seria la configuracion:
* rabbitmq:
*    image: rabbitmq:3-management
*    container_name: rabbitmq
*    hostname: rabbitmq
*    volumes:
*      - /var/lib/rabbitmq
*    ports:
*      - '5672:5672'
*      - '15672:15672'

-- Usamos una image de rabbitmq en su version 3-management, definimos
-- el nombre del container y el nombre del host, asi como tambien
-- definimos un volumen para la persistencia de los datos.

-- Por defecto rabbitmq usa el puerto 5672 para exponer el servicio,
-- por lo que mapeamos este puerto. El segundo puerto es para poder
-- conectar una interfaz grafica de RabbitMQ Management y poder
-- monitorear y adminsitrar nuestra aplicacion de RabbitMQ.

-- NOTA: Es posible que en la primera vez que se crea el contenedor
-- de Docker, este no lea las variables de entorno, por lo que sera
-- necesario eliminar el contenedor y volver a crearlo para que ahora
-- si funcione correctamente.
*/


//? ----------------------------------------------------------------
//?    CONFIGURACION DE LOS SCRIPTS EN EL package.json
//? ----------------------------------------------------------------
//? ----------------------------------------------------------------
//?    GENERACION DE BUILDS PARA CADA MICROSERVICIO
//? ----------------------------------------------------------------
/*
-- Los siguientes comandos se pueden agregar al package.json, estos
-- reemplazan al comando build que ya esta por defecto en el mismo.

-- Estos comandos permiten generar el codigo compilado de forma
-- individual para cada microservicio asi como un solo comando que
-- puede generar ambos en una sola instruccion usando los otros 2
-- comandos.

* "build:api": "nest build api",
* "build:auth": "nest build auth",
* "build": "npm run build:api && npm run build:auth"
*/


//? ----------------------------------------------------------------
//?    GENERACION Y EJECUCION DE MIGRACIONES CON TypeORM
//? ----------------------------------------------------------------
/*
-- Este segundo comando es para poder ejecutar migraciones en
-- nuestros archivos. Este ejecuta typeorm y se le debe pasar la ruta
-- donde se almacena el codigo transpilado del archivo data-source.

* "typeorm": "npx typeorm -d ./dist/apps/auth/db/data-source.js"


-- En el caso de que algunos de nuestros otros microservicios tambien
-- tienen conexion con alguna base de datos, usan typeorm y queremos
-- generar migraciones, entonces podemos modificar los comandos para
-- que sean diferenciables para cada microservicio, ejemplo:

-- NOTA: Esto es necesario debido a que estamos en un monorepo Y
-- todos loc microservicios comparten el mismo package.json.

* "typeorm:auth": "npx typeorm -d ./dist/apps/auth/db/data-source.js"
* "typeorm:notification": "npx typeorm -d ./dist/apps/notification/db/data-source.js"


-- Este segundo comando, como puedes ver, hace uso del comando
-- anterior.
-- Este comando es el que genera el archivo de migracion...

* "generate:migration": "npm run typeorm -- migration:generate"

-- Este es un ejemplo de como generariamos una migracion con el
-- comando de arriba:

* npm run generate:migration -- apps/auth/src/db/migrations/<migration_name>

-- NOTA: Una migracion se refiere a cambios en la estructura de la
-- base de datos. Las migraciones ejecutan estos cambios cuando la
-- base ya se encuentra en produccion sin que se pierda lainformacion
-- Esto es muy util para no perder la persistencia y para llevar
-- un registro de los cambios que han ocurrido en la base de datos
-- asi como volver a puntos anteriores de la misma.


-- Y este otro comando es el que ejecuta ese archivo de migracion
-- generado.

* "run:migration": "npm run typeorm -- migration:run"


-- Como ves, los comandos: typeorm generate:migration y run:migration
-- trabajan en conjunto, primero ejecutarias generate:migration y si
-- todo sale bien ahora ejecutariamos esas migraciones con
-- run:migration


-- Adicionalmente tenemos el comando anterior que nos permite revertir
-- una migracion ejecutada, volviendo al estado anterior a esa
-- migracion.

* "revert:migration": "npm run typeorm -- migration:revert"
*/


//? ----------------------------------------------------------------
//?    IMPLEMENTAR UNA CAPA DE AUTENTICACION Y AUTORIZACION
//? ----------------------------------------------------------------
//? ----------------------------------------------------------------
//?    NestJS + PassportJS + Bcrypt
//? ----------------------------------------------------------------
/*
-- Primero hay que instalar las dependencias necesarias:
* npm install passport passport-jwt @nestjs/passport @nestjs/jwt bcrypt

-- Despues hay que instalar los tipos necesarios para trabajar con
-- passport-jwt y bcrypt
* npm install -D @types/passport-jwt @types/bcrypt
*/