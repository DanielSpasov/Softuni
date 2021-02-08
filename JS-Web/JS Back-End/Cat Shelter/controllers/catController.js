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
        .then(() => res.render('addBreed', { message: 'Breed added successfully!' }))
        .catch(err => { res.render('addBreed', err) })
})

router.get('/addCat', (req, res) => {
    breedService.getAll()
        .then(breeds => {
            res.render('addCat', { title: 'Add cat', breeds })
        })
        .catch(() => res.status(500).end())
})

module.exports = router