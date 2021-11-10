const router = require('express').Router();
const { User } = require('../../models');

// router.post('/login', async (req, res) => {
//     const { username, password } = req.body;

//     console.log(req.body);

//     // const user = await User.findOne({ where: { username: username } });
//     // const passwordCheck = await user.checkPassword(password);

//     // if (!user || passwordCheck == false) {
//     //     res.status(400).json({ message: "no user matching in database" });
//     //     return;
//     // }

//     // req.session.save(() => {
//     //     req.session.userId = user.id;
//     //     req.session.username = user.username;
//     //     req.session.loggedin = true;
//     // })

//     res.status(200).json({ message: 'Logged in successfully' });

// });

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

//Way to log in from
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



module.exports = router;