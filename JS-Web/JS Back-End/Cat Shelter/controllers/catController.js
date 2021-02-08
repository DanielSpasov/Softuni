const { Router } = require('express')
const router = Router()

const breedService = require('../services/breedService')
const catService = require('../services/catService')

router.get('/', (req, res) => {
    catService.getAll()
        .then(cats => res.render('homePage', { title: 'Home page', cats }))
        .catch(error => res.render('homePage', { title: 'Error', error }))
})

router.get('/addBreed', (req, res) => {
    res.render('addBreed', { title: 'Add breed' })
})

router.post('/addBreed', (req, res) => {
    breedService.create(req.body)
        .then(() => res.render('addBreed', { message: 'Breed added successfully!' }))
        .catch(error => res.render('addBreed', { title: 'Error', error}))
})

router.get('/addCat', (req, res) => {
    breedService.getAll()
        .then(breeds => res.render('addCat', { title: 'Add cat', breeds }))
        .catch(() => res.status(500).end())
})

router.post('/addCat', (req, res) => {
    catService.create(req.body)
        .then(() => res.redirect('/'))
        .catch(error => res.render('addCat', { title: 'Error', error }))
})

module.exports = router