//? ---------------------------------------------------------------
//?    COMANDOS BASICOS
//? ---------------------------------------------------------------
/*
-- Ver la version y distribucion de Linux instalada
* cat /etc/os-release

-- Instalar el administrador de paquetes apropiado (Debian/Ubuntu)
* apt-get update

-- Actualizar el administrador de paquetes (Debian/Ubunut)
sudo apt upgrade

-- Instalar el administrador de paquetes apropiado (CentOS/Fedora)
* yum update

-- Instalar el administrador de paquetes apropiado (Alpine)
* apk update

-- Instalar una dependencia
* apt-get install <dependency_name>

-- Remover una dependencia especifica
* apt remove <dependency_name>
*/


//? ----------------------------------------------------------------
//?         MANIPULACION DE SERVICIOS
//? ----------------------------------------------------------------
/*
-- Consultar el estado de un servicio
* sc query <service_name>

-- Iniciar un servicio
* sc start <service_name>
*/


//? ---------------------------------------------------------------
//?     MANIPULACION DE ARCHIVOS CON BASH
//? ---------------------------------------------------------------
/*
-- Crear un archivo vacio en el directorio en el que estes ubicado
-- (en formato .txt)
* touch <file_name>
* touch <file_name> <file_name> <file_name> 

-- Crear un archivo .txt y agregar lineas de texto en la misma accion
-- Con Ctrl + D salimos del editor y el archivo se crea
* cat > <file_name>
* contenido linea 1
* contenido linea 2
* CTRL + D

-- Ver todas las lineas de texto de un archivo
-- NOTA: Debemos estar ubicados en el directorio actual donde se
-- encuentra eñ archivo
* cat <file_name>
* cat <file_name> <file_name>

-- Mostrar todas las lineas de texto de un archivo y agregando el
-- numero de linea al principio de cada una
* cat -n <file_name>

-- Este hace lo mismo que el anterior, pero este solo muestra las
-- lineas que tienen texto, no toma en cuenta las que estan en blanco
* cat -b <file_name>

-- Mostrar todas las lineas de texto de un archivo pero paginadas
-- Util cuando se desea mostrar archivos muy largos. Usamos la tecla
-- 'espacio' para avanzar entre paginas
* more <file_name>

-- Leer el contenido de un archivo de texto en modo editor de texto.
-- Para moverse por el contenido hay que usar combinaciones de teclado
-- NOTA: Para salir del editor se usa la tecla 'q'
* less <file_name>
*/


//? ---------------------------------------------------------------
//?     EDITORES DE TEXTO PARA TERMINAL
//? ---------------------------------------------------------------
//? ---------------------------------------------
//?                 NANO
//? ---------------------------------------------
/*
-- NOTA: Antes de instalar es neceserio actualizar apt
* apt-get update

-- Instalar nano en bash en caso de que no lo este (Debian/Ubuntu)
* sudo apt install nano
* apt-get install nano -y

-- Instalar nano en bash en caso de que no lo este (CentOS/Fedora)
* yum install nano -y

-- Instalar nano en bash en caso de que no lo este (Alpine)
* apk add nano

-- Ver la version instalada de Nano
* nano --version

-- Abrir el editor de texto Nano
* nano

-- Abrir un archivo especifico con nano
* nano <file_name>

-- Comandos para Nano:

* Ctrl + R
-- Indicarle un archivo de texto a Nano para que lo abra y
-- muestre su contenido por consola.

* Ctrl + V
-- Estando dentro de Nano y con el archivo abierto en la
-- consola, esta combinacion sirve para avanzar a la pagina
-- siguiente.

* Ctrl + Y
-- De modo similar a la combinacion anterior, esta sirve
-- para retroceder a la pagina anterior.

* Ctrl + W
-- Esa combinacion te servira para introducir un caracter
-- o grupo de caracteres y buscar en el texto cualquier letra
-- o palabra que coincida con el parametro de busqueda.

* Ctrl + X
-- Para cerrar el archivo una vez lo hayas terminado de
-- visualizar en la consola. Eso cerrara el editor de texto
-- Nano, y volvera a aparecer el prompt de bash por consola.
*/


//? ---------------------------------------------
//?                 VIM
//? ---------------------------------------------
/*
-- NOTA: Antes de instalar es neceserio actualizar apt
* apt-get update

-- Instalar Vim en caso de que no lo este (Debian/Ubuntu)
* sudo apt install vim
* apt-get install vim -y

-- Instalar Vim en caso de que no lo este (CentOS/Fedora)
* yum install vim -y

-- Instalar Vim en caso de que no lo este (Alpine)
* apk add vim

-- Ver la version instalada de Vim
* vim --version

-- Abrir el editor de texto Vim
* vim

-- Abrir el fichero de ayuda de Vim
* :help
*/


//? ---------------------------------------------------------------
//?     MANIPULACION DE MOTOR POSTGRES
//? ---------------------------------------------------------------
/*
-- Reiniciar el motor de base de datos
* sudo systemctl restart postgresql
* systemctl restart postgresql
* /etc/init.d/postgresql restart
*/