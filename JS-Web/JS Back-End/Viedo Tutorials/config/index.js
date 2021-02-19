const config = {
    development: {
        PORT: 5000,
        DB_URI: 'mongodb://localhost/video-tutorials',
        SALT_ROUNDS: 11,
        SECRET: 'kekw',
        COOKIE_NAME: 'token',
    },
    production: {
        PORT: 80,
        DB_URI: 'mongodb://localhost/video-tutorials',
        SALT_ROUNDS: 11,
        SECRET: 'CASFGATJTUU154',
        COOKIE_NAME: 'USER_SESSION',
    }
}


module.exports = config[process.env.NODE_ENV.trim()]