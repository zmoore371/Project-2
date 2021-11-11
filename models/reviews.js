const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Review extends Model { }

Review.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        city_review: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        review_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            },
        },
        city_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'city',
                key: 'id'
            },
        },
    },
    {
        sequelize: sequelize,
        freezeTableName: true,
        timestamps: false,
        underscored: true,
        modelName: 'review'
    }
);

module.exports = Review;