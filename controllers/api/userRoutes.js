const router = require('express').Router();
const { User } = require('../../models');



//create account from homepage
// send to /api/user/
// {
// 	"firstName": "Zachary",
// 	"lastName": "Moore",
// 	"username": "zmoore371",
// 	"email": "zmoore371@gmail.com",
// 	"password": "12345678"
// }


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

//Way to log in from
//send to /api/user/login
// {
//  "email": blabh
//  "password": lbao  
// }
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

router.post('/logout', (req, res) => {
    console.log('logging out')
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});



module.exports = router;