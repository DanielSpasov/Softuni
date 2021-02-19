const router = require('express').Router()

const courseService = require('../services/courseService')

const isAuth = require('../middlewares/isAuthenticated')
const isGuest = require('../middlewares/isGuest')

router.get('/create', isAuth, (req, res) => {
    res.render('course/create', { title: 'Create Course' })
})

router.post('/create', isAuth, (req, res, next) => {
    courseService.create(req.body, req.user._id)
        .then(() => res.redirect('/'))
        .catch(next)
})

router.get('/:courseId/details', isAuth, async (req, res) => {

    let course = await courseService.getOne(req.params.courseId)

    let isCreator = course.creator == req.user._id
    let isEnrolled = false

    course.usersEnrolled.forEach(user => {
        if(user == req.user._id) return isEnrolled = true
    })


    res.render('course/details', { title: 'Details', course, isCreator, isEnrolled })
})

router.get('/:courseId/enroll', isAuth, (req, res, next) => {
    courseService.enrollCourse(req.user._id, req.params.courseId)
        .then(() => res.redirect(`/course/${req.params.courseId}/details`))
        .catch(next)
})

router.get('/:courseId/delete', isAuth, (req, res, next) => {
    courseService.deleteOne(req.params.courseId)
        .then(() => res.redirect('/'))
        .catch(next)
})

router.get('/:courseId/edit', isAuth, (req, res, next) => {
    courseService.getOne(req.params.courseId)
        .then(course => res.render('course/edit', { title: 'Edit', course }))
        .catch(next)
})

router.post('/:courseId/edit', isAuth, (req, res, next) => {

    if(req.body.isPublic) req.body.isPublic = true
    if(!req.body.isPublic) req.body.isPublic = false

    courseService.updateOne(req.params.courseId, req.body)
        .then(() => res.redirect(`/course/${req.params.courseId}/details`))
        .catch(next)
})


module.exports = router
