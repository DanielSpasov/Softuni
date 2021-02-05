const config = {
    development: {
        PORT: 5000,
        SALT_ROUNDS: 10,
        SECRET: 'navuhodonosor',
    },
    production: {
        PORT: 80,
        SALT_ROUNDS: 10,
        SECRET: 'navuhodonosor',
    }
}

module.exports = config[process.env.NODE_ENV.trim()]