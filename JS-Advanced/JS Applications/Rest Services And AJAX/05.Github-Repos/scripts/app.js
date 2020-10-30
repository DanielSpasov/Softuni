function loadRepos() {

	let user = document.getElementById('username').value
	const url = `https://api.github.com/users/${user}/repos`
	const httpRequest = new XMLHttpRequest()

	httpRequest.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			console.log(JSON.parse(this.responseText)[0])
			JSON.parse(this.responseText).forEach(repo => {
				let li = document.createElement('li')
				let a = document.createElement('a')
				a.href = `https://github.com/${user}/${repo.name}`
				a.textContent = repo.full_name
				li.appendChild(a)
				document.getElementById('repos').appendChild(li)
			})
		}
	}

	httpRequest.open('GET', url)
	httpRequest.send()
}