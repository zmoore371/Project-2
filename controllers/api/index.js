const router = require('express').Router();
const userRoutes = require('./userRoutes');
const review = require('./review');

// const projectRoutes = require('./projectRoutes');

router.use('/user', userRoutes);
router.use('/review', review);
// router.use('/projects', projectRoutes);

module.exports = router;