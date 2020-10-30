function loadRepos() {

	let user = document.getElementById('username').value
	const url = `https://api.github.com/users/${user}/repos`
	const httpRequest = new XMLHttpRequest()

	httpRequest.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {

			let ul = document.getElementById('repos')
			let h1 = document.createElement('h1')
			ul.appendChild(h1)

			JSON.parse(this.responseText).forEach(repo => {
				let li = document.createElement('li')
				let a = document.createElement('a')
				
				a.href = repo.html_url
				a.textContent = repo.full_name
				h1.textContent = repo.owner.login

				li.appendChild(a)
				ul.appendChild(li)
			})
		}
	}

	httpRequest.open('GET', url)
	httpRequest.send()
}