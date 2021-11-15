const sequelize = require('../config/connection');
const { User } = require('../models');
const { City } = require('../models');
const { Review } = require('../models');

const userData = require('./userData.json');
const cityData = require('./cityData.json');
const reviewData = require('./reviewData.json');

const seedDatabase = async () => {
  console.log('seedingBegins---------------------')
  await sequelize.sync({ force: true });

  console.log('seedingUsers---------------------')
  await User.bulkCreate(userData);

  console.log('seedingCities---------------------')
  await City.bulkCreate(cityData);

  console.log('seedingReviews---------------------')
  await Review.bulkCreate(reviewData);
  console.log('seedingComplete---------------------')
  process.exit(0);
};

seedDatabase();//this works--It is bing used for users
  //seedCities();