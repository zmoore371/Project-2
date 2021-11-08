const router = require('express').Router();
const { User } = require('../../models');

router.get('/register', (req, res) => {
    res.render('register')
});