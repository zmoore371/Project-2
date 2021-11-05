const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class city extends Model {}

city.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
            City_Name:{
                type: DataTypes.string,
                allowNull: false,
        },
            State_id: {
                type: DataTypes.string,
                allowNull: false, 
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'city',
        }
    );

module.exports = city;