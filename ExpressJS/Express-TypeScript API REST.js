//? -------------------------------------------------------------
//?     API REST CON EXPRESSJS Y TYPESCRIPT
//? -------------------------------------------------------------
/*
-- Lo primero que debemos hacer es crear el directorio raiz de nuestro
-- proyecto:
-- * mkdir <folder_name>
*/


//? -------------------------------------------------------------
//?     INSTALACION DE DEPENDENCIAS
//? -------------------------------------------------------------
/*
-- Lo siguiente es instalar las dependencias necesarias para poder
-- usar TypeScript en nuestro proyecto. Esto se hace si aun no las
-- hemos instalado de forma global, de lo contrario esto ya no es
-- necesario:
* npm install typescript -g
* npm install ts-node -g

-- El primero es el modulo de typescript y el segundo es el modulo que
-- transpila codigo de typescript a javascript, ya que al final, todo
-- nuestro proyecto se convertira a javascript
*/


//? -------------------------------------------------------------
//?     CONFIGURACION DE TYPESCRIPT EN EL PROYECTO
//? -------------------------------------------------------------
/*
-- TypeScript require de un archivo ts-config donde se establecen las
-- reglas del lenguaje que usaremos en nuestro proyecto, para crearlo
-- usamos el comando:
* tsc --init
-- 
-- Este es un ejemplo de las configuraciones que podemos activar en
-- el archivo ts-config:
* "experimentalDecorators": true,
* "rootDir": "./src", 
* "outDir": "./dist",
* "noUnusedLocals": true, 
* "noUnusedParameters": true,
* "noImplicitReturns": true,
* "noFallthroughCasesInSwitch": true, 
*/


//? -------------------------------------------------------------
//?     CONFIGURACION DEL PROYECTO
//? -------------------------------------------------------------
/*
-- Lo anterior fue solo para poder implementar typescript en nuestro
-- proyecto, lo que sigue es igual a un proyecto de express con
-- javascript.

-- Primero creamos nuestro paackage.json con el comando:
* npm init --yes

-- Lo siguiente es crear de forma manual nuestro archivo:
* .gitignore
-- y añadir los node_modules al mismo.

-- Despues hay que crear nuestro
* .env
-- y añadir nuestras variables de entorno.
*/


//? -------------------------------------------------------------
//?     INSTALACION Y CONFIGURACION DEL LINTERN TS-STANDARD
//? -------------------------------------------------------------
/*
-- Este es el equivalente del lintern standard pero para TypeScript,
-- primero debemos instalar la dependencia:
* npm install ts-standard -D
-- 
-- Lo siguiente es agregar la configuracion del lintern en el
-- package.json:
* "eslintConfig": {
*     "extends": "./node_modules/ts-standard/eslintrc.json",
*     "parserOptions": {
*         "project": "./tsconfig.json"
*     }
* }
*/


//? -------------------------------------------------------------
//?     INSTALACION DE DEPENDENCIAS (MongoDB)
//? -------------------------------------------------------------
/*
* DEPENDENCIAS DE PRODUCCION
-- Las dependencias varian segun el tipo de proyecto que deseamos crear,
-- estas son dependencias para un proyecto de ejemplo con MongoDB:
* npm install express cors dotenv mongoose
-- 
-- Añadimos las dependencias de desarrollo:
* npm install nodemon -D

* DEPENDENCIAS DE DESARROLLO Y TIPOS PARA TYPESCRIPT
-- Cuando trabajamos con TypeScript usamos tipado en su sintaxis, es
-- por eso que debemos instalar tambien los tipos de las dependencias
-- que estamos utilizando, este es un ejemplo para las dependencias
-- que se estan usando como referencia:
* npm install @types/express @types/cors @types/dotenv @types/multer @types/mongoose -D
-- 
-- NOTA: Los types se instalan como dependencias de desarrollo.
*/


//? -------------------------------------------------------------
//?     DEPENDENCIAS PARA AUTENTICACION CON JWT
//? -------------------------------------------------------------
/*
-- Para manejar la autenticacion con JWT instalamos las dependencias
-- de esta forma:
* npm install bcryptj jsonwebtoken

-- Dado que estamos usando typescript, tambien instalamos los tipos
-- de las dependencias anteriores:
* npm install @types/bcryptjs @types/jsonwebtoken -D
*/


//? -------------------------------------------------------------
//?     EJEMPLO DEL CURSO DE CODERR
//? -------------------------------------------------------------