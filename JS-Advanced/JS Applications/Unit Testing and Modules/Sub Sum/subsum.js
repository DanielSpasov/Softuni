function subSum(arr, startIndex, endIndex) {

    if(!Array.isArray(arr)){
        return NaN
    }
    if(startIndex < 0){
        startIndex = 0
    }
    if(endIndex >= arr.length){
        endIndex = arr.length - 1
    }

    let result = 0
    for(let i = startIndex; i <= endIndex; i++){
        result += Number(arr[i])
    }
    if(isNaN(result)){
        return NaN
    }
    return result.toFixed(1)
}

module.exports = subSum