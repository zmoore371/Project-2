const router = require('express').Router();
const { City, Review, User } = require('../models');
const withAuth = require('../utils/auth');


//Route to get reviews and affiliated city from database and display them on right hand side of review page
router.get('/', async (req, res) =>{
    try{
        const reviewData = await Review.findAll({
            include: [
                {
                    model: City,
                    attributes: ['CITY NAME'],
                },
            ],
        }),
        const reviews = reviewData.map((review) => review.get({ plain: true }));

        //Change this to whatever the reviews section of homepage is called
        //test to see what data is delivered

        res.render('HOMEPAGE REVIEWS', {
            reviews
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

// create