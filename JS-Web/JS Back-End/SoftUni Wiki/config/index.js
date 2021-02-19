const config = {
    development: {
        PORT: 5000,
        DB_URI: 'mongodb://localhost/softuni-wiki',
        SALT_ROUNDS: 9,
        SECRET: 'NODDERS',
        COOKIE_NAME: 'token'
    },
    production: {
        PORT: 80,
        DB_URI: 'mongodb://localhost/softuni-wiki',
        SALT_ROUNDS: 9,
        SECRET: 'NODDERS',
        COOKIE_NAME: 'USER_SESSION'
    }
}

module.exports = config[process.env.NODE_ENV.trim()]