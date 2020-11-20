function addEventListeners() {
    let navigationTemplate = Handlebars.compile(document.getElementById('navigation-template').innerHTML)
    let movieCardTemplate = Handlebars.compile(document.getElementById('movie-card-template').innerHTML)

    Handlebars.registerPartial('navigation-template', navigationTemplate)
    Handlebars.registerPartial('movie-card', movieCardTemplate)
    navigate(location.pathname == '/' ? 'home' : location.pathname.slice(1))
}

function navigateHandler(e) {
    e.preventDefault()

    if (e.target.tagName != 'A') {
        return
    }

    let url = new URL(e.target.href)
    navigate(url.pathname.slice(1))
}

function onLoginSubmit(e) {
    e.preventDefault()

    let formData = new FormData(document.forms['login-form'])

    let email = formData.get('email')
    let password = formData.get('password')

    authService.login(email, password)
        .then(data => {
            navigate('home')
        })
}

function onRegisterSubmit(e) {
    e.preventDefault()

    let formData = new FormData(document.forms['register-form'])

    let email = formData.get('email')
    let password = formData.get('password')
    let confirmedPassword = formData.get('repeatPassword')

    authService.register(email, password)
        .then(navigate('home'))
}

function onAddMovieSubmit(e) {
    e.preventDefault()

    let formData = new FormData(document.forms['add-movie-form'])

    let title = formData.get('title')
    let description = formData.get('description')
    let imageUrl = formData.get('imageUrl')
    let likes = 0

    movieService.add({
        title,
        description,
        imageUrl,
        likes
    }).then(res => {
        navigate('home')
    })
}

function deleteMovie(e) {
    e.preventDefault()

    let id = e.target.dataset.id

    movieService.deleteMovie(id)
        .then(res => {
            navigate('home')
        })
}

function onEditMovieSubmit(e, id) {
    e.preventDefault()

    let formData = new FormData(document.forms['edit-movie-form'])

    let title = formData.get('title')
    let description = formData.get('description')
    let imageUrl = formData.get('imageUrl')
    movieService.getOne(id)
        .then(res => {
            let likes = res.likes
            movieService.editMovie(id, {
                title,
                description,
                imageUrl,
                likes
            })
                .then(navigate(`details/${id}`))
        })

}

function likeMovie(e, id) {
    e.preventDefault()

    movieService.getOne(id)
        .then(res => {
            res.likes++
            movieService.editMovie(id, res)
        })
}

addEventListeners()