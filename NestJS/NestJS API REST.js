/*
-- NestJS es muy similar a Spring-Boot, ambos usan anotaciones, solo
-- que aqui los llaman decoradores, de igual forma tenemos @Controller
-- @Module @Get etc. Al igual que Java y Spring-Boot todos los
-- archivos que se crean se manejan como clases y lo que les extiende
-- la funcionalidad son los decoradores.
*/

//?--------------------------------------------------------------
//?     NOTAS IMPORTANTES
//?--------------------------------------------------------------
//! Seeders
/*
-- Los seeders son archivos que nos permiten inicializar y/o cargar
-- datos a nuestra base de datos. Esto nos ayuda cuando queremos tener
-- registros de prueba y no querramos estar cargandolos a mano desde
-- postman o alguna otra herramienta. Con los seeders basta con
-- ejecutar el archivo y ser cargaran los datos establecidos en la
-- seed.
*/

//! Migrations
/*
-- Las migraciones nos permiten realizar modificaciones a una o varias
-- tablas sin perder la informacion que ya contienen las mismas.
-- 
-- Las migraciones son usadas en ambiente de produccion, ya que aqui
-- es donde no podemos perder la informacion. Asi mismo, las
-- migraciones nos sirven como un registros de los cambios que fueron
-- relaizados en la base de datos.
*/

//! Seteo de variables de entorno desde el package.json
/*
-- Podemos setear el valor de las variables de entorno desde los
-- scripts en el package.json, este es un ejemplo de uso en el que
-- seteamos el valor de NODE_ENV para cambiar entre ambientes de
-- desarrollo y produccion:
* "start:dev": "set NODE_ENV=develop&& nest start --watch"
* "start:prod": "set NODE_ENV=production&& nest start --watch"
*/


//?--------------------------------------------------------------
//?     PROBLEMAS COMUNES
//?--------------------------------------------------------------
//! contains items emphasized problem
//* Ctrl + Shift + P --> "Developer: reload window" --> Enter

//! CRLF TO LF Prettier Problem
/*
-- Ir a la barra inferior de herramientas, al lado de UTF-8 estan las
-- letras CRLF, hay que cambiarlas a LF. Esto soluciona el problema
-- de forma local para cada archivo, si queremos que sea global para
-- los archivos del proyecto podemos ejecutar el siguiente comando:
* git config --global core.autocrlf false
*/


//?--------------------------------------------------------------
//?     INSTALACION DEL CLI DE NESTJS
//?--------------------------------------------------------------
/*
-- Debemos instalar el CLI de NestJS de manera global, para que
-- podamos usar sus comandos desde cualquier termina bash.
-- 
-- El CLI nos permite crear y ejecutar proyectos con NestJS.
* npm install @nestjs/cli -g
*/


//?--------------------------------------------------------------
//?     CREAR Y ACCEDER VARIABLES DE ENTORNO EN NESTJS
//?--------------------------------------------------------------
/*
-- Debemos instalar el paquete config de NestJS, eso lo hacemos con
-- el comando:
* npm install --save @nestjs/config
*/

//?--------------------------------------------------------------
//?     CREACION DE UN NUEVO PROYECTO CON EL CLI DE NESTJS
//?--------------------------------------------------------------
/*
-- Para crear un nuevo proyecto de NestJS nos ubicamos en el directorio
-- en el que queremos que se cree la carpeta de nuestro proyectos y
-- ejecutamos el siguiente comando:
* nest new <project_name>
-- 
-- Este comando crea una plantilla completa de un proyecto basico con
-- NestJS. Para poder levantar este proyecto ejecutamos el comando:
* npm run start:dev
*/


//?--------------------------------------------------------------
//?    USO DE COMANDOS DEL CLI
//?--------------------------------------------------------------
/*
-- NestJS nos permite usar comandos para generar recursos en nuestro
-- proyecto. Podemos crear clases, controllers, decoradores, filtros,
-- interfaces, etc. Para ver los comandos disponibles ejecutamos:
* nest
*/

/*
-- Podemos generar cada archivo por separado o tambien podemos generar
-- el CRUD complete de nuestro modulo en la aplicacion. Esto se logra
-- con el comando:
* nest generate resource <resource_name> --no-spec
-- 
-- Cuando usamos el comando resource, este nos va a preguntar que
-- tipo de resource deseamos generar, aquellos que podemos generar
-- son los siguientes:
* REST API
* GraphQL (code first)
* GraphQL (schema first)
* Microservice (non-HTTP)
* WebSockets
-- 
-- Cada recurso sera en base al tipo de proyecto que estamos creando
-- y al tipo de protocolo de comunicacion que estamos usando.
-- 
-- Por ejemplo, para crear un modulo ejecutamos el comando:
* nest generate module <module_name>
-- 
-- Para generar un controlador sin su archivo de testing ejecutamos
-- el comando:
* nest generate controller <controller_name> --no-spec
-- Si retiramos el flag --no-spec, entonces tambien se creara un
-- archivo de testing para el controlador
-- 
-- Para crear un servicio usamos el mismo comando:
* nest generate service <service_name> --no-spec
-- 
-- Comando para generar un archivo en carpetas especificas. Aqui
-- especificamos que en el module user se cree una carpeta llamada
-- 'services' y la parte findal sera el nombre del archivo, es
-- importante usar el flag --flat, de lo contrario creara toda esta
-- estructura dentro de user, teniendo una carpeta user anidada:
* nest generate service user/services/user --flat --no-spec
*/


//?--------------------------------------------------------------
//?    GENERAR EL BUILD DEL PROYECTO (Carpeta Dist)
//?--------------------------------------------------------------
/*
-- Para generar la carpeta build de nuestro proyecto, la cual va a ser
-- desplegada, usamos el comando:
* npm run build
*/


//?--------------------------------------------------------------
//?    CLASS-VALIDATOR EN NESTJS
//?--------------------------------------------------------------
/*
-- NestJS cuenta con una libreria que nos permite validar las
-- propiedades de las clases/entidades de nuestra aplicacion, este se
-- instala con el comando:
* npm install --save class-validator class-transformer
*/


//?--------------------------------------------------------------
//?    CONEXION CON MongoDB
//?--------------------------------------------------------------
/*
-- Primero hay que instalar el ORM mongoose y el modulo de NestJS que
-- permite trabajar con mongoose, para eso ejecutamos el comando:
* npm install @nestjs/mongoose mongoose
*/


//?--------------------------------------------------------------
//?    TypeORM PARA BASES DE DATOS RELACIONALES
//?--------------------------------------------------------------
/*
-- Para trabar con MySQL, instalamos typeorm y el driver de mysql2
* npm install --save @nestjs/typeorm typeorm mysql2
-- 
-- Para trabajar con PostgreSQL, instalamos typeorm y el driver pg
* npm install --save @nestjs/typeorm typeorm pg
*/


//?--------------------------------------------------------------
//?    CONFIGURACION DEL DataSoruce PARA TypeORM
//?--------------------------------------------------------------
/*
-- El DataSoource es un objeto de TypeORM, el cual contiene toda la
-- configuracion para conectarse con una base de datos a traves de
-- TypeORM
*/
//* import { DataSource, DataSourceOptions } from 'typeorm';
//* import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

//* export const dataSourceOptions: DataSourceOptions = {
//*     type: 'postgres',
//*     host: 'localhost',
//*     port: '5432',
//*     username: 'postgres',
//*     password: 'admin',
//*     database: 'database_name',
//*     entities: [__dirname + '/../**/**/*.entity{.ts,.js}'],
//*     migrations: [__dirname + '/../../migrations/*{.ts,.js}'],
//*     synchronize: false,
//*     migrationsRun: true,
//*     logging: falsem
//*     namingStrategy: new SnakeNamingStrategy(),
//* };

//* export const AppDs = new DataSource(DataSourceConfig);


//?--------------------------------------------------------------
//?    GENERAR MIGRACIONES CON TypeORM
//?--------------------------------------------------------------
/*
-- Primero se deben agregar los siguientes comandos en el package.json
* "orm:init" "typeorm-ts-node-esm -d ./src/config/data.source.ts",
* "m:gen": "set NODE_ENV=develop&& npm run orm:init migration:generate",
* "m:run": "set NODE_ENV=develop&& npm run orm:init migration:run"

-- El primer comando solo ejecuta el ORM pasandole la ruta del data.source
-- este comando es usado por los dos comandos siguientes.
-- 
-- El segundo comando genera el archivo de migracion, recibe la ruta
-- en la cual se va a guardar el archivo de migracion. El comando se
-- debe ejecutar de esta forma:
* npm run m:gen -- ./migrations/<migration_file_name>
-- Donde ./migrations es la ruta donde queremos que se guarde el archivo
-- y el segundo parametro el nombre que queremos que tenga el archivo.
-- 
-- El tercer comando es el que ejecuta la migracion si todo ha salido
-- bien, el comando se ejecuta de esta forma:
* npm run m:run
*/


//?--------------------------------------------------------------
//?    INTEGRAR SERVICIOS/APIs EXTERNAS CON NESTJS
//?--------------------------------------------------------------
/*
En esta parte se explica un ejemplo de como puedes crear servicios
en un tu aplicacion de NestJS, los cuales se comunican con otros
servicios o APIs externas a la nuestra.

Lo primero es instalar el modulo de axios para poder consumir las
APIs externas.
* npm install --save @nestjs/axios axios
*/