const Breed = require('../Models/Breed')

function create(data) {
    let breed = new Breed(data)

    getAll()
        .then(breeds => {
            let check = breeds.find(x => x.breed === breed.breed)
            console.log(check)
        })

    return breed.save()
}

async function getAll() {
    let breeds = await Breed.find({}).lean()
    return breeds
}


module.exports = {
    create,
    getAll,
}