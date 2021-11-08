require('dotenv').config();
const router = require('express').Router();
const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/users');
const passport = require('passport');
const flash = require('express-flash');
const session = require('express-session');
const methodOverride = require('method-override')



const initializePassport = require('../passport-config');
initializePassport(
    passport,
    username => User.find(user => user.username === username)
);

router.use(express.urlencoded({ extended: false }));
router.use(flash());
router.use(session({
    secret: process.env.session_secret,
    resave: false,
    saveUninitialized: false
}));

router.use(passport.initialize());
router.use(passport.session())
router.use(methodOverride('_method'));

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

router.post('/login', passport.authenticate('local', {
    successRedirect: 'homepage',
    failureRedirect: 'login',
    failureFlash: true
}))


router.get('/city', async (req, res) => {
    res.render('city');
});

router.get('/myaccount', async (req, res) => {
    res.render('myaccount');
});

router.get('/reviews', async (req, res) => {
    res.render('reviews');
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