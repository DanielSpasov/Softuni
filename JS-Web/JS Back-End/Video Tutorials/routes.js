const router = require('express').Router()

const homeController = require('./controllers/homeController')
const userController = require('./controllers/userController')
const courseController = require('./controllers/courseController')

router.use('/', homeController)
router.use('/user', userController)
router.use('/course', courseController)

router.get('*', (req, res) => {
    res.render('404', { title: 'Page not found' })
})

module.exports = router