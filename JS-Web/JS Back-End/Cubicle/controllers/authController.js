const { Router } = require('express')
const router = Router()
const { check, validationResult } = require('express-validator')

const authService = require('../services/authService')
const { COOKIE_NAME } = require('../config/config')

const isAuthenticated = require('../middlewares/isAuthenticated')
const isGuest = require('../middlewares/isGuest')

router.get('/login', isGuest, (req, res) => {
    res.render('login', { title: 'Login' })
})

router.post('/login', isGuest, async (req, res) => {
    const { username, password } = req.body

    try {
        let token = await authService.login({ username, password })
        res.cookie(COOKIE_NAME, token)
        res.redirect('/products')
    } catch (error) {
        res.render('login', { error })
    }
})

router.get('/register', isGuest, (req, res) => {
    res.render('register', { title: 'Register' })
})

router.post('/register', isGuest, async (req, res) => {

    const { username, password, repeatPassword } = req.body

    try {

        if (password !== repeatPassword) throw { message: 'Password Missmatch' }
        authService.register({ username, password })
        res.redirect('/auth/login')

    } catch (error) {
        res.render('register', { error })
    }
})

router.get('/logout', isAuthenticated, (req, res) => {
    res.clearCookie(COOKIE_NAME)
    res.redirect('/products')
})


module.exports = router