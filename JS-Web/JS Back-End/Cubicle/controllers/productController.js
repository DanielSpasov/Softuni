const { Router } = require('express')
const router = Router()

const productService = require('../services/productService')
const accessoryService = require('../services/accessoryService')

const isAuthenticated = require('../middlewares/isAuthenticated')

router.get('/', (req, res) => {
    productService.getAll(req.query)
        .then(products => {
            res.render('home', { title: 'Home', products })
        })
        .catch(() => res.status(500).end())
})

router.get('/create', isAuthenticated, (req, res) => {
    res.render('create', { title: 'Create' })
})

router.post('/create', isAuthenticated, (req, res) => {
    productService.createItem(req.body, req.user._id)
        .then(() => res.redirect('/products'))
        .catch(err => {
            let error = Object.keys(err?.errors).map(x => ({ message: err.errors[x].message }))[0]
            res.render('create', { title: 'Add Cube', error, cubeData: req.body })
        })

})

router.get('/details/:productId', async (req, res) => {
    let product = await productService.getOneWithAccessories(req.params.productId)
    let isCreator = false
    if (req.user) {
        isCreator = req.user._id == product.creator
    }
    res.render('details', { title: 'Details', product, isCreator })
})

router.get('/:productId/attach', isAuthenticated, async (req, res) => {
    let product = await productService.getOne(req.params.productId)
    let accessories = await accessoryService.getAllUnattached(product.accessories)
    res.render('attachAccessory', { title: 'Attach accessory', product, accessories })
})

router.post('/:productId/attach', isAuthenticated, (req, res) => {
    productService.attachAccessory(req.params.productId, req.body.accessory)
        .then(() => res.redirect(`/products/details/${req.params.productId}`))
})

router.get('/:productId/edit', isAuthenticated, (req, res) => {
    productService.getOne(req.params.productId)
        .then(product => {
            res.render('editCube', { title: 'Edit product', product })
        })
})

router.post('/:productId/edit', isAuthenticated, (req, res) => {
    productService.updateOne(req.params.productId, req.body)
        .then(() => {
            res.redirect(`/products/details/${req.params.productId}`)
        })
})

router.get('/:productId/delete', isAuthenticated, (req, res) => {
    productService.getOne(req.params.productId)
        .then(product => {
            res.render('deleteCube', { title: 'Delete cube', product })
        })
})

router.post('/:productId/delete', isAuthenticated, (req, res) => {
    productService.deleteOne(req.params.productId)
        .then(() => {
            res.redirect('/products')
        })
})


module.exports = router