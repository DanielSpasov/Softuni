const { Router } = require('express')
const router = Router()

const breedService = require('../services/breedService')
const catService = require('../services/catService')
const authService = require('../services/authService')

const isLoggedIn = require('../middlewares/isLoggedIn')

const { COOKIE_NAME } = require('../config/config')

router.get('/', (req, res) => {
    catService.getAll(req.query)
        .then(cats => res.render('homePage', { title: 'Home page', cats }))
        .catch(error => res.render('homePage', { title: 'Error', error }))
})

router.get('/addBreed', isLoggedIn, (req, res) => {
    res.render('addBreed', { title: 'Add breed' })
})

router.post('/addBreed', isLoggedIn, (req, res) => {
    breedService.create(req.body)
        .then(() => res.render('addBreed', { message: 'Breed added successfully!' }))
        .catch(error => res.render('addBreed', { title: 'Error', error }))
})

router.get('/addCat', isLoggedIn, (req, res) => {
    breedService.getAll()
        .then(breeds => res.render('addCat', { title: 'Add cat', breeds }))
        .catch(() => res.status(500).end())
})

router.post('/addCat', isLoggedIn, (req, res) => {
    catService.create(req.body)
        .then(() => res.redirect('/'))
        .catch(error => res.render('addCat', { title: 'Error', error }))
})

router.get('/editCat/:catId', isLoggedIn, async (req, res) => {
    let breeds = await breedService.getAll()
    catService.getOne(req.params.catId)
        .then(cat => res.render('editCat', { title: 'Edit Cat', cat, breeds }))
        .catch(error => res.render('editCat', { title: 'Error', error }))
})

router.post('/editCat/:catId', isLoggedIn, (req, res) => {
    catService.updateCat(req.params.catId, req.body)
        .then(() => res.redirect('/'))
        .catch(error => res.render('editCat', { title: 'Error', error }))
})

router.get('/catShelter/:catId', isLoggedIn, (req, res) => {
    catService.getOne(req.params.catId)
        .then(cat => res.render('catShelter', { title: 'Cat Shelter', cat }))
        .catch(error => res.render('catShelter', { title: 'Error', error }))
})

router.get('/delete/:catId', isLoggedIn, (req, res) => {
    catService.deleteCat(req.params.catId)
        .then(() => res.redirect('/'))
        .catch(error => res.render('catShelter', { title: 'Error', error }))
})

router.get('/login', (req, res) => {
    res.render('login', { title: 'Login Page' })
})

router.post('/login', async (req, res) => {

    const { username, password } = req.body

    try {
        let token = await authService.login({ username, password })
        res.cookie(COOKIE_NAME, token)
        res.redirect('/')
    } catch (error) {
        res.render('login', { title: 'Title', error })
    }
})

router.get('/register', (req, res) => {
    res.render('register', { title: 'Register Page' })
})

router.post('/register', async (req, res) => {

    const { username, password, rePassword } = req.body

    if (username.length < 4) {
        return res.render('register', { title: 'Register', error: { message: "Username is too short" } })
    }
    if (username.length > 16) {
        return res.render('register', { title: 'Register', error: { message: "Username is too short" } })
    }
    if (password != rePassword) {
        return res.render('register', { title: 'Register', error: { message: "Passwords doesn't match" } })
    }
    if (password.length < 6) {
        return res.render('register', { title: 'Register', error: { message: "Password is too short" } })
    }
    if (password.length > 30) {
        return res.render('register', { title: 'Register', error: { message: "Password is too long" } })
    }

    try {
        authService.register({ username, password })
        res.redirect('/login')
    } catch (error) {
        res.render('register', error)
    }
})

router.get('/logout', isLoggedIn, (req, res) => {
    res.clearCookie(COOKIE_NAME)
    res.redirect('/')
})

module.exports = router