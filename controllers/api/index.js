const router = require('express').Router();
const userRoutes = require('./userRoutes');
const reviewRoutes = require('./review');

router.use('/user', userRoutes);
router.use('/review', reviewRoutes);

module.exports = router;