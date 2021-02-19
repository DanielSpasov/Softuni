const router = require('express').Router()

const articleService = require('../services/articleService')

router.get('/', (req, res) => {
    res.redirect('/mainPage')
})

router.get('/mainPage', async (req, res) => {
    let articles = await articleService.getAll()
    articles.forEach(article => article.content = article.content.slice(0, 80))

    res.render('home/mainPage', { title: 'Main page', articles })
})

router.get('/allArticles', async (req, res) => {
    let articles = await articleService.getAll()

    res.render('home/allArticles', { title: 'All articles', articles })
})

module.exports = router