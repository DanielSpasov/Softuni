function perfectNum(num) {

    let isPerfect = false
    let divisors = 0

    for (let i = 0; i < num; i++) {
        if(num % i == 0){
            divisors += i
        }
    }

    if(divisors == num){
        isPerfect = true
    }

    if (isPerfect) {
        console.log('We have a perfect number!')
    } else {
        console.log("It's not so perfect.")
    }
}