//? ----------------------------------------------------------------
//?    COMANDOS BASICOS
//? ----------------------------------------------------------------
/*
-- Levantar todos los servicios establecidos en el
-- docker-compose.yml
* docker-compose up -d

-- Levantar solo el servicio establecido en el comando
* docker-compose up <service_name> -d

-- Detener solo un(os) servicios especificos definidos en el
-- docker-compose
* docker-compose stop <service_name> <service_name>

-- Detiene todos los servicios levantados con docker-compose
* docker-compose stop

-- Detiene todos los servicios en ejecucion y ademas tambien
-- los elimina
* docker-compose down

-- Reiniciar todos los servicios definidos en el archivo
-- docker-compose
* docker-compose restart

-- Reiniciar servicios especificos definidos en el archivo
-- docker-compose
* docker-compose restart <container_name/id>

-- Listar los servicios en el docker-compose file y su estado
* docker-compose ps

-- Ver los logs para un servicio especifico
* docker-compose logs <service_name>

-- Ejecutar un comando en el contenedor de algun servicio en
-- ejecucion
* docker-compose exec <service_name> <command>
*/


//? ----------------------------------------------------------------
//?    VOLUMENES
//? ----------------------------------------------------------------
/*
-- Crear un nuevo volumen
* docker volume create <volume_name>

-- Montar un volumen a un contenedor
* docker run -v <volume_name>:<container_path>

-- Listar los volumenes creados
* docker volume ls

-- Remover un volumen
* docker volume rem <volume_name/id>
*/