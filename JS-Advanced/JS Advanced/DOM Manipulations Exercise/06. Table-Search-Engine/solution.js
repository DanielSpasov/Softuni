function solve() {

   let tbody = document.querySelector('tbody')
   let searchBtn = document.getElementById('searchBtn')

   searchBtn.addEventListener('click', search)



   function search() {

      let searchField = document.getElementById('searchField')
      let keyword = searchField.value

      let accounts = tbody.children
      Array.from(accounts).forEach(acc => {

         let accInfo = acc.children
         for (let i = 0; i < 3; i++) {

            if(keyword === ''){
               break
            }

            if(accInfo[i].textContent.includes(keyword)){
               acc.classList.add('select')
            }
         }
      })

      searchField.value = ''
   }
}