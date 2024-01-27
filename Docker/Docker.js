//? ----------------------------------------------------------------
//?	    MANIPULAR EL DAEMON DE DOCKER DESDE CONSOLA (Linux)
//? ----------------------------------------------------------------
/*
-- Activar o desactivar el inicio automatico del Docker daemon,
-- utilizamos la herrmaineta 'systemctl'
* sudo systemctl enable docker
* sudo systemctl disable docker

-- Consultar el estado de la unidad daemon de Docker
* sudo systemctl status docker

-- Iniciar desde la consola el daemon de Docker
* sudo systemctl start docker

-- Detener desde la consola el daemon de Docker
* sudo systemctl stop docker

-- Reiniciar el daemon de Docker
* sudo systemctl restart docker
*/


//? ----------------------------------------------------------------
//?     MANIPULAR EL DAEMON DE DOCKER DESDE CONSOLA (PowerShell)
//? ----------------------------------------------------------------
/*
-- Consultar el estado de la unidad daemon de Docker
* Get-Service -Name Docker

-- Iniciar desde la consola el daemon de Docker
* Start-Service -Name Docker
*/


//? ----------------------------------------------------------------
//?		MANIPULAR EL DAEMON DE DOCKER DESDE CONSOLA (PowerShell)
//? ----------------------------------------------------------------
/*
-- Consultar el estado de la unidad daemon de Docker
* sc query Docker

-- Iniciar desde la consola el daemon de Docker
* sc start Docker
*/


//? ----------------------------------------------------------------
//? 	COMANDOS BASICOS
//? ----------------------------------------------------------------
/*
-- Revisar la version de Docker instalada
* docker --version
* docker -v

-- Mostrar la informacion del sistema sobre Docker
* docker info

-- Descargar una imagen de Docker Hub
* docker pull <image_name>

-- Ver la lista de contenedores activos/levantados
* docker ps
* docker container ls

-- Ver la lista de todos los contenedores, aunque no esten 
-- activos/levantados
* docker ps -a
* docker container ls -a

-- Crear y ejecutar un nuevo contenedor a partir de una imagen
* docker run <options> <image_name>

-- Ver toda la informacion de un contenedore de docker, util 
-- cuando quieres ver la direccion ip del contenedor y los
-- puertos que esta usando
* docker inspect <container_name>
*/


//? ----------------------------------------------------------------
//? 	COMANDOS DE BASH DENTRO DE UN CONTENEDOR
//? ----------------------------------------------------------------
/*
-- Ver la version y distribucion de Linux instalada
cat /etc/os-release

-- NOTA: No olvides eliminar las carpetas db/data o dist o las que
-- 		esten bindeadas de local al container de docker. De local
--		contrario tendras problemas con las versiones y users, etc.
-- Ingresar al cliente psql de una base de datos ya existente de
-- PostgreSQL
* docker exec -it <container_name/id> psql -U <user/rol> -d <database_name>

-- Ingresar al cliente psql
* docker exec -it <container_name/id> psql -U postgres
* docker exec -it <container_name/id> psql -h postgres -U postgres

-- Salir del cliente psql
* Ctrl + D
*/


//? ----------------------------------------------------------------
//? 	MANIPULAR CONTAINERS
//? ----------------------------------------------------------------
/*
-- Iniciar un contenedor detenido
* docker start <container_name/id>

-- Detener un contenedor de docker
* docker stop <container_name/id>

-- Forzar la detencion de un contenedor
* docker kill <container_name/id>

-- Reiniciar un contenedor
* docker restart <container_name/id>

-- Remover un contenedor detenido
* docker rm <container_name/id>
*/


//? ----------------------------------------------------------------
//? 	MANIPULAR VOLUMENES
//? ----------------------------------------------------------------
/*
-- Ver la lista de volumenes creados en los contenedores
* docker volume ls

-- Eliminar un volumen en base a su ID
* docker volume rm <volume_id>

-- Crear un nuevo volumen
* docker volume create <volume_name>

-- Mostrar toda la informacion acerca de un volumen
* docker volume inspect <volume_name/id>

-- Crear y asignar un volumen a un contenedor al momento de levantar
-- este contenedor de Docker
* docker run -it --name ubuntu1 --volume ubuntu1-data:/home ubuntu:20.04
*/


//? ----------------------------------------------------------------
//? 	MANIPULAR IMAGES
//? ----------------------------------------------------------------
/*
-- Construir una imagen de Docker a partir de un Dockerfile
* docker build -t <image_name> <path_to_Dockerfile>

-- Ver la lista de imagenes descargadas/creadas localmente
* docker images

-- Eliminar una imagen de docker localmente
* docker image rm <image_name>

-- Remover todas las imagenes que no se estan usando
* docker image prune
*/


//? ----------------------------------------------------------------
//? 	DOCKER HUB Y REGISTRO
//? ----------------------------------------------------------------
/*
-- Logearse en un registro de Docker
* docker login

-- Pushear una imagen a un registro de Docker
* docker push <image_name>

-- Traer una imagen de un registro de Docker
* docker pull <image_name>
*/


//? ----------------------------------------------------------------
//? 	NETWORKS
//? ----------------------------------------------------------------
/*
-- Crear una network de usuario definido
* docker network create <network_name>

-- Listar las networks creadas
* docker network ls

-- Conectar un contenedor a una network
* docker network connect <network_name> <container_name/id>

-- Desconectar un contenedor de una network
* docker network disconnect <network_name> <container_name/id>
*/


//? ----------------------------------------------------------------
//? 	LOGS Y DEBUGGING
//? ----------------------------------------------------------------
/*
-- Ver los logs de un contenedor en ejecucion
* docker logs <container_name/id>

-- Iniciar un shell(consola) interactiva en un contenedor en 
-- ejecucion
-- NOTA: Para este comando es necesario tener bash instalado
-- en el container y que este se encuentre en la ruta especifica
* docker exec -it <container_name/id> /bin/bash

-- Otra opcion para abrir un bash es:
* docker exec -it <container_name/id> bash

-- Ejecutar comandos de cmd dentro del container de docker
-- NOTA: Esto no permite comandos combinados, ejemplo cd lib
* docker exec -it <container_name/id> dir

-- Mostrar en tiempo real el uso de recursos de un contenedor
* docker stats <container_name/id>
*/


//? ----------------------------------------------------------------
//? 	CLEANUP
//? ----------------------------------------------------------------
/*
-- Remover todos los contenedores detenidos, networks sin usar
-- e imagenes sin usar
* docker system prune

-- Remover todos los contenedores detenidos
* docker container prune

-- Remover todas las imaganes sin usar
* docker images prune

-- Remover todos los volumenes sin usar
* docker volume prune
*/