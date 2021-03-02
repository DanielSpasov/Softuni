const router = require('express').Router()

const expensesService = require('../services/expensesService')

const isGuest = require('../middlewares/isGuest')
const isUser = require('../middlewares/isUser')

router.get('/', isUser, async (req, res) => {
    let expenses = await expensesService.getAll(req.user._id)
    res.render('expenses/expenses', { title: 'Expenses', expenses })
})

router.get('/create', isUser, (req, res) => {
    res.render('expenses/create', { title: 'Create expense' })
})

router.post('/create', isUser, (req, res, next) => {
    expensesService.create(req.body, req.user._id)
        .then(() => res.redirect('/'))
        .catch(next)
})

router.get('/:expenseId/report', isUser, async (req, res) => {
    let expense = await expensesService.getOne(req.params.expenseId)
    res.render('expenses/report', { title: 'Expense report', expense })
})

router.get('/:expenseId/delete', isUser, (req, res, next) => {
    expensesService.deleteOne(req.params.expenseId)
        .then(() => res.redirect('/'))
        .catch(next)
})



module.exports = router