const router = require('express').Router();



router.get('/', async (req, res) => {
    res.render('pages/homepage');
});

router.get('/city', async (req, res) => {
    res.render('city');
});

router.get('/myaccount', async (req, res) => {
    res.render('pages/myaccount');
});

router.get('/feed', async (req, res) => {
    res.render('pages/feed');
});

router.get('/register', (req, res) => {
    res.render('pages/register')
});


router.get('/homepage', async (req, res) => {
    res.render('pages/homepage');
});

module.exports = router;