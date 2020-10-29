function subtract() {

    let num1 = Number(document.getElementById('firstNumber').value)
    let num2 = Number(document.getElementById('secondNumber').value)

    let resultDiv = document.getElementById('result').textContent = num1 - num2
}