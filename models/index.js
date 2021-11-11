const User = require('./users');
const City = require('./cities');
const Review = require('./reviews');

City.hasMany(Review, {
    foreignKey: 'city_id',
});

Review.belongsTo(City, {
    foreignKey: 'city_id',
});

User.hasMany(Review, {
    foreignKey: "user_id"
});

Review.belongsTo(User, {
    foreignKey: 'user_id'
});




module.exports = { User, City, Review };
