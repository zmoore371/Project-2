const router = require('express').Router();

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

router.post('/homepage#login', async (req, res) => {

});

router.get('/homepage', async (req, res) => {
    res.render('homepage');
});

module.exports = router;