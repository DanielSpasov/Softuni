const { Router } = require('express')
const router = Router()

const breedService = require('../services/breedService')

router.get('/', (req, res) => {
    res.render('homePage', { title: 'Home page' })
})

router.get('/addBreed', (req, res) => {
    res.render('addBreed', { title: 'Add breed' })
})
router.post('/addBreed', (req, res) => {
    breedService.create(req.body)
        .then(() => res.redirect('/'))
        .catch(() => res.status(500).end())     
})

router.get('/addCat', (req, res) => {
    res.render('addCat', { title: 'Add cat' })
})

module.exports = router