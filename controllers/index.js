const router = require('express').Router();

const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.get('/', async (req, res) => {
    res.render('homepage');
    // res.send('Hello World!')
});

router.get('/city', async (req, res) => {
    res.render('city');
});

router.get('/myaccount', async (req, res) => {
    res.render('myaccount');
});

router.get('/reviews', async (req, res) => {
    res.render('reviews');
});

router.get('/register', async (req, res) => {
    res.render('register')
});


module.exports = router;