
require('dotenv').config();
const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const apiRoutes = require('./api');
const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/users');
const session = require('express-session');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);


router.get('/', async (req, res) => {
    res.render('homepage');
});

router.get('/register', async (req, res) => {
    res.render('register');
});

router.post('/register', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        User.push({
            fName: req.body.fname,
            lName: req.body.lname,
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        })
        res.redirect('homepage');
    } catch {
        res.redirect('register');
    }
    console.log(User);
});

router.delete('/logout', (req, res) => {
    req.logout();
    req.redirect('homepage')
})

function checkAuth(req, res, next) {
    if (req.isAuthenticated()) {
        return next()
    }
    res.redirect('homepage#login')
}

function checkNotAuth(req, res, next) {
    if (req.isAuthenticated()) {
        return res.redirect('homepage')
    }
    next()
}

module.exports = router;