const Breed = require('../Models/Breed')

function create(data) {
    let breed = new Breed(data)
    return breed.save()
}

function getAll() {
   return Breed.find({}).lean()
}

module.exports = {
    create,
    getAll,
}