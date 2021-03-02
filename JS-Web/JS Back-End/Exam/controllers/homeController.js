const router = require('express').Router()

router.get('/', (req, res) => {
    if (req.user) res.redirect('/expenses')
    if (!req.user) res.render('home/home', { title: 'Home page' })
})

module.exports = router