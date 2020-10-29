function palinInt(input) {

    for (let i = 0; i < input.length; i++) {
        let currentNum = input[i].toString()
        let backwardsNum = ''

        for (let j = currentNum.length - 1; j >= 0; j--) {
            backwardsNum += currentNum[j]
        }

        if(backwardsNum === currentNum){
            console.log(true)
        } else {
            console.log(false)
        }
        backwardsNum = ''
    }
}