function getFibonator(){

    let currentNum = 0
    numSeq = []
    
    function fib(){
        
        if(numSeq.length < 2){
            numSeq.push(1)
            return 1
        } else {
            currentNum = numSeq[numSeq.length - 1] + numSeq[numSeq.length - 2]
            numSeq.push(currentNum)
            return currentNum
        }
    }
    return fib
}


let fib = getFibonator()
console.log(fib()) // 1
console.log(fib()) // 1
console.log(fib()) // 2
console.log(fib()) // 3
console.log(fib()) // 5
console.log(fib()) // 8
console.log(fib()) // 13