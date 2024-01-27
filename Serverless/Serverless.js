//? -------------------------------------------------------------
//?     SERVERLESS
//? -------------------------------------------------------------
/*
Es una solucion que permite crear y ejecutar aplicaciones con rapidez
y menor costo total de propiedad, ya que no es necesario
aprovisionar y administrar infraestructura
*/


//? -------------------------------------------------------------
//?     VENTAJAS DE SERVERLESS
//? -------------------------------------------------------------
/*
1.- Elimina la adminsitracion de infraestructura
2.- Escalabilidad
3.- Reduccion de Costos
*/


//? -------------------------------------------------------------
//?     INSTALACION DEL CLI DE SERVERLESS
//? -------------------------------------------------------------
/*
Para poder empezar a trabajar con Serverless, lo primero es tener
su CLI instalado de forma global, para ello usamos el comando:
* npm install -g serverless

Gracias al CLI de Serverless, podemos crear plantillas para proyectos,
hacer despliegues desde local, etc.
*/


//? -------------------------------------------------------------
//?     USO DEL CLI DE SERVERLESS
//? -------------------------------------------------------------
/*
Crear una plantilla de un proyecto Serverless:
* sls create --template <template_name> --path <project_directory && project_name>

Por ejemplo, este seria el comando para crear un proyecto de
Serverless usando AWS, NodeJS y TypeScript:
* sls create --template aws-nodejs-typescript --path ./sls-nodejs-typescript
*/


//? -------------------------------------------------------------
//?     PLUGIN PARA USAR SERVERLESS DE FORMA LOCAL
//? -------------------------------------------------------------
/*
Hay una libreria/plugin de npm, con el cual podemos levantar
nuestra aplicacion de Serverless de forma local, para instalarlo,
usamos el comando:
* npm install serverless-offline --save-dev

1.- Una vez instalado, este se debe declarar en el array de plugins
del archivo serverlñess.js
* plugins: ['serverless-esbuild', 'serverless-offline'],

2.- Ahora hay que añadir un comando en los scripts del package.json
para levantar nuestro servicio con el plugin de serverless-offline,
el comando queda de la siguiente forma:
* "sls:dev": "sls offline --stage develop --region sa-east-1"
*/


//? -------------------------------------------------------------
//?     ESTRUCTURA DE CARPETAS
//? -------------------------------------------------------------
/*
Este es un ejemplo de una estructura de carpetas que podemos
utilizar en serverless framework. La idea seria separar las
entidades en sus respectivos directorios, y dentro de las
functions tambien separarlas por entidad, un ejemplo seria el
siguiente, para la entidad 'users':

* src
*   - functions
*       - users
*           - findAll
*           - index.ts
*   - libs
*   - users
*       - entity
*       - services
*/


//? -------------------------------------------------------------
//?     ESTRUCTURA DE CARPETAS
//? -------------------------------------------------------------
/*
En Serverless, el framework no nos proporciona una estructura
escalable la cual podamos seguir para estructurar nuestro proyecto,
como lo es en NestJS donde tenemos diseño modular, inyeccion de
dependencias, principios SOLID etc.

Aun asi, podemos replicar estos mismos en nuestro proyecto Serverless
a traves del uso de algunas librerias:

Para instalar estas dependencias, usamos el comando:
* npm install --save inversify inversify-binding-decorators reflect-metadata
*/


//? -------------------------------------------------------------
//?     VARIABLES DE ENTORNO
//? -------------------------------------------------------------
/*
Para usar variables de entorno en NodeJS es necesario instalar la
libreria dotenv para para poder setear y acceder a las variables.

En Serverless esto no es necesario. En al archivo Serverless.ts
tenemos un apartado llamado 'enviroment' en el cual podemos definir
nuestras variables de entorno, y Serverless se encarga de inyectarlas
en memoria para despues poder acceder a las mismas.

* environment: {
*     AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
*     NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
* }
*/


//? -------------------------------------------------------------
//?     INYECCION DE VARIABLES DE ENTORNO
//? -------------------------------------------------------------
/*
Si se desean inyectar variables de entorno, como lo hacemos en el
package.json al injectar el NODE_ENV=develop. Esto se logra con el
apartado 'stage' dentro del apartado 'custom', quedando de esta forma:

* stage: '${opt:stage}, "local"',

Esto basicamente es lo que se usa en la bandera del comando sls:dev
definido en los scripts del package.json. Esto indica que si esta
bandera no es definida, entonces la aplicacion se levante en el
entorno local
*/


//? -------------------------------------------------------------
//?     ACCESO A VARIABLES DE ENTORNO DESDE EL serverless.ts
//? -------------------------------------------------------------
/*
Este es un ejemplo, en donde deseamos acceder al STAGE usado en la
aplicacion, el cual estaria definido en el apartado 'stage' dentro
del apartado 'custom' quedando de la siguiente forma:

* environment: {
*     AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
*     NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
*     STAGE: '${self:custom.stage}'
* }

A traves de la propiedad 'self' es como podemos hacer referencia a
propiedades dentro del mismo Serverless.ts y usando la dot notation
podemos acceder a propiedades anidadas, puediendo asi, definir el
STAGE en las variables de entorno.

Una vez definida esta variable de entorno, ahora es accesible desde
cualquier parte de la aplicacion de esta forma:

* const STAGE = procces.env.STAGE;
*/