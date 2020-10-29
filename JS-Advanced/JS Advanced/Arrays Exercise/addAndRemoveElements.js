function solve(input) {

    let num = 0
    let seq = []
    for(command of input){
        num++
        if(command === 'add'){
            seq.push(num)
        }
        if(command === 'remove'){
            seq.pop()
        }
    }

    if(!seq[0]){
        console.log('Empty')
    }
    for(line of seq){
        console.log(line)
    }
}

solve(['add',
    'add',
    'add',
    'add'])

solve(['add',
    'add',
    'remove',
    'add',
    'add'])

solve(['remove',
    'remove',
    'remove'])