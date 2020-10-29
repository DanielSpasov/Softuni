function addAndSub(numOne, numTwo, numThree) {

    let result = 0

    function sum(one, two){
        result = one + two
    }
    function sub(one, two){
        result = one - two
    }

    sum(numOne, numTwo)
    sub(result, numThree)
    console.log(result)
}