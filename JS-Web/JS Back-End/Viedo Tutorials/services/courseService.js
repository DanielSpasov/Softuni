const Course = require('../Models/Course')
const User = require('../Models/User')


function create(data, userId) {

    // if (!data.isPublic) data.isPublic = false
    if (data.isPublic) data.isPublic = true

    let courseDate = new Date()
    data.courseDate = `${courseDate.getDate()}-${courseDate.getMonth() + 1}-${courseDate.getFullYear()}`

    let course = new Course({ ...data, creator: userId })
    return course.save()
}

async function getAll() {
    let courses = await Course.find({}).lean()
    return courses
}

function getOne(id) {
    return Course.findById(id).lean()
}

function updateOne(id, data) {
    return Course.updateOne({ _id: id }, data)
}

function deleteOne(id) {
    return Course.deleteOne({ _id: id })
}

async function enrollCourse(userId, courseId) {

    let user = await User.findById(userId)
    let course = await Course.findById(courseId)

    course.usersEnrolled.push(user)
    return course.save()
}

module.exports = {
    create,
    getAll,
    getOne,
    updateOne,
    deleteOne,
    enrollCourse,
}