const Cat = require('../Models/Cat')

function create(data) {
    let cat = new Cat(data)
    return cat.save()
}

async function getAll() {
    let cats = Cat.find({}).lean()
    return cats
}

module.exports = {
    create,
    getAll,
}