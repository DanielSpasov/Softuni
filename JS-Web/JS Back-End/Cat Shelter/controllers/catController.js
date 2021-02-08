const { Router } = require('express')
const router = Router()

const breedService = require('../services/breedService')
const catService = require('../services/catService')

router.get('/', (req, res) => {
    catService.getAll(req.query)
        .then(cats => res.render('homePage', { title: 'Home page', cats }))
        .catch(error => res.render('homePage', { title: 'Error', error }))
})

router.get('/addBreed', (req, res) => {
    res.render('addBreed', { title: 'Add breed' })
})

router.post('/addBreed', (req, res) => {
    breedService.create(req.body)
        .then(() => res.render('addBreed', { message: 'Breed added successfully!' }))
        .catch(error => res.render('addBreed', { title: 'Error', error }))
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

router.get('/editCat/:catId', async (req, res) => {
    let breeds = await breedService.getAll()
    catService.getOne(req.params.catId)
        .then(cat => res.render('editCat', { title: 'Edit Cat', cat, breeds }))
        .catch(error => res.render('editCat', { title: 'Error', error }))
})

router.post('/editCat/:catId', (req, res) => {
    catService.updateCat(req.params.catId, req.body)
        .then(() => res.redirect('/'))
        .catch(error => res.render('editCat', { title: 'Error', error }))
})

router.get('/catShelter/:catId', (req, res) => {
    catService.getOne(req.params.catId)
        .then(cat => res.render('catShelter', { title: 'Cat Shelter', cat }))
        .catch(error => res.render('catShelter', { title: 'Error', error }))
})

router.get('/delete/:catId', (req, res) => {
    catService.deleteCat(req.params.catId)
        .then(() => res.redirect('/'))
        .catch(error => res.render('catShelter', { title: 'Error', error }))
})

module.exports = router