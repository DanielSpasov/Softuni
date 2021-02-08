const Cat = require('../Models/Cat')

function create(data) {
    let cat = new Cat(data)
    return cat.save()
}

async function getAll(query) {
    let cats = await Cat.find({}).lean()

    if (query.search) {
        cats = cats.filter(x => x.name.includes(query.search))
    }

    return cats
}

function getOne(id) {
    return Cat.findById(id).lean()
}

function updateCat(id, data) {
    return Cat.updateOne({ _id: id }, data)
}

function deleteCat(id) {
    return Cat.deleteOne({ _id: id })
}

module.exports = {
    create,
    getAll,
    getOne,
    updateCat,
    deleteCat,
}