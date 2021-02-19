const router = require('express').Router()

const articleService = require('../services/articleService')

const isAuth = require('../middlewares/isAuthenticated')
const isGuest = require('../middlewares/isGuest')


router.get('/create', isAuth, (req, res) => {
    res.render('article/create', { title: 'Create article' })
})

router.post('/create', isAuth, (req, res, next) => {

    articleService.create(req.body, req.user._id)
        .then(() => res.redirect('/'))
        .catch(next)
})

router.get('/:articleId/readMore', async (req, res) => {

    let article = await articleService.getOne(req.params.articleId)
    let isAuthor
    if(!req.user) isAuthor = false
    if(req.user) isAuthor = article.author == req.user._id

    res.render('article/readMore', { title: 'Read more', article, isAuthor })
})

router.get('/:articleId/delete', isAuth, (req, res, next) => {

    articleService.deleteOne(req.params.articleId)
        .then(() => res.redirect('/'))
        .catch(next)
})

router.get('/:articleId/edit', isAuth, async (req, res) => {
    let article = await articleService.getOne(req.params.articleId)
    res.render('article/edit', { title: 'Edit article', article })
})

router.post('/:articleId/edit', isAuth, (req, res, next) => {
    articleService.updateOne(req.params.articleId, req.body)
        .then(() => res.redirect(`/article/${req.params.articleId}/readMore`))
        .catch(next)
})

module.exports = router