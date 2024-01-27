//? ------------------------------------------------------------------
//?    DEFINICIONES DE SQL
//? ------------------------------------------------------------------
/*
-- SQL (Structured Query Language) -> Lenguaje Estructurado de Consulta

-- Con SQL podemos:
--  Crear bases de datos para almacenar datos.
--  Consultar los datos de las bases de datos.
--  Maniupular y mutar los datos de las bases de datos.
--  Agregar restricciones y reglas de integridad.
--  Generar informes en base a los datos.
--  Realizar analisis de datos.
--  Administracion de usuarios y permisos.
--  Transacciones, copias de seguridad, lipmieza de datos, normalizacion
--  de datos
*/


//? ------------------------------------------------------------------
//?    CONCEPTOS DE SQL
//? ------------------------------------------------------------------
/*
-- ENTIDAD (Entity): Una entidad es una representacion de algo del 
--         mundo real.
-- TABLA (Table): Es una estructura de datos que se organiza en filas
--         y columnas.
-- CAMPO (Field): Es el nombre que al que, en base de datos, hacemos
--         referencia a una columna de la tabla.
-- REGISTRO (Record): Por otra parte, un registro hace referencia a
--         una fila, pero en base de datos se le identifica con la
--         palabra registro.
-- CONSULTA (Query): Es el proceso de realizar una busqueda en una
--         base de datos.
-- INDENTIFICADOR (Identifier): Dato unico que permite identificar
--         un registro especifico en una base de datos.
-- CLAVE PRIMARIA (PRIMARY KEY): Valor que hace referencia al campo
--         identificador de un registro, el cual es unico.
-- CLAVE FORANEA (FOREING KEY): Valor que hace referencia a la PRIMARY
--         KEY de otra entidad dentro de nuestra entidad.
*/


//? ------------------------------------------------------------------
//?    TIPOS DE DATOS EN SQL
//? ------------------------------------------------------------------
/*
-- INTEGER: Para almacenar valores numericos enteros.
-- TEXT: Para almacenar valores de texto como cadenas de texto.
-- BLOB: Para almacenar datos binarios. (Archivos, imagenes, fotos, etc)
-- REAL: Para almacenar numeros reales, refiriendonos al concepto
--       matematico (Similar al valor Float).
-- NUMERIC: Para almacenar valores numericos exactos. Son numeros que
--       requieren de una precision matematica muy alta.
*/


//? ------------------------------------------------------------------
//?    CREACION E INSERCION EN SQL
//? ------------------------------------------------------------------
/*
-- Crear una nueva base de datos
* CREATE DATABASE "example";

-- Crear una nueva tabla
* CREATE TABLE "users" (
*     'id' INTEGER,
*     'name' TEXT,
*     'last_name' TEXT,
*     'age' INTEGER,
*     PRIMARY KEY ('id' AUTOINCREMENT)
* );

-- Insertar un registro en una tabla
* INSERT INTO users (name, last_name, age)
* VALUES ('Josue', 'Cruz', 26);

-- Insertar varios registros en una tabla, cada registro va separado
-- por una coma
* INSERT INTO users (name, last_name, age)
* VALUES ('Josue', 'Cruz', 26),
*        ('Jesiel', 'Garcia', 30),
*        ('Chava', 'Sandoval', 25)
*/


//? ------------------------------------------------------------------
//?    CONSULTAS SQL
//? ------------------------------------------------------------------
/*
-- NOTA: La clausula SELECT siempre devuelve una tabla nueva, esta puede
-- ser la informacion de una sola tabla o estar compuesta de la consulta
-- de diferentes datos de diferentes tablas.

-- Seleccionar todos los campos y registros de una tabla.
* SELECT * FROM users;

-- Seleccionar solo campo(s) especifico de todos los registros de una
-- tabla
* SELECT name FROM users;
* SELECT name, age FROM users;

-- Seleccionar un registro en base a su ID:
* SELECT * FROM "Articulos" WHERE articulo_id = 'c9a40f88-5d0d-4bd1-888f-b2937ddd2ecd';
*/


//? ------------------------------------------------------------------
//?    CONSULTAS SQL CON JOIN
//? ------------------------------------------------------------------
/*
-- Hacer un INNER JOIN entre 2 tablas
* SELECT * FROM <table_1> <alias> [INNER] JOIN <table_2> <alias> ON <condiciones_vinculos_tablas>

Ejemplo:
* SELECT OrderID, C.CustomerID, CompanyName, OrderDate
FROM Customers C INNER JOIN Orders O ON C.CustomerID = O.CustomerID

-- Hacer una consulta JOIN en una relacion N:N
* SELECT *
FROM "Ordenes" o
JOIN "ArticulosOrden" ao ON o.orden_id = ao.orden_id
JOIN "Articulos" a ON ao.articulo_id = a.articulo_id
WHERE o.orden_id = '2ea4a771-5896-4495-983e-e887aefd5d36';  
*/


//? ------------------------------------------------------------------
//?    ELIMINACION EN SQL
//? ------------------------------------------------------------------
/*
-- NOTA: Siempre, SIEMPRE, antes de ejecutar un DELETE, verifica si
-- es necesario incluir una clausula WHERE

-- Eliminar todos los registros de una tabla.
* DELETE FROM usuarios;
*/