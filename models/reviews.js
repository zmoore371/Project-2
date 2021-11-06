const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Review extends Model{}

Review.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        userID:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        cityID:{
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          ctyReview:{
              type: DataTypes.STRING,
              allowNull: false,
          },
    },
    {
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'review',
      }
);

module.exports = Review;