const sequelize = require('../config/connection');
const { User } = require('../models');
const { City }  = require('../models');
//const { reviews }  = require('../models');

const userData = require('./userData.json');
const cityData = require('./seeds')

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
  
    await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });
  
    process.exit(0);
  };
  
  seedDatabase();