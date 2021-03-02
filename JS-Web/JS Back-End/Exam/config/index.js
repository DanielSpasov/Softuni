const config = {
    main: {
        PORT: 5000,
        DB_URI: 'mongodb://localhost/JS-Web-exam-SalimShady',
        SALT_ROUNDS: 9,
        SECRET: 'UnguessableSecret489',
        COOKIE_NAME: 'USER_SESSION'
    }
}

module.exports = config[process.env.NODE_ENV.trim()]