const sequelize = require('../config/connection');
const { User } = require('../models');
const { City }  = require('../models');
const { Review }  = require('../models');

const userData = require('./userData.json');
const cityData = require('./seeds')

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
  
    await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });

    await City.bulkCreate(cityData,{
      individualHooks: true,
      returning: true,
    });

    await Review.bulkCreate(cityData,{
      individualHooks: true,
      returning: true,
    });

    process.exit(0);
  };
  
  seedDatabase();