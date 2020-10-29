function solve() {

  let links = document.querySelectorAll('a')

  for (let i in links) {
    links[i].addEventListener('click', (el) => {

      let visits = document.querySelectorAll('p')
      visits = visits[i]

      const clicks = Number(visits.innerHTML.match(/\d+/g)) + 1
      visits.innerHTML = `visited ${clicks} times`
    })
  }
}