//? --------------------------------------------------------------
//?     MANIPULACION DE USUARIOS
//? --------------------------------------------------------------
/*
-- Ver los usuarios creados
* \du

-- Ver los usuarios creados con detalles agregados
* \du+

-- Crear un usuario
* CREATE USER <username> WITH PASSWORD 'your_password';

-- Crear una base de datos y asignar un propietario
* CREATE DATABASE <database_name> WITH OWNER = <username>;

-- Asignar privilegios a un usuario sobre una base de datos
* GRANT ALL PRIVILEGES ON DATABASE <database_name> TO <username>;
*/