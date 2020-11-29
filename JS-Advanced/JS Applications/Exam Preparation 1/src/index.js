const userModule = firebase.auth()
const database = firebase.firestore()

// Router
const app = Sammy('#root', function () {

    this.use('Handlebars', 'hbs')

    // Home Route
    this.get('/home', function (context) {

        database.collection('articles')
            .get()
            .then(res => {

                const result = {
                    js: [],
                    python: [],
                    csharp: [],
                    java: [],
                }

                const categoryMap = {
                    'JavaScript': 'js',
                    'Python': 'python',
                    'C#': 'csharp',
                    'Java': 'java',
                }

                const articlesData = res.docs.map(article => {
                    return {
                        id: article.id,
                        ...article.data()
                    }
                })

                for(let lang of articlesData){
                    result[categoryMap[lang.category]].push(lang)
                }

                context.articles = result

                extendContext(context)
                    .then(function () {
                        this.partial('/templates/homePage.hbs')
                    })
            })
            .catch(errorHandler)
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


    // Article Routes
    this.get('/create-article', function (context) {
        extendContext(context)
            .then(function () {
                this.partial('templates/createArticle.hbs')
            })
    })
    this.post('/create-article', function (context) {

        const { title, category, content } = context.params

        database.collection('articles')
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

    this.get('/details/:articleId', function (context) {

        const { articleId } = context.params

        database.collection('articles')
            .doc(articleId)
            .get()
            .then(res => {

                const { uid } = getUserData()
                const articleData = res.data()
                const imTheCreator = articleData.creator === uid

                context.article = { ...articleData, imTheCreator ,id: articleId }

                extendContext(context)
                    .then(function () {
                        this.partial('/templates/details.hbs')
                    })
            })
    })

    this.get('/delete/:articleId', function (context) {

        const { articleId } = context.params

        database.collection('articles')
            .doc(articleId)
            .delete()
            .then(() => {
                this.redirect('/home')
            })
            .catch(errorHandler)
    })

    this.get('/edit/:articleId', function (context) {

        const { articleId } = context.params

        database.collection('articles')
            .doc(articleId)
            .get()
            .then(res => {

                context.article = { id: articleId, ...res.data() }

                extendContext(context)
                    .then(function () {
                        this.partial('/templates/editArticle.hbs')
                    })
            })
    })
    this.post('/edit/:articleId', function (context) {

        const { articleId ,title, category, content } = context.params

        database.collection('articles')
            .doc(articleId)
            .get()
            .then(res => {

                return database.collection('articles')
                    .doc(articleId)
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

});

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
