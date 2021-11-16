const router = require('express').Router();
const { City, Review, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
    const cityData = await Review.findAll({
        include: [
            {
                model: City
            }
        ],
    }).catch((err) => {
        res.json(err)
    })
    res.json(cityData)
})
//get review by state abbreviation
// router.get('/stateId/:id', async (req, res) => {
//     const data = await Review.findAll({
//         where: {state_id: req.params.id},
//         include: [
//             {
//                 model: Review
//             }
//         ]
//     }).catch((err) => {
//         res.json(err)   
//     })
//     res.json(data);
// })

// create a review
// Need to format date but this will successfully create a review with the current user ID in use. Need to figure out a way to pass the city ID from whichever city user is reviewing
router.post('/:id', withAuth, async (req, res) => {
    let date = new Date();
    console.log(req.session)
    try {
        const newReview = await Review.create({
            ...req.body,
            city_id: req.params.id,
            user_id: req.session.user_id,
            review_date: date
        })

        res.status(200).json(newReview);
    } catch (err) {
        res.status(400).json(err)
    }
})

router.get('/cityid/:city', async (req, res) => {
    const data = await City.findAll({
        where: { city_name: req.params.city },
        include: { model: Review },

    }).catch((err) => {
        res.json(err)
    })
    res.json(data)

})


//show all review for logged in user
router.get('/user', async (req, res) => {
    console.log('is anyone out there');
    const userReview = await Review.findAll({
        where: { user_id: req.session.user_id },
        include: { model: City }
    }).catch((err) => {
        res.status(400).json(err)
    })
    console.log(userReview);
    res.status(200).json(userReview)
})

module.exports = router;

