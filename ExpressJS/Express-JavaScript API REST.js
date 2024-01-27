//?--------------------------------------------------------------
//?     API REST CON NODEJS + EXPRESS
//?--------------------------------------------------------------
//?--------------------------------------------------------------
//?     EXPORTACIONES E IMPORTACIONES
//?--------------------------------------------------------------
const modulo = require(''); //* Importacion
module.exports = modulo; //* Exportacion


//?--------------------------------------------------------------
//?     INSTALAR EL LINTERN STANDARD
//?--------------------------------------------------------------
/*
-- Primero debemos instalar la dependencia de 'standard', eso lo
-- hacemos con el comando:
* npm install standard -D
-- 
-- Ahora debemos agregar la configuracion del lintern en el
-- package.json
* "eslintConfig:" {
*      "extends": "./node_modules/standard/eslintrc.json"
* } 
*/


//?--------------------------------------------------------------
//?     CREACION DE UN PROYECTO CON EXPRESSJS
//?--------------------------------------------------------------
/*
-- Primero creamos una carpeta en el directorio donde queremos guardar
-- nuestro proyecto:
* mkdir <proyect_name>

-- Ahora debemos iniciar el archivo package.json para administrar las
-- dependencias del proyecto:
* npm init --yes
*/


//?--------------------------------------------------------------
//?     INSTALACION DE DEPENDENCIAS/LIBRERIAS
//?--------------------------------------------------------------
/*
-- Dependencias para una API REST con Express + Sequelize + PostgreSQL
-- + dotenv + morgan + cors + node-fetch + express-validator
* npm install express morgan cors sequelize pg pg-hstore dotenv
* node-fetch@2 express-validator

-- Ahora instalamos las dependencias de desarrollo
* npm install nodemon -D

-- Ahora agregamos nuestro script de ejecucion al package.json, en el
-- cual solo definimos que nodemon ejecute el index.js el cual es el
-- punto de entrada de la aplicacion y nodemon lo mantiene ejecutandose
-- en bucle
* "start:dev": nodemon index.js
*/


//?--------------------------------------------------------------
//?     DIVISION DE CARPETAS (Vertical Slicing o Modular)
//?--------------------------------------------------------------
/*
*  src
*      user
*          routes
*          models
*          controllers
*          services
*      book
*          routes
*          models
*          controllers
*          services
*/


//?--------------------------------------------------------------
//?     CONSTANTES (Una opcion similar a enums en TypeScript)
//?--------------------------------------------------------------
const SERVER = Object.freeze({
    PORT: '3001',
    CORS_PORT: '3000',
    CORS_DOMAIN: 'http://localhost'
});

const EXTERNAL_API = Object.freeze({
    DOMAIM: 'https://api.rawg.io/api',
    PAGE_SIZE: 'page_size=10'
});

module.exports = {
    SERVER,
    EXTERNAL_API
}


//?--------------------------------------------------------------
//?     VARIABLES DE ENTORNO CON DOTENV
//?--------------------------------------------------------------
/*
-- Dotenv es la libreria que nos permite trabajar con variables de
-- entorno en NodeJS, pudiendo acceder a ellas desde cualquier
-- parte de la aplicacion donde añadamos el paquete de dotenv,
-- este es un ejemplo de una archivo de variables de entorno:
* DB_USER=postgres
* DB_PASSWORD=admin
* DB_HOST=localhost
* DB_PORT=5432
* DB_NAME=mydatabase
* API_KEY=123456789
*/


//? -------------------------------------------------------------
//?     CONEXIONES CON BASES DE DATOS
//? -------------------------------------------------------------
//? -------------------------------
//?     POSTGRESQL
//? -------------------------------
/*
-- Podemos crear un archivo llamado database.js donde pondremos
-- toda la configuracion para la conexion con nuestra base de datos.

-- Para conectarnos a una base de datos de postgresql podemo usar
-- la siguiente configuracion:
*/
/**
-- De esta forma es como importamos el modulo de dotenv para acceder
-- a las variables de entorno:
*/
require('dotenv').config();
const { Sequelize } = require('sequelize');

const {
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_PORT,
    DB_NAME
} = process.env;

/*
-- Estas funciones importan modulos que definen modelos de sequelize,
-- estas son necesarias justamente cuando trabajamos con sequelize,
-- requiren de la instancia de conexion con la base de datos
*/
const defineVideogameModel = require('');

/*
-- Esta instancia es la configuracion para la conexion con una base de
-- datos de PostgreSQL
*/
const database = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`, {
    logging: false,
    native: false,
});

/*
-- De esta forma es como podemos probar si la conexion con la base de
-- datos se completo de forma satisfactoria:
*/
async function testDatabaseConnection() {
    try {
        await database.authenticate();
        console.log('Connection has been establshed successfully');
    } catch (error) {
        console.log('Unable to connect to the database', error);
    }
}

/*
-- Como se menciona arriba, las funciones define que importan modelos
-- de sequelize, necesitan de la instancia de la base de datos:
*/
defineVideogameModel(database);

/*
-- Lo que ocurre en las funciones define es que se crean los modelos
-- de la base de datos, son develtos en la exportacion del modulo y de
-- esta forma ahora pueden ser accedidos desde la propiedad .models de
-- la instancia database
*/
const { videogame, genre } = database.models;

/*
-- Es necesario importar estos modelos para generar las relaciones que
-- puedan existir en nuestra base de datos:

-- En las opciones de la funcion podemos pasar la configuracion para
-- las tablas extra que se generaran, si es que se requiren.
*/
//* Relacion Many-To-Many
videogame.belongsToMany(genre, { through: 'game-genre '});
genre.belongsToMany(videogame, { through: 'game-genre' });

/*
-- Por ultimo, exportamos la instancia de conexion y los modelos usando
-- el spread operator para poder desestructurar cada modelo por separado
*/
module.exports = {
    database, 
    ...database.models,
}


//? -------------------------------------------------------------
//?     PUNTO DE ENTRADA (index.js)
//? -------------------------------------------------------------
/*
-- El archivo index.js es el punto de entrada de nuestra API REST,
-- aqui va el codigo necesario para levantar el servidor y que este
-- pueda comenzar a recibir peticiones y responder las mismas
*/

const server = require('');
const { database } = require('');
const { SERVER } = require('');

// Connection and Synchronization
database.sync({ alter: true })
    .then(() => {
        server.listen(SERVER.PORT, () => {
            console.log(`Server listening on port ${SERVER.PORT}`);
        })
    }).catch((error) => {
        console.error(error.message);
    });


//? -------------------------------------------------------------
//?     CONFIGURACION DEL SERVIDOR (server.js)
//? -------------------------------------------------------------
const express = require('express');
const morgan = require('morgan');

// Modulos de rutas (Controladores)
const VideoGamesRoutes = require('./');

// Instancia del servidor de Express
const server = express();

// Configuracion de los CORS
server.use((req, res, next) => {
    res.header('Acces-Control-Allow-Origin', `${SERVER_CONST.CORS_DOMAIN}:${SERVER_CONST.CORS_PORT}`)
    res.header('Acces-Control-Allow-Credentials', 'true')
    res.header('Acces-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    res.header('Acces-Controll-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
    next()
});

// Uso de middlewares previos a las rutas (controladores)
server.use(express.json());
server.use(morgan('dev'));

// Asignacion de las rutas para cada ruta de controlador (routes)
server.use('/videogames', VideoGamesRoutes);


//? -------------------------------------------------------------
//?     ROUTES EN EXPRESS (controller / videogames.routes.js)
//? ------------------------------------------------------------
/*
-- Para poder asignar funciones a cada endpoint en un controlador,
-- lo que hacemos es usar el modulo Router de express
*/
const { Router } = require('express');

/**
-- Importamos el controlador que tiene las funciones que seran
-- a un respectivo endpoint
*/
const VideogameController = require('');

/**
-- Ahora creamos una instancia de Router, aunque tambien podriamos
-- usar router como Router.get / .post / .delete / etc
*/
const router = Router();

/**
-- Ahora asignamos las funciones a su correspondiente endpoint
*/
router.get('/', VideogameController.findAll);
router.get('/:videogameId', VideogameController.findOneById);
router.post('/', VideogameController.saveOne);
router.put('/', VideogameController.updateOne);
router.delete('/', VideogameController.deleteOne);


//? -------------------------------------------------------------
//?     CONTROLLERS EN EXPRESS (videogames.controller.js)
//? -------------------------------------------------------------
/*
-- El controlador, es el que se encarga de manejar las request y
-- delegarlas a su respectiva service function
*/
// Servicios
const videogamesApiService = require('');
const videogamesQueryService = require('');

const findAll = async (req, res) => {
    try {
        const { name } = req.query;
        const { videogameId } = req.params;
        const { genre } = req.body;

        const games = (name)
            ? await videogamesQueryService(name)
            : await videogamesApiService();

        res.status(302).send({ status: 'FOUND', data: games });
    } catch (error) {
        res.status(500).send({ status: 'FAILED', error: error.message });
    }
};


//? -------------------------------------------------------------
//?     SERVICIOS EXTERNOS EN EXPRESS (videogames.service.js)
//? -------------------------------------------------------------
/*
-- Los servicios, son las funciones que interactuan con otras
-- aplicaciones, como bases de datos, APIs externas, integraciones,
-- etc. Entre los servicios y el controlador se puede crear una
-- interface DAO o Repository para añadir patrones de diseño.
*/
require('dotenv').config();
const { API_KEY } = process.env;
const { EXTERNAL_API } = require('./consts');
const fetch = require('node-fetch');

const { formatSingleVideogame } = require('');

const getVideogameByIdFromAPI = async (videogameId) => {
    const videogame = await fetch(`${EXTERNAL_API.DOMAIN}/games/${videogameId}?key=${API_KEY}`)
        .then((response) => response.json())
        .then((data) => data);

    const newVideogameFormat = formatSingleVideogame(videogame);
    return newVideogameFormat;
};


//? -------------------------------------------------------------
//?     SERVICIOS CON BASES DE DATOS EN EXPRESS (Sequelize + PostgreSQL)
//? -------------------------------------------------------------
/*
-- Para el caso de Sequelize y PostgreSQL, esta es la forma en la que
-- podemos interactuar con la base de datos
*/
//? ---------------------------------------------
//?     FindByPk
//? ---------------------------------------------
// Modelos de la base de datos, definidos en el database.js
const { videogame, childPlatform, genre, tag } = require('');

const { formatVideogame } = require('');

const findVideogameById = async (videogameId) => {
    const game = await videogame.findByPk(videogameId, {
        include: [
            {
                model: childPlatform,
                attributes: ['id', 'name', 'image_background'],
                through: { attributes: [] }
            },
            {
                model: genre,
                attributes: ['slug'],
                through: { attributes: [] }
            },
            {
                model: tag,
                attributes: ['slug'],
                through: { attributes: [] }
            }
        ]
    });

    const newVideogameFormat = formatVideogame(game);
    return newVideogameFormat;
};


//? ---------------------------------------------
//?     .create
//? ---------------------------------------------
const createVideogame = async (body) => {
    const newVideogame = await videogame.create({
        name: body.name,
        slug: body.name,
        released: body.released,
        backgroundImage: body.backgroundImage,
        website: body.website,
        rating: body.rating,
        ratingTop: body.ratingTop,
        moviesCount: body.moviesCount,
        ratingsCount: body.ratingsCount,
        descriptionRaw: body.descriptionRaw
    });

    newVideogame.addChildPlatforms(body.platforms);
    newVideogame.addGenres(body.genres);
    newVideogame.addTags(body.tags);

    return newVideogame;
}


//? ---------------------------------------------
//?     .bulkCreate
//? ---------------------------------------------
/*
-- La funcion .bulkCreate nos permite insertar varis registros de
-- una misma entidad en una sola accion
*/
const bulkCreateTags = async (tagsArray) => {
    await tag.bulkCreate(tagsArray);
};


//? ---------------------------------------------
//?     .findAll + where: {}
//? ---------------------------------------------
const { Op } = require('sequelize');

const formatVideogamesArray = async (videogameName) => {
    const name = videogameName.toLowerCase();
    const videogames = await videogame.findAll({
        where: {
            slug: {
                [Op.like]: `%${name}%`
            }
        },
        attributes: ['id', 'name', 'slug', 'released', 'background_image', 'rating', 'rating_top', 'movies_count'],
        include: [
            {
                model: childPlatform,
                attributes: ['slug'],
                through: { attributes: [] }
            },
            {
                model: genre,
                attributes: ['slug'],
                through: { attributes: [] }
            },
            {
                model: tag,
                attributes: ['slug'],
                through: { attributes: [] }
            }
        ]
    });

    const newVideogamesFormat = formatVideogamesArray(videogames);
    return newVideogamesFormat;
};


//? ---------------------------------------------
//?     .findAll + attributes: []
//? ---------------------------------------------
/*
-- La propiedad attributes nos permite definie que columnas del modelo
-- deseamos que sean devueltas en la consulta, pudiendo incluso traer
-- solo los datos de una columnas.

-- En este caso puedes ver que las llamdas a la base de datos tambien
-- pueden ser manejadas como promesas para no tener que usar el
-- async + await
*/
const modelo = require('<model_name>');

const findAllIds = modelo.findAll({
    attributes: ['id']
})
.then((results) => results)
.catch((error) => console.error(error));