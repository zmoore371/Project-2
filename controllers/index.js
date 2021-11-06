const router = require('express').Router();

const apiRoutes = require('./api');
// const homeRoutes = require('./homeRoutes');

// router.use('/', homeRoutes);
router.use('/api', apiRoutes);

router.get('/', async (req, res) => {
    res.render('homepage');
    // res.send('Hello World!')
});

module.exports = router;