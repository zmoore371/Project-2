const router = require('express').Router();


const { User } = require('../models');
const withAuth = require('../utils/auth')
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.get('/', async (req, res) => {
    res.render('homepage');
    // res.send('Hello World!')
});

router.get('/city', async (req, res) => {
    res.render('city');
});

// router.get('/myaccount', async (req, res) => {
//     res.render('myaccount');
// });

router.get('/myaccount', withAuth, async(req, res) => {
    try{
        const userData = await User.findAll({
            attributes: {exclude: ['password']},
            order : [['name', 'ASC']], 
        })
        
        const users = userData.map((project) => project.get({plain:true}))
        res.render('myaccount', {
            users,
            logged_in: req.session.logged_in,
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/reviews', async (req, res) => {
    res.render('reviews');
});

router.get('/register', async (req, res) => {
    res.render('register')
});


module.exports = router;