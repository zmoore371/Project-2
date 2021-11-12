const { Model, DataTypes, Sequelize } = require('sequelize');
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
        city_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'city',
                key: 'id'
            },
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false
        },
        business: {
            type: DataTypes.STRING,
            allowNull: false
        },
        businessAddress: {
            type: DataTypes.STRING,
            allowNull: false
        },
        recommend: {
            type: DataTypes.STRING,
            allowNull: false
        },
        review: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        review_date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.NOW,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
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