function solve() {

   let button = document.getElementsByTagName('button')
   let textArea = document.getElementsByTagName('textarea')[0]

   let list = new Map()

   Array.from(button).forEach(btn => {

      btn.addEventListener('click', (el) => {

         if (el.target.className === 'add-product') { // If the add product button is clicked
            let currentElement = el.target.parentElement

            let elPrice = currentElement.nextElementSibling.innerHTML
            let elName = currentElement.previousElementSibling.children[0].innerHTML

            if (!list.has(elName)) {
               list.set(elName, 0)
            }
            list.set(elName, list.get(elName) + Number(elPrice))

            textArea.value += `Added ${elName} for ${elPrice} to the cart.\n`

         } else { // If the checkout button is clicked

            let totalPrice = Number(Array.from(list.values()).reduce((a, b) => +a + +b, 0))
            textArea.value += `You bought ${Array.from(list.keys()).join(', ')} for ${totalPrice.toFixed(2)}.`
            let buttons = Array.from(document.querySelectorAll('button'))
            buttons.forEach(button => button.disabled = true)

         }
      })
   })
}