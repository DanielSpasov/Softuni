function solve() {

    let allButtons = document.querySelectorAll('button')
    let expressionElement = document.getElementById('expressionOutput')
    let resultElement = document.getElementById('resultOutput')

    for (let btn of allButtons) {
        btn.addEventListener('click', () => {

            switch (btn.value) {
                case 'Clear':
                    expressionElement.innerHTML = ''
                    resultElement.innerHTML = ''
                    break
                case '=':
                    let resultArr = expressionElement.innerHTML.split(' ').filter(x => x != '')

                    if (resultArr.length < 3) {
                        resultElement.innerHTML = 'NaN'
                        break
                    } else {

                        if (resultArr[1] == '+') {
                            resultElement.innerHTML = Number(resultArr[0]) + Number(resultArr[2])
                        } else if (resultArr[1] == '-') {
                            resultElement.innerHTML = Number(resultArr[0]) - Number(resultArr[2])
                        } else if (resultArr[1] == '/') {
                            resultElement.innerHTML = Number(resultArr[0]) / Number(resultArr[2])
                        } else if (resultArr[1] == '*') {
                            resultElement.innerHTML = Number(resultArr[0]) * Number(resultArr[2])
                        }
                    }
                    break

                // Numbers
                case '0':
                    expressionElement.innerHTML += btn.value
                    break
                case '1':
                    expressionElement.innerHTML += btn.value
                    break
                case '2':
                    expressionElement.innerHTML += btn.value
                    break
                case '3':
                    expressionElement.innerHTML += btn.value
                    break
                case '4':
                    expressionElement.innerHTML += btn.value
                    break
                case '5':
                    expressionElement.innerHTML += btn.value
                    break
                case '6':
                    expressionElement.innerHTML += btn.value
                    break
                case '7':
                    expressionElement.innerHTML += btn.value
                    break
                case '8':
                    expressionElement.innerHTML += btn.value
                    break
                case '9':
                    expressionElement.innerHTML += btn.value
                    break

                // Dot
                case '.':
                    expressionElement.innerHTML += `${btn.value}`
                    break

                // Operators
                case '+':
                    expressionElement.innerHTML += ` ${btn.value} `
                    break
                case '-':
                    expressionElement.innerHTML += ` ${btn.value} `
                    break
                case '*':
                    expressionElement.innerHTML += ` ${btn.value} `
                    break
                case '/':
                    expressionElement.innerHTML += ` ${btn.value} `
                    break
            }
        })
    }
}