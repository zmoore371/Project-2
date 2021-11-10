const router = require('express').Router();
const { User } = require('../../models');

<<<<<<< HEAD
router.get('/register', (req, res) => {
    res.render('register')
});

=======
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    console.log(req.body);

    // const user = await User.findOne({ where: { username: username } });
    // const passwordCheck = await user.checkPassword(password);

    // if (!user || passwordCheck == false) {
    //     res.status(400).json({ message: "no user matching in database" });
    //     return;
    // }

    // req.session.save(() => {
    //     req.session.userId = user.id;
    //     req.session.username = user.username;
    //     req.session.loggedin = true;
    // })

    res.status(200).json({ message: 'Logged in successfully' });

});

module.exports = router;
>>>>>>> main
