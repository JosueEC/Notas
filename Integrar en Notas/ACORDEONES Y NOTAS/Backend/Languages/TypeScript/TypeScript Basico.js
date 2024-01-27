//! #########################################################
//! INFORMACION BASICA PARA PODER TRABAJAR CON TYPESCRIPT ###
//! #########################################################

//! #########################################################
//! DEPENDENCIAS PARA TYPESCRIPT ############################
//! #########################################################
/*  npm install -D nodemon @types/node ts-node typescript  */


//! #########################################################
//! ARCHIVO DE CONFIGURACION DE TYPESCRIPT (ts-congif) ######
//! #########################################################
// Generar archivo de configuracion de TypeScript (ts-congif)
/*  npx tsc --init */

// Agregar configuraciones de typescript directamente al momento de crear el archivo de configuracion:

/*  npx tsc --init --rootDir build --esModuleInterop --resolveJsonModule --lib es6 --module commonjs --allowjs --noImplicitAny */

// --rootDir build : Establece la carpeta en la que se va a guardar todo el codigo de TypeScript transpilado a Javascript
// --esModuleInterop: Nos permite usar importacion y exportacion en el proyecto
// --resolveJsonModule: Nos permite trabajar con archivos JSON en el proyecto y de igual forma crea un archivo JSON en el proyecto
// --lib es6: Nos permite establecer las versiones de ecmascript que vamos a usar en el proyecto
// --module commonjs: Establece a que modulo se va a transformar nuestro codigo de ecmascript
// --allowjs: Permite que conviva typescript con javascript dentro del proyecto
// --noImplicitAny: Prohibe el uso del tipo any en nuestro proyecto de Typescript
