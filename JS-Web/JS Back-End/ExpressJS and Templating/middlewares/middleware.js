function middleware(req, res, next) {

    console.log('Hello from middleware')

    console.log(req.params)

    if(req.params.id){
        return next()
    }

    res.status(403).send('You need ID to continue')
}

module.exports = middleware