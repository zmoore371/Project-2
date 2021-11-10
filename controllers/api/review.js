const router = require('express').Router();
const { City, Review, User } = require('../../models');

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
router.get('/stateId/:id', async (req, res) => {
    const data = await City.findAll({
        where: {state_id: `${req.params.id}`},
        include: [
            {
                model: Review
            }
        ]
    }).catch((err) => {
        res.json(err)   
    })
    res.json(data);
})

//get review by city name
router.get('/name/:id', async (req, res) => {
    const data = await City.findAll({
        where: {city_name: `${req.params.id}`},
        include: [
            {
                model: Review
            }
        ]
    }).catch((err) => {
        res.json(err)
    })
    res.json(data)
})

router.get('/:id', async (req, res) => {
    const data = await City.findByPk(req.params.id,
        {include: {model: Review}}).catch((err) => {
        res.json(err)   
    })
    res.json(data);
})


module.exports = router;