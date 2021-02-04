const { Router } = require('express')

const router = Router()

const homeController = require('./controllers/homeController')

router.use('/', homeController)

router.get('*', (req,res) => {
    res.send('404')
})


module.exports = router