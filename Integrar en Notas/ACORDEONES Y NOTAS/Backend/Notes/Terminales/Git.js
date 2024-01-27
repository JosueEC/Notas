//! #########################################################
//! VCS (Sistema de Control de Versiones)####################
//! #########################################################
//?  $ git config --global user.email "josueev.cruz@gmail.com"
// Por medio de este comando podemos configurar nuestro email en 
// la terminal bash para poder configurar nuestras credenciales

//?  $ git config --global user.name "J Evangelista Cruz"
// Es lo mismo que el comando de arriba pero con este configuramos 
// el nombre de usuario

//?  . code
// Nos permite editar cualquier archivo en nuestro editor VSCode

//?  git init
// Comando para iniciar un nuevo repositorio local

//? git init --bare
// Establecemos que nuestra carpeta va a ser un repositorio git puro,
// esto significa que no tendra la working tree, o sea, no contendra
// una copia de nuestros archivos. Servira solo como servidor, para
// que otros miembros del equipo sincroincen sus trabajos

//?  git add 'nombreArchivo.extension'
// Comando para agregar un archivo especifico a nuestro commit

//?  git add .
// Permite realizar la misma accion pero de todos los archivos que 
// se encuentren en la carpeta, para no tener que hacerlo uno por uno
// cuando sean varios archivos	

//?  git commit -m 'texto del commit'
// Nos permite generar un nuevo commit y darle una descripcion al
// mismo

//?  git log
// Lista los commits que se han realizado en nuestro repositorio

//? git log --oneline
// Muestra la lista de pusheos realizados al repo en una sola linea,
// mostrando su id y el texto del commit

//? git log graph
// Igualmente lista los commits existentes en el repositorio, pero
// agregando unas lineas graficas del lado izquiero

//?  git clone https://github.com/JosueEC/PrepCourse-Henry.git
// Clona un repositorio remoto de github de forma local en nuestra PC.

//? git push
// Nos permite subir nuestro commit en la rama en la que estamos ubicados

//? git push -u nombre-del-servidor-remoto nombre-de-la-rama
// Nos permite subir nuestro commit a GitHub en la rama y repositorio
// remoto que especifiquemos en el comando.

// -u establece que siempre que nosotros hagamos un push, este siempre
// se va a ir al repositorio y rama que le especificamos

//? git remote
// Lista los servidores remotos que tenemos agregados para subir cambios

//? git remote add nombreServidor http://...
// Agrega un nuevo servidor remoto a la lista de servidores, por convencion
// se suele llamar 'origin' al servidor remoto

//? git remote -v
// Lista las direcciones de los servidores remotos que tenemos agregados,
// esto nos pude servir para ver posibles errores en las direccion

//? git remote rename nombreActual nuevoNombre
// Cambia el nombre de un repositorio que tengamos agregado a nuestra lista
// de repositorios, primera va el nombre actual del repositorio y despues
// el nuevo nombre

//? git remote remove nombreURL
// Borra la vinculacion del link del respositorio remoto que se ecnuentra
// en GiuHub

//? git pull nombreServidor nombreRama
// Sincroniza los datos de la rama con nuestro repositorio, o sea, baja
// los cambios a nuestro repo. Primero va el nombre del repo que queremos
// sincronizar y despues la rama que queremos sincronizar

//? git branch
// Muestra las ramas creadas en nuestro repositorio

//? git branch -a 
// Muestra todas las ramas creadas en el repositorio en su totalidad

//? git branch nombreRama
// Crea una nueva rama en nuestro repositorio

//? git branch -m nuevonombre
// Cambia el nombre de la rama en la que estamos posicionados

//? git branch -d nombre-rama
// Elimina la rama de nuestro repositorio

//? git branch -D nombreRama
// Elimina la rama con force

//? git switch -c nombreRama
// crea y cambia a una nueva rama, es otra forma de hacerlo para
// no usar siempre el git checkout

//? git switch -
// Vuelve a la rama anterior, es otra forma de hacerlo en lugar
// de usar git checkout con el nombre de la rama

//? git checkout nombreRama
// Cambia a la rama especificada

//? git checkout -b nombreBranch
// Crear y cambia a la rama creada en el mismo comando, para no crear
// primero y luego cambiar con el otro comando

//? git fetch
// Sincroniza los datos de la rama en la que estamos ubicados

//? git pull
// Sincroniza todos los cambios que hubo en sobre la rama

//? git merge nombreBranch
// Une la rama en la que estamos ubicados con la rama que especificamos
// en el comando

//? git rebase nombreBranch
// Une los commits de la rama master con los de la rama especificada

//? git restore nombreArchivo
// Con este comando descartamos los cambios que se hayan realizado en el
// archivo, devolviendolo a su estado antes de los cambios, esto es antes
// de hacer git add al archivo

//? git restore --staged nombreArchivo
// Con este comando deshacemos la operacion git add de algun archivo que
// hayamos preparado por commitear en base a su nombre

//? git revert idCommit
// Con este comando, en base al ID del commit, deshacemos algun git commit
// que tengamos listo para pushear (:x) El ID lo obtenemos con un git log

//? git stash 
// Guarda un espacio de trabajo en git para despues poder volver al mismo

//? git stash list
// Muestra una lista de los stash a los que podemos volver para seguir
// trabajando en ellos

//? git stash apply numeroStash
// Selecciona un stash de la lista de stash pero son elminarlo de la lista,
// despues tendriamos que ejecutar un git stash drop numeroStash para eliminarlo

//? git stash pop
// Selecciona y elimina el ultimo stash agregado en la lista

//? git diff
// Muestra los cambios que aun no han sido agregado con un git add

//? git diff idCommit..idCommit
// Con este comando se muestran las diferencias entre ciertos commits, estos
// son todos los cambios que ocurrieron desde cierto commit hasta otro cierto commit

//? git tag -a v0.0.0
// Con este comando agregamos una nuevo tag en algun punto de nuestro proyecto.
// Establecer una tag es establecer una version de nuestro proyecto, con esto
// nos aseguramos de tener un punto del proyecto al que siempre podremos volver,
// cualquier cambio que se haga ya no afectara al codigo antes de nuestra tag

//? git tag -a v0.1.0 -m 'Lanzando la primera version (BETA)'
// Con el sufijo -m '' Podemos agregar un mensaje a la creacion de la tag

//? git tag
// lista todas las tags que hemos creado

//? git push nombreServidor v0.1.0
// Con este comando subimos nuestra tag al servidor que especifiquemos en el comando

//! #########################################################
//! CREAR Y SINCRONIZAR UN REPO LOCAL CON GITHUB ############
//! #########################################################
// Crear un nuevo repositorio en GitHub y copiar el remote add origin
// Creamos nuestro archivo:
/*//?  .gitignore */
// Agregamos los archivos y carpetas a ignorar
/*
//**/node_modules
//**/.env
// Ubicados en la carpeta raiz, abrimos una terminal bash y ejecutamos los siguientes comandos de GIT:
/*
?   git init
?   git add .
?   git commit -m 'first commit'
?   git branch -M main
?   git remote add origin httP://.....
?   git push -u origin main
*/

//! #########################################################
//! CREAR UNA NUEVA RAMA DE TRABAJO #########################
//! #########################################################
//? git checkout -b nombreRama
//* Ejemplo: git checkout -b feature/GET Videogames
// Creamos y nos posicionamos en una nueva rama de trabajo

// Cada vez que realizamos un commit & push se crea un pull request.
// En nuestro repositorio de Github veremos un boton que dice
//* CREATE PULL REQUEST

// Uno o varios colaboradores del repositorio debe aceptar los
// cambios del PR

// Una vez que los cambios son aceptados, hacer click en el boton
//* CONFIRM SQUASH --> MERGE
// Esto genera que nuestros cambios se vean reflejados en la rama
// main

// Una vez realizado este proceso, podemos borrar esa rama de
// trabajo si asi lo deseamos
//? git branch -d nombreRama

//! #########################################################
//! COMANDOS DE GIT FLOW ####################################
//! #########################################################
//? git flow init
// Inicia Git Flow en el repositorio y establece la configuracion
// del mismo

//? git pull origin develop
// Actualiza los cambios realizados en el repositorio y la rama
// establecida en la rama en la que estamos ubicados

//? git flow feature start <nombre>
// Crea una nueva rama para la creacion de una feature, en esta rama
// podemos commitear nuestros cambios pero sin hacer push.

//? git flow feature finish <nombre>
// Mergea la rama feature con la rama develop, tambien elimina la
// rama feature de forma local y nos devuelve a la rama develop

//? git flow feature publish <nombre>
// Manda un pull request directamente a la rama master
// (no es recomendable)

//? git flow release start <numero de version>
// Prepara un pull request para la rama master

//? git flow release finish <numero de version>
// Manda un pull request a la rama master

//! #########################################################
//! FLUJO DE TRABAJO CON GIT FLOW ###########################
//! #########################################################

// 1. Antes de todo hay que traer los cambios de la rama develop
//  o master desde el repo remoto a nuestro repo local con:
//? git pull origin develop

// 2.- Para trabajar en una nueva feature o tarea hay que ejecutar
//  el comando
//? git flow feature start nombreDeLaFeature

//  Eso nos creara la rama de la feature de forma local, en esa
//  rama podemos hacer todos los cambios y relizar cuantos commits
//  querramos, pero NO se debe realizar push, solo commits

// 4.- Una vez nuestra feature o tarea este terminada, podemos hacerle
//  merge con la rama develop con el comando:
//? git flow feature finish nombreDeLaFeature

// Ese comando hara merge de nuestra rama feature con develop de forma
// local, ahora debemos sincroinzar con el repo remoto

// 4.- En la interfaz grafica de VSCode para la parte de Git, hay un
//  boton que dice: 
//? Synchronize
// O ejecutando el comando:
//? git push origin develop

// Al dar click, envia nuestras cambios a la rama develop del repositorio
// remoto, asi, cuando alguien haga git pull origin develop en su computadora
// bajara tambien los cambios que nosotros hicimos en nuestra feature

// 4.- Si queremos hacer merge entre la rama master y develop, podemos
//  hacerlo desde GitHub. En GitHub nos ubicamos en la rama develop y saldra
//  una notificacion en la que podemos hacer un pull request de develop hacia
//  master

// Dando click en esta opcion solo es cuestion de seguir los pasos y se hara un
// merge entre develop y master, asi ambas ramas estaran sincroinizadas. Pero la
// idea es solo hacer merge a master cuando se tiene una version estable de la
// aplicacion la cual se quiera mergear a master
