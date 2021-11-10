const router = require('express').Router();
const { City, Review, User } = require('../../models');

router.get('/', async (req, res) => {
    const cityData = await Review.findAll({
        include: [
            {
                model: City
            },
            {
                model: Review
            }
            ],
        }).catch((err) => {
            res.json(err)
        })
        res.json(cityData)
})

module.exports = router;