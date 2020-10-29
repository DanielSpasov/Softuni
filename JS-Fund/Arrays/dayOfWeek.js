function solve(num){

    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    if(num <= 7 && num >= 1){
        console.log(days[num - 1])
    } else {
        console.log('Invalid day!')
    }
}

solve(1)
solve(2)
solve(3)
solve(4)
solve(5)
solve(6)
solve(7)
solve(8)