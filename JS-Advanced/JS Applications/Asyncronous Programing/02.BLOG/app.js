function attachEvents() {

    const url = `https://blog-apps-c12bf.firebaseio.com/`
    let loadPostBtn = document.getElementById('btnLoadPosts')
    let posts = document.getElementById('posts')
    let postTitle = document.getElementById('post-title')
    let postBody = document.getElementById('post-body')
    let postComments = document.getElementById('post-comments')

    loadPostBtn.addEventListener('click', () => {
        fetch(`${url}posts.json`)
            .then(res => res.json())
            .then(data => {
                let options = Object.keys(data).map(key => `<option value="${key}">${data[key].title}</option>`)
                posts.innerHTML = options
            })
    })

    posts.addEventListener('change', (e) => {
        fetch(`${url}posts/${e.currentTarget.value}.json`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                postTitle.innerHTML = data.title
                postBody.innerHTML = data.body
                if(data.hasOwnProperty('comments')){
                    data.comments.forEach(com => {
                        let li = `<li id="${com.id}">${com.text}</li>`
                        postComments.innerHTML += li
                    })
                }
            })
    })

}

attachEvents()