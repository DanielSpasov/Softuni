const Cat = require('../Models/Cat')

function create(data) {
    let cat = new Cat(data)
    return cat.save()
}

async function getAll(query) {
    let cats = await Cat.find({}).lean()

    if (query.name) {
        cats = cats.filter(x => x.name.includes(query.name))
    }
    if (query.breed) {
        cats = cats.filter(x => x.breed.includes(query.breed))
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