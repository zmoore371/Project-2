const router = require('express').Router();


router.get('/', async (req, res) => {
    res.render('homepage');
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

router.get('/register', (req, res) => {
    res.render('register')
});

// router.get('/city', async (req, res) => {
//     res.render('city');
// });

// router.get('/myaccount', async (req, res) => {
//     res.render('myaccount');
// });

// router.get('/reviews', async (req, res) => {
//     res.render('reviews');
// });



router.get('/homepage', async (req, res) => {
    res.render('homepage');
});

module.exports = router;