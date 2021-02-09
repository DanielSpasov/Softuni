const { Router } = require('express')

const router = Router()

const mainController = require('./controllers/mainController')

router.use('/', mainController)

router.get('*', (req, res) => {
    res.render('404', { title: 'Error 404' })
})


module.exports = router