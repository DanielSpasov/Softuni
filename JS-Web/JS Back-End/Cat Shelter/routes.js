const { Router } = require('express')

const router = Router()

const catController = require('./controllers/catController')

router.use('/', catController)

router.get('*', (req, res) => {
    res.render('404', { title: 'Error 404' })
})


module.exports = router