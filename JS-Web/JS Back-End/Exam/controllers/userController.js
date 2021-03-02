const router = require('express').Router()

const userService = require('../services/userService')
const { COOKIE_NAME } = require('../config/index')

const isUser = require('../middlewares/isUser')
const isGuest = require('../middlewares/isGuest')


router.get('/register', isGuest, (req, res) => {
    res.render('user/register', { title: 'Register' })
})

router.get('/login', isGuest, (req, res) => {
    res.render('user/login', { title: 'Login' })
})

router.get('/logout', isUser, (req, res) => {
    res.clearCookie(COOKIE_NAME)
    res.redirect('/')
})


router.post('/register', isGuest, (req, res, next) => {

    const { username, password, repeatPassword, amount } = req.body

    if (password !== repeatPassword) {
        return res.render('user/register', {
            title: 'Register',
            error: { message: 'Passwords doesn\'t match' }
        })
    }

    if (amount < 0) {
        return res.render('user/register', {
            title: 'Register',
            error: { message: 'Amount cannot be lower than 0' }
        })
    }

    userService.register(username, password, amount)
        .then(() => {
            userService.login(username, password)
                .then(token => res.cookie(COOKIE_NAME, token))
                .then(() => res.redirect('/'))
                .catch(next)
        })
        .catch(next)
})

router.post('/login', isGuest, (req, res, next) => {

    const { username, password } = req.body

    userService.login(username, password)
        .then(token => res.cookie(COOKIE_NAME, token))
        .then(() => res.redirect('/'))
        .catch(next)
})


router.post('/:userId/refill', isUser, (req, res, next) => {
    userService.refill(req.params.userId, req.body)
        .then(() => res.redirect('/'))
        .catch(next)
})



module.exports = router