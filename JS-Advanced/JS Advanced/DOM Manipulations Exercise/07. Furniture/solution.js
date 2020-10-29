function solve() {

    let inputField = document.querySelectorAll('textarea')[0]
    let outputField = document.querySelectorAll('textarea')[1]
    let generateButton = document.querySelectorAll('button')[0]
    let buyButton = document.querySelectorAll('button')[1]
    let tbody = document.querySelector('tbody')

    generateButton.addEventListener('click', generate)
    buyButton.addEventListener('click', buy)



    function generate() {

        let inputText = JSON.parse(inputField.value)

        for(let obj of inputText){

            let newItem = document.createElement('tr')

            let imgTd = document.createElement('td')
            let img = document.createElement(`img`)
            img.src = obj.img
            imgTd.appendChild(img)
            newItem.appendChild(imgTd)

            let nameTd = document.createElement('td')
            let name = document.createElement('p')
            name.textContent = obj.name
            nameTd.appendChild(name)
            newItem.appendChild(nameTd)

            let priceTd = document.createElement('td')
            let price = document.createElement('p')
            price.textContent = obj.price
            priceTd.appendChild(price)
            newItem.appendChild(priceTd)

            let decorTd = document.createElement('td')
            let decor = document.createElement('p')
            decor.textContent = obj.decFactor
            decorTd.appendChild(decor)
            newItem.appendChild(decorTd)

            let markTd = document.createElement('td')
            let mark = document.createElement('input')
            mark.type = 'checkbox'
            markTd.appendChild(mark)
            newItem.appendChild(markTd)

            tbody.appendChild(newItem)
        }
    }

    function buy() {

        let items = tbody.children

        let boughtFurniture = []
        let totalPrice = 0

        let decorFactorSum = 0
        let numOfProducts = 0

        Array.from(items).forEach(item => {

            let checkbox = item.children[4].children[0]

            if(checkbox.checked){
                boughtFurniture.push(item.children[1].children[0].textContent)
                totalPrice += Number(item.children[2].children[0].textContent)
                decorFactorSum += Number(item.children[3].children[0].innerHTML)
                numOfProducts++
            }

        })

        outputField.value += `Bought furniture: ${boughtFurniture.join(', ')}\n`
        outputField.value += `Total price: ${totalPrice.toFixed(2)}\n`
        outputField.value += `Average decoration factor: ${decorFactorSum / numOfProducts}`
    }
}