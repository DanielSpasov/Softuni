const Article = require('../Models/Article')


function create(data, userId) {

    let creationDate = new Date()
    data.creationDate = `${creationDate.getDate()}-${creationDate.getMonth() + 1}-${creationDate.getFullYear()}`

    let article = new Article({ ...data, author: userId })
    return article.save()
}

async function getAll() {
    return await Article.find({}).lean()
}

function getOne(id) {
    return Article.findById(id).lean()
}

function deleteOne(id) {
    return Article.deleteOne({ _id: id })
}

function updateOne(id, data) {
    return Article.updateOne({ _id: id }, data)
}


module.exports = {
    create,
    getAll,
    getOne,
    deleteOne,
    updateOne,
}