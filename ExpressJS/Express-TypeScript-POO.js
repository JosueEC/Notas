//? -------------------------------------------------------------
//?     CREACION DEL PROYECTO
//? -------------------------------------------------------------
/*
-- Primero creamos el directorio raiz de nuestro proyecto:
* mkdir <directory_name>

-- Despues procedemos a iniciar un proyecto con NodeJS creando nuestro
-- package.json
* npm init --yes
*/

//? -------------------------------------------------------------
//?     INSTALACION DE DEPENDENCIAS (MySQL)
//? -------------------------------------------------------------
/*
-- Vamos a instalar las dependencias de PRODUCCION necesarias para
-- nuestro proyecto
* npm install class-validator cors dotenv express morgan mysql typeorm typeorm-naming-strategies

-- Ahora vamos con las dependencias de DESARROLLO asi como los tipos
-- para TypeScript que vamos a utilizar:

-- NOTA: 'concurrently' es una herramienta como nodemon para para
-- TypeScript
* npm install -D @types/cors @types/express @types/morgan concurrently nodemon
*/


//? -------------------------------------------------------------
//?    CONFIGURACION DE TYPESCRIPT
//? -------------------------------------------------------------
/*
-- Lo primero es crear nuestro archivo tsconfig.json mediante el comando:
* tsc --init

-- Este es un ejemplo de configuracion de opciones activas en el
-- tsconfig:

* "experimentalDecorators": true,
* "emitDecoratorMetadata": true,
* "outDir": "./dist",
* "strict": true, 
* "strictPropertyInitialization": true, 
*/

//? -------------------------------------------------------------
//?    CONFIGURACION DE SCRIPTS
//? -------------------------------------------------------------
/*
-- El primer script que vamos a definir es el de produccion, el cual
-- compila el codigo de TypeScript a JavaScript y ejecuta la aplicacion
-- servidor en codigo js usando node:
* "start": "tsc && node dist/server.js",

-- El segundo script es para le entorno de desarrollo, el cual queda
-- de la siguiente forma:
* "start:dev": "tsc && concurrently \"tsc --watch\" \"nodemon dist/server.js\" "

-- En ambos ejecutamos 'tsc' para compilar el codigo de TypeScript a
-- JavaScript.

-- El simbolo '\' se interpreta con 'escape' el cual nos permite
-- usar las comillas dobles ("") para encerrar las demas partes del
-- comando. Estos son otros comandos, por eso se encierran entre
-- comillas, como si estuvieran asignados a su propio script

-- Finalmente, usamos nodemon para ejecutar el archivo compilado y
-- almacenado en la carpeta dist/

*/