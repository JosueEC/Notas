//? --------------------------------------------------------------
//?     MODELOS EN SEQUELIZE (videogame.model.js)
//? --------------------------------------------------------------
/*
-- Lo primero es agregar el modulo que nos permite definir tipos
-- para nuestros modelos de sequelize:
*/
const { DataTypes } = require('sequelize');

/*
-- Ahora vamos a crear y exportar nuestra funcion define. Esta funcion
-- es la que se usa en el database.js donde definimos los modelos
-- pasando la instancia de la conexion con la base de datos como
-- parametro
*/
module.exports = (database) => {
    database.define('videogame', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUID,
            primaryKey: true,
            validate: {
                isUuid: true,
            }
        },
        name: {
            type: DataTypes. STRING,
            allowNull: false,
            unique: true,
            validate: {
                len: [2, 50],
            }
        },
    }, {
        timestamps: false,
    });
}