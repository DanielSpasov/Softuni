const userModel = firebase.auth()
const database = firebase.firestore()

const app = Sammy('#root', function () {

    this.use('Handlebars', 'hbs')

    // Home route
    this.get('/home', function (context) {

        database.collection('movies')
            .get()
            .then(res => {

                context.movies = res.docs.map(movie => {
                    return { id: movie.id, ...movie.data() }
                })

                extendContext(context)
                    .then(function () {
                        this.partial('/templates/home.hbs')
                    })
            })
            .catch(errorHandler)
    })


    // GET User Routes
    this.get('/login', function (context) {
        extendContext(context)
            .then(function () {
                this.partial('/templates/login.hbs')
            })
    })
    this.get('/register', function (context) {
        extendContext(context)
            .then(function () {
                this.partial('/templates/register.hbs')
            })
    })
    this.get('/logout', function () {
        userModel.signOut()
            .then(res => {
                clearUserData()
                this.redirect('/home')
            })
            .catch(errorHandler)
    })


    // POST User Routes
    this.post('/register', function (context) {
        const { email, password, rePassword } = context.params

        if (password !== rePassword) {
            return
        }

        userModel.createUserWithEmailAndPassword(email, password)
            .then(() => {
                this.redirect('/login')
            })
            .catch(errorHandler)
    })
    this.post('/login', function (context) {
        const { email, password } = context.params

        userModel.signInWithEmailAndPassword(email, password)
            .then(userData => {
                saveUserData(userData)
                this.redirect('/home')
            })
            .catch(errorHandler)
    })


    // Movie Routes
    this.get('/addMovie', function (context) {
        extendContext(context)
            .then(function () {
                this.partial('/templates/addMovie.hbs')
            })
    })
    this.post('/addMovie', function (context) {
        const { title, description, imageUrl } = context.params

        database.collection('movies')
            .add({
                title,
                description,
                imageUrl,
                likes: 0,
            })
            .then(createdMovie => {
                this.redirect('/home')
            })
            .catch(errorHandler)
    })

    this.get('/details/:movieId', function (context) {

        const { movieId } = context.params

        database.collection('movies')
            .doc(movieId)
            .get()
            .then(res => {

                const movieData = res.data()

                context.movie = { ...movieData, id: movieId }

                extendContext(context)
                    .then(function () {
                        this.partial('/templates/details.hbs')
                    })
            })
    })

    this.get('/delete/:movieId', function (context) {

        const { movieId } = context.params

        database.collection('movies')
            .doc(movieId)
            .delete()
            .then(() => {
                this.redirect('/home')
            })
            .catch(errorHandler)
    })

    this.get('/edit/:movieId', function (context) {

        const { movieId } = context.params

        database.collection('movies')
            .doc(movieId)
            .get()
            .then(res => {
                context.movie = { id: movieId, ...res.data() }
                extendContext(context)
                    .then(function () {
                        this.partial('/templates/editMovie.hbs')
                    })
            })
    })
    this.post('/edit/:movieId', function (context) {

        const { movieId, title, description, imageUrl } = context.params

        database.collection('movies')
            .doc(movieId)
            .get()
            .then(res => {
                return database.collection('movies')
                    .doc(movieId)
                    .set({
                        ...res.data(),
                        title,
                        description,
                        imageUrl,
                    })
            })
            .then(res => {
                this.redirect(`/details/${movieId}`)
            })
            .catch(errorHandler)
    })

});

app.run('/home')

function extendContext(context) {

    const user = getUserData()
    context.isLoggedIn = Boolean(user)
    context.userEmail = user ? user.email : ''

    return context.loadPartials({
        'header': './partials/header.hbs',
        'footer': './partials/footer.hbs'
    })
}

function saveUserData(data) {
    const { user: { email, uid } } = data
    localStorage.setItem('user', JSON.stringify({ email, uid }))
}

function getUserData() {
    let user = localStorage.getItem('user')
    return user ? JSON.parse(user) : null
}

function clearUserData() {
    this.localStorage.removeItem('user')
}

function errorHandler(error) {
    console.log(error)
}