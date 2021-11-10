const router = require('express').Router();
// const accountRoutes = require('./accountRoutes');
// const cityRoutes = requrie('./cityRoutes');
const homeRoutes = require('./homeRoutes');
const cityRoutes = require('./cityRoutes');

router.use('/home', homeRoutes);
router.use('/city', cityRoutes);
// router.use('/myaccount', accountRoutes);
// router.use('/city', cityRoutes);

const userRoutes = require('./userRoutes');
// const projectRoutes = require('./projectRoutes');

router.use('/user', userRoutes);
// router.use('/projects', projectRoutes);

module.exports = router;
