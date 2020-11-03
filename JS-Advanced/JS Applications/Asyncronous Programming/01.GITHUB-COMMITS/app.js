function loadCommits() {

    let username = document.getElementById('username').value
    let repo = document.getElementById('repo').value
    let commitElement = document.getElementById('commits')

    const url = `https://api.github.com/repos/${username}/${repo}/commits`

    fetch(url)
        .then(res => res.json())
        .then(data => {
            let commits = data.map(x => `<li>${x.commit.author.name}: ${x.commit.message}</li>`).join('')
            commitElement.innerHTML = commits
        })
        .catch(err => {
            commitElement.innerHTML = `<li>${err.status} (${err.statusText})</li>`
        })
}