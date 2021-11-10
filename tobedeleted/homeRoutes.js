const router = require('express').Router();
const { City, Review, User } = require('../models');
const withAuth = require('../utils/auth');


//Route to get reviews and affiliated city from database and display them on right hand side of review page
router.get('/', async (req, res) => {
    const reviewData = await Review.findAll({
        include: [
            {
                model: City,
                attributes: city_id, state_id
            },
            {
                model: Review
            }
            ],
        }).catch((err) => {
            res.json(err)
        })
        res.json(reviewData)
})

router.get('/', withAuth, (req, res) => {
    if (req.session.logged_in) {
        //render add a review button if user is logged in
        res.render("")
    }

    //else render sign in/ create user form
    res.render("")


});

//create account from homepage
router.post('/', async (req, res) => {
    try {
        const userData = await User.create(req.body);

        //make sure req.body comes in with appropriate formatting from form

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.status(200).json(userData);
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

//Way to log in from home page
router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({ where: { email: req.body.email } });

        if (!userData) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.json({ user: userData, message: 'You are now logged in!' });
        });

    } catch (err) {
        res.status(400).json(err);
    }
});


//way to log out from home page

router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;
