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
        .catch(err => {
            let error = Object.keys(err?.errors).map(x => ({ message: err.errors[x].message }))[0]
            res.render('createAccessory', { title: 'Create Accessory', error, accessoryData: req.body })
        })
})


module.exports = router