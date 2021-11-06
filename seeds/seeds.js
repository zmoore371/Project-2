const sequelize = require('../config/connection');
const { User } = require('../models');
const { City }  = require('../models');
const { Review }  = require('../models');

const userData = require('./userData.json');
const cityData = require('./cityData.json');
const reviewData = require('./reviewData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
  
    await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });

    await City.bulkCreate(cityData, {
      individualHooks: true,
      returning: true,
    });

    await Review.bulkCreate(reviewData, {
      individualHooks: true,
      returning: true,
    });

    process.exit(0);
  };

  seedDatabase();//this works--It is bing used for users
  //seedCities();