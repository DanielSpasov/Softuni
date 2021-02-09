const config = {
    development: {
        PORT: 5000,
        SALT_ROUNDS: 9,
        SECRET: 'hc14hbtvhcf15',
        COOKIE_NAME: 'USER_SESSION',
    },
    production: {
        PORT: 80,
        SALT_ROUNDS: 9,
        SECRET: 'hc14hbtvhcf15',
        COOKIE_NAME: 'USER_SESSION',
    }
}

module.exports = config[process.env.NODE_ENV.trim()]