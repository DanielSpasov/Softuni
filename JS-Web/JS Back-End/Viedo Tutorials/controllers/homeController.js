const router = require('express').Router()

const courseService = require('../services/courseService')

router.get('/', async (req, res) => {
    let isAuth = req.user ? true : false

    let courses = await courseService.getAll()
    courses.sort((a, b) => b.usersEnrolled.length - a.usersEnrolled.length)

    if (!isAuth) res.render('home/guest', { title: 'Guest home', isAuth, courses })
    if (isAuth) res.render('home/user', { title: 'Home Page', isAuth, courses })
})

module.exports = router