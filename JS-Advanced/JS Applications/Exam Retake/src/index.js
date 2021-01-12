const userModule = firebase.auth()
const database = firebase.firestore()

const app = Sammy('#root', function () {

    this.use('Handlebars', 'hbs')

    // Home
    this.get('home', function (context) {
        extendContext(context)
            .then(function () {
                this.partial('/templates/home.hbs')
            })
    })


    // User Routes
    this.get('/register', function (context) {
        extendContext(context)
            .then(function () {
                this.partial('/templates/register.hbs')
            })
    })
    this.get('/login', function (context) {
        extendContext(context)
            .then(function () {
                this.partial('/templates/login.hbs')
            })
    })
    this.get('/logout', function (context) {
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
            .then(userData => {
                saveUserData(userData)
            })
            .then(() => {
                this.redirect('/home')
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


    // Offer Routes
    this.get('/create-offer', function (context) {
        extendContext(context)
            .then(function () {
                this.partial('/templates/create-offer.hbs')
            })
    })
    this.post('/create-offer', function (context) {

        const { product, description, price, pictureUrl } = context.params
        const imageUrlCut = pictureUrl.slice(0, 8)

        if (product === '') {
            return
        }
        if (description === '') {
            return
        }
        if (price === '') {
            return
        }
        if (pictureUrl === '') {
            return
        }
        if (imageUrlCut !== 'https://') {
            return
        }

        database.collection('offers')
            .add({
                product,
                description,
                price,
                pictureUrl,
                creator: getUserData().uid
            })
            .then(() => {
                this.redirect('/dashboard')
            })
            .catch(errorHandler)
    })

    this.get('/dashboard', function (context) {

        database.collection('offers')
            .get()
            .then(res => {

                const offersData = res.docs.map(offer => {

                    const { uid } = getUserData()
                    const offerData = offer.data()
                    const imTheCreator = offerData.creator === uid

                    return { id: offer.id, ...offer.data(), imTheCreator }
                })

                let offerIndex = 0
                for (let offer of offersData) {
                    offerIndex++
                    offer.index = offerIndex
                }

                context.offers = offersData

                extendContext(context)
                    .then(function () {
                        this.partial('/templates/dashboard.hbs')
                    })
            })
            .catch(errorHandler)
    })

    this.get('/details/:offerId', function (context) {

        const { offerId } = context.params

        database.collection('offers')
            .doc(offerId)
            .get()
            .then(res => {

                const offerData = res.data()

                context.offer = { ...offerData, id: offerId }

                extendContext(context)
                    .then(function () {
                        this.partial('/templates/details.hbs')
                    })
            })
    })

    this.get('/edit/:offerId', function (context) {

        const { offerId } = context.params

        database.collection('offers')
            .doc(offerId)
            .get()
            .then(res => {
                context.offer = { id: offerId, ...res.data() }
                extendContext(context)
                    .then(function () {
                        this.partial('/templates/edit-offer.hbs')
                    })
            })
    })
    this.post('/edit/:offerId', function (context) {

        const { offerId, product, description, price, pictureUrl } = context.params
        const imageUrlCut = pictureUrl.slice(0, 8)

        if (product === '') {
            return
        }
        if (description === '') {
            return
        }
        if (price === '') {
            return
        }
        if (pictureUrl === '') {
            return
        }
        if (imageUrlCut !== 'https://') {
            return
        }

        database.collection('offers')
            .doc(offerId)
            .get()
            .then(res => {
                return database.collection('offers')
                    .doc(offerId)
                    .set({
                        ...res.data(),
                        product,
                        description,
                        price,
                        pictureUrl
                    })
            })
            .then(res => {
                this.redirect('/dashboard')
            })
            .catch(errorHandler)
    })

    this.get('/delete-offer/:offerId', function (context) {

        const { offerId } = context.params

        database.collection('offers')
            .doc(offerId)
            .get()
            .then(res => {
                context.offer = { id: offerId, ...res.data() }
                extendContext(context)
                    .then(function () {
                        this.partial('/templates/delete-offer.hbs')
                    })
            })
    })
    this.get('/delete/:offerId', function(context) {

        const { offerId } = context.params
        
        database.collection('offers')
            .doc(offerId)
            .delete()
            .then(() => {
                this.redirect('/dashboard')
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