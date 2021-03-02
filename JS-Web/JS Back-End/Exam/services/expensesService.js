const Expense = require('../Models/Expense')
const User = require('../Models/User')


async function create(data, userId) {

    if (data.report == 'on') data.report = true
    if (data.total <= 0) throw { message: 'Total must be a positive number' }

    let expense = new Expense({ ...data, creator: userId })
    let user = await User.findById(userId)

    user.expenses.push(expense)
    user.save()

    return expense.save()
}

async function getAll(id) {

    let user = await User.findById(id)
        .populate('expenses')
        .lean()

    return user.expenses
}

function getOne(id) {
    return Expense.findById(id).lean()
}

function deleteOne(id) {
    return Expense.deleteOne({ _id: id })
}

function updateOne(id, data) {
    return User.updateOne({ _id: id }, data)
}

module.exports = {
    create,
    getAll,
    getOne,
    deleteOne,
    updateOne,
}