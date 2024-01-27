// email: josueev.cruz@gmail.com
// user: J Evangelista Cruz
// password: 15011304_4023127

//? pwd
// Nos imprime la ruta de archivo en la cual estamos trabajando

//?  ls  |  dir 
// Imprime un listado con todos los archivos que se encuentran
// en el directorio

//? ls -R
// Lista los archivos, pero muestra la jerarquia entre carpetas
// y archivos

//?  mkdir carpeta1
// Crear un nuevo directorio o carpeta

//?  cd 'Carpeta'
// Nos permite acceder a alguna de las carpetas en el directorio

//? cd carpeta/carpeta
// cd tambien recibe rutas relativas para navegar entre carpetas

//?  cd ..
// Nos permite salir de la carpeta en la que estamos actualmente

//?  clear
// Nos permite limpar la consola de linea de comandos

//?  touch archivo.extension
// Nos permite crear un nuevo archivo, es importante definir la 
// extension del archivo nuevo
// Al igual que mkdir, se pueden crear varios archivos en el mismo
// comando

//? touch carpeta/carpeta/archivo.extension
// El comando touch puede recibir una ruta relativa en la cual se
// desee crear el archivo, asi sin necesidad de moverse entre
// carpetas con cd para ir creando los archivos

//? mv nombreActual.extension nuevoNombre.extension
// Cambia el nombre de un archivo, el primer parametro es el nombre
// actual y el segundo parametro es el nuevo nombre

//? cp archivo.extension archivo.extension
// Copia el contenido de algun archivo, el primer parametro es el
// archivo que se va a copiar y el segundo es el nombre del archivo
// o el archivo en el que se va a copiar el contenido

//? cp -r carpeta carpeta
// Este comando tambien puede copar el contenido de carpetas

//?  rm archivo.js
// Elimina el archivo seleccionado, tambien se debe especificar
// su extension

//? rmdir
// Borra carpetas que esten vacias, si no estan vacias no puede
// borrarlas

//?  rm -r carpeta1
// Elimina la carpeta especificada en el parametro, no importa si
// esta vacia o si tiene archivos, la borra de todas formas, este
// tambien recibe rutas relativas como parametros

//?  help
// Muestra un listado de todos los comandos que podemos utilizar

//?  cd --help
// Nos muestra informacion especifica del comando seleccionado y 
// que podemos hacer con el

//?  npm audit fix
// Nos permite solucionar problemas o vulnerabilidades al momento
// de instalar las dependencias del proyecto

//?  npm audit
// Nos muestra detalles sobre la instalacion de las dependencias