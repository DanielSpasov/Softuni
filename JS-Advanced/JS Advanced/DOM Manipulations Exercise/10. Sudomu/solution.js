function solve() {

    let inputs = document.querySelectorAll('input')
    let checkBtn = document.querySelectorAll('button')[0]
    let clearBtn = document.querySelectorAll('button')[1]

    let table = document.querySelector('table')
    let checkPar = document.querySelector('p')

    checkBtn.addEventListener('click', check)
    clearBtn.addEventListener('click', clear)



    function check() {

        let isFine = true
        const matrix = [
            [inputs[0].value, inputs[1].value, inputs[2].value],
            [inputs[3].value, inputs[4].value, inputs[5].value],
            [inputs[6].value, inputs[7].value, inputs[8].value]
        ]

        for (let i = 1; i < matrix.length; i++) {
            let row = matrix[i]
            let col = matrix.map(row => row[i])

            if(col.length != [...new Set(col)].length || row.length != [...new Set(row)].length){
                isFine = false
                break
            }
        }

        if (isFine) {
            checkPar.textContent = 'You solve it! Congratulations!'
            checkPar.style = 'color: green'
            table.style = 'border: 2px solid green'

        } else {
            checkPar.textContent = 'NOP! You are not done yet...'
            checkPar.style = 'color: red'
            table.style = 'border: 2px solid red'
        }
    }

    function clear() {

        checkPar.textContent = ''
        checkPar.style = ''
        table.style = ''
    }
}