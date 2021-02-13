const { Router } = require('express')
const router = Router()

const accessoryService = require('../services/accessoryService')

const isAuthenticated = require('../middlewares/isAuthenticated')

router.get('/create', isAuthenticated, (req, res) => {
    res.render('createAccessory', { title: 'Create Accessory' })
})

// TODO: Validate
router.post('/create', isAuthenticated, (req, res) => {
    accessoryService.create(req.body)
        .then(() => res.redirect('/products'))
        .catch(() => res.status(500).end())
})


module.exports = router