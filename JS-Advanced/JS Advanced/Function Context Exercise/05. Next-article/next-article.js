function getArticleGenerator(articles) {

    let contentDiv = document.getElementById('content')

    function showNext(){
        
        if(articles.length > 0){
            let newDiv = document.createElement('article')
            newDiv.textContent = articles.shift()

            contentDiv.appendChild(newDiv)
        }
    }
    return showNext
}
