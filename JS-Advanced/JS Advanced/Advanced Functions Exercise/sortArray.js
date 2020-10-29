function solve(arr, crit){

    let sortAcs = () => (a, b) => a - b
    let sortDesc = () => (a, b) => b - a
    
    if(crit == 'asc'){
        arr = arr.sort(sortAcs())
    } else if(crit == 'desc'){
        arr = arr.sort(sortDesc())
    }
    
    return arr
}

solve([14, 7, 17, 6, 8], 'asc')
solve([14, 7, 17, 6, 8], 'desc')