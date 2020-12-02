export function clearUserData() {
    localStorage.removeItem('user')
}

export function getUserData() {
    let user = localStorage.getItem('user')
    return user ? JSON.parse(user) : null
}

export function saveUserData(data) {
    const { user: { email, uid } } = data
    localStorage.setItem('user', JSON.stringify({ email, uid }))
}

export function extendContext(context) {

    const user = getUserData()
    context.isLoggedIn = Boolean(user)
    context.userEmail = user ? user.email : ''

    return context.loadPartials({
        'header': 'templates/partials/header.hbs',
        'post': 'templates/partials/post.hbs'
    })
}

export function errorHandler(error) {
    console.log(error)
}