const User = require('./users');
const City = require('./cities');
const Review = require('./reviews');

City.hasMany(Review,{
    foreignKey: 'id',
});

Review.belongsTo(City, {
    foreignKey: 'id',
});


module.exports = { User, City, Review };
