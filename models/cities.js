const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class City extends Model { }

City.init(
    {
        //properties/fields defining the class - table schema
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        city_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        state_id: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize: sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'city'
    }
);

module.exports = City;