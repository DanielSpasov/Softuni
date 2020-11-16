const app = Sammy('#main', function () {

    this.use('Handlebars', 'hbs')

    this.get('/home', function () {
        this.loadPartials({
            'header': './templates/common/header.hbs',
            'footer': './templates/common/footer.hbs'
        }).then(function () {
            this.partial('../tempplates/home/home.hbs')
        })
    })
})

(() => {
    app.run('/home')
})()