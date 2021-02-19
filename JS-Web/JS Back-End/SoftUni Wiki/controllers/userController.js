const router = require('express').Router()

const userService = require('../services/userService')
const { COOKIE_NAME } = require('../config/index')

const isAuth = require('../middlewares/isAuthenticated')
const isGuest = require('../middlewares/isGuest')

router.get('/register', isGuest, (req, res) => {
    res.render('user/register', { title: 'Register' })
})

router.get('/login', isGuest, (req, res) => {
    res.render('user/login', { title: 'Login' })
})

router.get('/logout', isAuth, (req, res) => {
    res.clearCookie(COOKIE_NAME)
    res.redirect('/')
})


router.post('/register', isGuest, (req, res, next) => {

    const { username, password, repeatPassword } = req.body

    if (password !== repeatPassword) {
        return res.render('user/register', {
            title: 'Register',
            error: { message: 'Passwords doesn\'t match' }
        })
    }

    userService.register(username, password)
        .then(() => res.redirect('/user/login'))
        .catch(next)
})

router.post('/login', isGuest, (req, res, next) => {

    const { username, password } = req.body

    userService.login(username, password)
        .then(token => res.cookie(COOKIE_NAME, token))
        .then(() => res.redirect('/'))
        .catch(next)
})

module.exports = router