const router = require('express').Router()

const homeController = require('./controllers/homeController')
const userController = require('./controllers/userController')
const articleController = require('./controllers/articleController')

router.use('/', homeController)
router.use('/user', userController)
router.use('/article', articleController)

router.get('*', (req, res) => {
    res.render('404', { title: 'Error' })
})

module.exports = router