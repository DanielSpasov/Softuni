function create(words) {

   let mainDiv = document.getElementById('content')

   words.forEach(word => {

      let newDiv = document.createElement('div')
      let newPar = document.createElement('p')
      newPar.innerHTML = word.toString()
      newPar.style = 'display: none'

      newDiv.addEventListener('click', () => {
         newPar.style = 'display: block'
      })

      newDiv.appendChild(newPar)
      mainDiv.appendChild(newDiv)
   })
}