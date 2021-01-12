// Imports
const userModule = firebase.auth()
const database = firebase.firestore()

const app = Sammy('#root', function () {

    this.use('Handlebars', 'hbs')

    // Home route
    this.get('/home', function (context) {

        database.collection('destinations')
            .get()
            .then(res => {

                context.destinations = res.docs.map(des => {
                    return { id: des.id, ...des.data() }
                })

                extendContext(context)
                    .then(function () {
                        this.partial('/templates/home.hbs')
                    })
            })
    })


    // User routes
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
        userModule.signOut()
            .then(res => {
                clearUserData()
                this.redirect('/login')
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
                userModule.signInWithEmailAndPassword(email, password)
                    .then(userData => {
                        saveUserData(userData)
                        this.redirect('/home')
                    })
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


    // Destination routes
    this.get('/create-destination', function (context) {
        extendContext(context)
            .then(function () {
                this.partial('/templates/create-destination.hbs')
            })
    })
    this.post('/create-destination', function (context) {

        const { destination, city, duration, departureDate, imgUrl } = context.params

        if (destination === '') {
            notificationsHandler('Error: Destination cannot be empty!', 'create-destination-error-box')
            return
        }
        if (city === '') {
            notificationsHandler('Error: City cannot be empty!', 'create-destination-error-box')
            return
        }
        if (duration === '') {
            notificationsHandler('Error: Duration cannot be none!', 'create-destination-error-box')
            return
        }
        if (duration <= 0) {
            notificationsHandler('Error: Duration cannot be lower than zero!', 'create-destination-error-box')
            return
        }
        if (departureDate === '') {
            notificationsHandler('Error: Departure Date cannot be none!', 'create-destination-error-box')
            return
        }
        if (imgUrl === '') {
            notificationsHandler('Error: Destination must have an image url!', 'create-destination-error-box')
            return
        }

        database.collection('destinations')
            .add({
                destination,
                city,
                duration,
                departureDate,
                imgUrl,
                creator: getUserData().uid
            })
            .then(() => {
                this.redirect('/home')
            })
            .catch(errorHandler)
    })

    this.get('/details/:id', function (context) {

        const { id } = context.params

        database.collection('destinations')
            .doc(id)
            .get()
            .then(res => {

                const { uid } = getUserData()
                const destinationData = res.data()
                const imTheCreator = destinationData.creator === uid

                context.destination = { ...destinationData, id: id, imTheCreator }

                extendContext(context)
                    .then(function () {
                        this.partial('/templates/details.hbs')
                    })
            })
    })

    this.get('/edit/:id', function (context) {

        const { id } = context.params

        database.collection('destinations')
            .doc(id)
            .get()
            .then(res => {
                context.destination = { id: id, ...res.data() }
                extendContext(context)
                    .then(function () {
                        this.partial('/templates/edit.hbs')
                    })
            })
    })
    this.post('/edit/:id', function (context) {

        const { id, destination, city, departureDate, duration, imgUrl } = context.params

        if (destination === '') {
            return
        }
        if (city === '') {
            return
        }
        if (duration === '') {
            return
        }
        if (departureDate === '') {
            return
        }
        if (imgUrl === '') {
            return
        }

        database.collection('destinations')
            .doc(id)
            .get()
            .then(res => {
                return database.collection('destinations')
                    .doc(id)
                    .set({
                        ...res.data(),
                        destination,
                        city,
                        departureDate,
                        duration,
                        imgUrl
                    })
            })
            .then(res => {
                this.redirect(`/details/${id}`)
            })
            .catch(errorHandler)

    })

    this.get('/my-destinations', function (context) {
        database.collection('destinations')
            .get()
            .then(res => {

                context.destinations = res.docs.map(des => {

                    const { uid } = getUserData()
                    const destinationData = des.data()
                    const imTheCreator = destinationData.creator === uid

                    return { id: des.id, ...des.data(), imTheCreator }
                })

                extendContext(context)
                    .then(function () {
                        this.partial('/templates/my-destinations.hbs')
                    })
            })
    })

    this.get('/delete/:id', function (context) {

        const { id } = context.params

        database.collection('destinations')
            .doc(id)
            .delete()
            .then(() => {
                this.redirect('/my-destinations')
            })
            .catch(errorHandler)
    })
})

app.run('/home')


// Utility Functions
function extendContext(context) {

    const user = getUserData()
    context.isLoggedIn = Boolean(user)
    context.userEmail = user ? user.email : ''

    return context.loadPartials({
        'header': 'templates/partials/header.hbs',
        'footer': 'templates/partials/footer.hbs'
    })
}

function errorHandler(error) {
    console.log(error)
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
    localStorage.removeItem('user')
}

function notificationsHandler(info, box) {
    const errorBox = document.getElementById(box)
    errorBox.innerHTML = info
    errorBox.style = 'display: block'
    setTimeout(function () {
        errorBox.style = 'display: none'
    }, 3000)
}