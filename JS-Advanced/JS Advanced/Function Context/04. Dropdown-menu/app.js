function solve() {

    let mainBtn = document.getElementById('dropdown')
    mainBtn.addEventListener('click', () => {

        let menu = document.getElementById('dropdown-ul')
        let testBox = document.getElementById('box')
        
        if(menu.style.display != 'block'){
            menu.style.display = 'block'
    
            Array.from(menu.children).forEach(el => {
                el.addEventListener('click', () => {
                    testBox.style.backgroundColor = el.textContent
                    testBox.style.color = 'black'
                })
            })

        } else if (menu.style.display == 'block'){
            menu.style.display = 'none'
            testBox.style.backgroundColor = 'black'
            testBox.style.color = 'white'
        }
    })
}