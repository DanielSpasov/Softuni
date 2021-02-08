const Cat = require('../Models/Cat')

function create(data) {
    let cat = new Cat(data)
    return cat.save()
}

function getAll() {
    let cats = Cat.find({}).lean()
    return cats
}

function getOne(id) {
    return Cat.findById(id).lean()
}

function updateCat(id, data) {
    return Cat.updateOne({ _id: id }, data)
}

module.exports = {
    create,
    getAll,
    getOne,
    updateCat,
}