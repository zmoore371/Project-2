const router = require('express').Router();
const withAuth = require('../utils/auth')


router.get('/', async (req, res) => {
    res.render('pages/homepage');
});

router.get('/city', async (req, res) => {
    res.render('city');
});

// router.get('/myaccount', withAuth, async (req, res) => {
//     res.render('pages/myaccount');
// });

router.get('/reviews', async (req, res) => {
    res.render('pages/reviews');
});

router.get('/register', (req, res) => {
    res.render('pages/register')
});


router.get('/homepage', async (req, res) => {
    res.render('pages/homepage');
});

router.get('/myaccount', withAuth, async(req, res) => {
    try{
        const userData = await User.findAll({
            attributes: {exclude: ['password']},
            order : [['name', 'ASC']], 
        })
        
        const users = userData.map((project) => project.get({plain:true}))
        res.render('pages/myaccount', {
            users,
            logged_in: req.session.logged_in,
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router;