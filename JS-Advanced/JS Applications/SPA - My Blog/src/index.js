const userModule = firebase.auth()
const database = firebase.firestore()
import { extendContext, errorHandler, clearUserData, getUserData, saveUserData } from './utility-functions.js'

const app = Sammy('#root', function () {

    this.use('Handlebars', 'hbs')

    // Home
    this.get('/home', function (context) {

        extendContext(context)
            .then(function () {
                if (context.isLoggedIn) {
                    database.collection('posts')
                        .get()
                        .then(res => { loadPosts(res, context, 'homeLogged') })
                        .catch(errorHandler)
                } else {
                    this.partial('templates/home.hbs')
                }
            })
    })


    // User Routes
    this.get('/register', function (context) {
        extendContext(context)
            .then(function () {
                this.partial('templates/register.hbs')
            })
    })
    this.get('/login', function (context) {
        extendContext(context)
            .then(function () {
                this.partial('templates/login.hbs')
            })
    })
    this.get('/logout', function () {
        userModule.signOut()
            .then(res => {
                clearUserData()
                this.redirect('/home')
            })
            .catch(errorHandler)
    })

    this.post('/register', function (context) {

        const { email, password, rePassword } = context.params

        if (password !== rePassword) {
            return
        }

        userModule.createUserWithEmailAndPassword(email, password)
            .then(() => {
                this.redirect('/login')
            })
            .catch(errorHandler)
    })
    this.post('/login', function (context) {

        const { email, password } = context.params

        userModule.signInWithEmailAndPassword(email, password)
            .then(userData => {
                saveUserData(userData)
                this.redirect('/home')
            })
            .catch(errorHandler)
    })


    // Posts
    this.post('/create-post', function (context) {

        const { title, category, content } = context.params

        database.collection('posts')
            .add({
                title,
                category,
                content,
                creator: getUserData().uid
            })
            .then(() => {
                this.redirect('/home')
            })
            .catch(errorHandler)
    })

    this.get('/details/:postId', function (context) {

        const { postId } = context.params

        database.collection('posts')
            .doc(postId)
            .get()
            .then(res => {

                const postData = res.data()

                context.post = { id: postId, ...postData }

                extendContext(context)
                    .then(function () {
                        this.partial('/templates/details.hbs')
                    })
            })
    })

    this.get('/delete/:postId', function (context) {

        const { postId } = context.params

        database.collection('posts')
            .doc(postId)
            .delete()
            .then(() => {
                this.redirect('/home')
            })
            .catch(errorHandler)
    })

    this.get('/edit/:postId', function (context) {
        extendContext(context)
            .then(function () {
                database.collection('posts')
                    .get()
                    .then(res => { loadPosts(res, context, 'edit') })
                    .catch(errorHandler)
            })
            .then(function () {

                const { postId } = context.params

                database.collection('posts')
                    .doc(postId)
                    .get()
                    .then(res => {
                        context.post = { id: postId, ...res.data() }
                    })
            })
    })
    this.post('/edit/:postId', function (context) {

        const { postId, title, category, content } = context.params

        database.collection('posts')
            .doc(postId)
            .get()
            .then(res => {

                return database.collection('posts')
                    .doc(postId)
                    .set({
                        ...res.data(),
                        title,
                        category,
                        content
                    })
            })
            .then(() => {
                this.redirect('/home')
            })
            .catch(errorHandler)
    })


})

app.run('/home')


function loadPosts(res, context, page) {
    const postsData = res.docs.map(post => {

        const { uid } = getUserData()
        const imTheCreator = post.data().creator === uid

        return {
            id: post.id,
            ...post.data(),
            imTheCreator
        }
    })

    context.posts = postsData

    extendContext(context)
        .then(function () {
            this.partial(`/templates/${page}.hbs`)
        })
}