const UserModel = firebase.auth()
const DB = firebase.firestore()

const app = Sammy('#root', function () {

    this.use('Handlebars', 'hbs')

    // Home routes
    this.get('/home', function (context) {

        DB.collection('offers')
            .get()
            .then(res => {

                context.offers = res.docs.map(offer => {
                    return { id: offer.id, ...offer.data() }
                })

                extendContext(context)
                    .then(function () {
                        this.partial('templates/home.hbs')
                    })
            })
            .catch(errorHandler)
    })


    // GET User routes
    this.get('/register', function (context) {
        extendContext(context)
            .then(function () {
                this.partial('templates/register.hbs')
            })
    })
    this.get('/login', function (context) {
        extendContext(context)
            .then(function () {
                this.partial('./templates/login.hbs')
            })
    })
    this.get('/logout', function (context) {
        UserModel.signOut()
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

        UserModel.createUserWithEmailAndPassword(email, password)
            .then(userData => {
                this.redirect('/login')
            })
            .catch(errorHandler)
    })
    this.post('/login', function (context) {
        const { email, password } = context.params

        UserModel.signInWithEmailAndPassword(email, password)
            .then(userData => {
                saveUserData(userData)
                this.redirect('/home')
            })
            .catch(errorHandler)
    })


    // Offers routes
    this.get('/create-offer', function (context) {
        extendContext(context)
            .then(function () {
                this.partial('/templates/createOffer.hbs')
            })
    })
    this.post('/create-offer', function (context) {
        const { productName, price, imageUrl, description, brand } = context.params

        DB.collection('offers').add({
            productName,
            price,
            imageUrl,
            description,
            brand,
            salesman: getUserData().uid,
            clients: []
        })
            .then(createdProduct => {
                this.redirect('/home')
            })
            .catch(errorHandler)
    })
    this.get('/details/:offerId', function (context) {

        const { offerId } = context.params

        DB.collection('offers')
            .doc(offerId)
            .get()
            .then(res => {

                const { uid } = getUserData()
                const offerData = res.data()
                const imTheSalesman = offerData.salesman === uid
                const imInTheClientsList = Boolean(offerData.clients.find(id => id === uid))

                context.offer = { ...offerData, imTheSalesman, id: offerId, imInTheClientsList }

                extendContext(context)
                    .then(function () {
                        this.partial('/templates/details.hbs')
                    })
            })

    })
    this.get('/delete/:offerId', function (context) {

        const { offerId } = context.params

        DB.collection('offers')
            .doc(offerId)
            .delete()
            .then(() => {
                this.redirect('/home')
            })
            .catch(errorHandler)
    })
    this.get('/edit/:offerId', function (context) {

        const { offerId } = context.params

        DB.collection('offers')
            .doc(offerId)
            .get()
            .then(res => {
                context.offer = { id: offerId, ...res.data() }
                extendContext(context)
                    .then(function () {
                        this.partial('/templates/editOffer.hbs')
                    })
            })

    })
    this.post('/edit/:offerId', function (context) {

        const { offerId, productName, price, description, brand, imageUrl } = context.params

        DB.collection('offers')
            .doc(offerId)
            .get()
            .then(res => {
                return DB.collection('offers')
                    .doc(offerId)
                    .set({
                        ...res.data(),
                        productName,
                        price,
                        description,
                        brand,
                        imageUrl,
                    })
            })
            .then(res => {
                this.redirect(`/details/${offerId}`)
            })
            .catch(errorHandler)
    })

    this.get('/buy/:offerId', function (context) {

        const { offerId } = context.params
        const { uid } = getUserData()

        DB.collection('offers')
            .doc(offerId)
            .get()
            .then(res => {

                const offerData = { ...res.data() }
                offerData.clients.push(uid)

                return DB.collection('offers')
                    .doc(offerId)
                    .set(offerData)
            })
            .then(() => {
                this.redirect(`/details/${offerId}`)
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
    this.localStorage.removeItem('user')
}