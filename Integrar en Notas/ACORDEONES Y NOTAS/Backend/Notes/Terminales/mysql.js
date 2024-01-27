//* NOTA: Todas las operaciones llevan ';' al final

// Conectarse a mysql a traves de la consola. Ejecutamos el comando:
//* -u
//    Esta bandera indica que se conecte a la bd a traves del usuario
//    root
//* -p
//    Nos permite ingresar la contraseña del usuario una vez que se
//    presiona enter.
// NOTA: Estas credenciales son las que establecimos en el comando
// docker run
//? mysql -u root -p

// Listar las bases de datos existentes
//? show databases;

// Crear una base de datos
//? create database example_db;

// Usar una base de datos especifica
//? use example_db;

// Crear una tabla en la base de datos con solo
// el campo id
//? create table users (id int PRIMARY Key);

// Mostrar el esqueleto de alguna tabla de la base de datos
//? describe users;