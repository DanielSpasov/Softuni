const apiKey = 'AIzaSyDzqcStqE1bJPD_lcEhH9lzDKt4NUqtkus'
const databaseUrl = 'https://spa-movies.firebaseio.com'

const request = async (url, method, body) => {
    let options = {
        method,
    }

    if (body) {
        Object.assign(options, {
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(body)
        })
    }

    let response = await fetch(url, options)
    let data = await response.json()
    return data
}

const authService = {

    async register(email, password) {
        const baseUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='
        let response = await fetch(`${baseUrl}${apiKey}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password,
            })
        })

        let data = await response.json()
        localStorage.setItem('auth', JSON.stringify(data))
        return data
    },

    async login(email, password) {
        const baseUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='
        let response = await fetch(`${baseUrl}${apiKey}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password,
            })
        })

        let data = await response.json()
        localStorage.setItem('auth', JSON.stringify(data))
        return data
    },

    logout() {
        localStorage.setItem('auth', '')
    },

    getData() {
        try {
            let data = JSON.parse(localStorage.getItem('auth'))
            return {
                isAuthenticated: Boolean(data.idToken),
                email: data.email
            }
        } catch {
            return {
                isAuthenticated: false,
                email: ''
            }
        }
    },
}

const movieService = {
    async add(movieData) {
        let res = await request(`${databaseUrl}/movies.json`, 'POST', movieData)
        return res
    },

    async getAll() {
        let res = await request(`${databaseUrl}/movies.json`, 'GET')
        return Object.keys(res).map(key => ({ key, ...res[key] }))
    },

    async getOne(id) {
        let res = await request(`${databaseUrl}/movies/${id}.json`, 'GET')
        return res
    },

    async deleteMovie(id) {
        let res = await request(`${databaseUrl}/movies/${id}.json`, 'DELETE')
        return res
    },

    async editMovie(id, movie) {
        let res = await request(`${databaseUrl}/movies/${id}.json`, 'PUT', movie)
        return res
    },
}