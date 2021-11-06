const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//this is my Class object
class City extends Model {}//similar to a constructor in C#

//initializing the City class
City.init(
    {
        //properties/fields defining the class - table schema
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        City_Name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        State_id: {
            type: DataTypes.STRING,
            allowNull: false, 
        },
    },
    {//hummmm???
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'city',
        }
    );

module.exports = City;