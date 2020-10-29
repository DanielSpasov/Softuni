function solve() {

   let tr = document.getElementsByTagName('tr')
   let lastClicked;

   [...tr].slice(1).forEach(row => {
      row.addEventListener('click', (e) => {

         let parent = e.target.parentNode.style

         if (parent.backgroundColor == '' || parent.backgroundColor == undefined) {
            parent.backgroundColor = '#413f5e'
            if(lastClicked){
               lastClicked.backgroundColor = ''
            }
         } else {
            parent.backgroundColor = ''
         }

         lastClicked = parent
      })
   })
}
