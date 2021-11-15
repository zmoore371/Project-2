const router = require('express').Router();
const withAuth = require('../utils/auth')
const { User, Review } = require('../models')


router.get('/', async (req, res) => {
    res.render('pages/homepage', { logged_in: req.session.logged_in });

});

router.get('/city', async (req, res) => {
    res.render('pages/city');
});

router.get('/feed', async (req, res) => {
    res.render('pages/feed');
});

router.get('/register', (req, res) => {
    res.render('pages/register')
});


router.get('/homepage', async (req, res) => {
    if (req.session.logged_in) {
        res.render('pages/homepage', { logged_in: req.session.logged_in });

    } else {
        res.render('pages/homepage', { logged_in: false });
    }

});

router.get('/myaccount', withAuth, async (req, res) => {
    try {
        const userData = await User.findOne({
            where: { id: req.session.user_id },
            attributes: { exclude: ['password'] },
            order: [['username', 'ASC']]
        })
        const user = userData.get({ plain: true });
        res.render('pages/myaccount', {
            user,
            logged_in: req.session.logged_in,
        })

    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('*', (req, res) =>
    res.render('pages/404.handlebars')
);


module.exports = router;