function solve(input) {

    let obj = getWantedWords(input)

    for(let word of input.slice(1)){
        if(Object.keys(obj).includes(word)){
            obj[word] += 1
        }
    }

    for(let key of Object.keys(obj).sort((a,b) => obj[b] - obj[a])) {
        console.log(`${key} - ${obj[key]}`)
    }

    function getWantedWords(arr){
        let obj = {}
        arr[0].split(' ').forEach((word) => {
            obj[word] = 0
        })

        return obj
    }
}

solve([
    'this sentence', 'In',
    'this', 'sentence',
    'you', 'have',
    'to', 'count',
    'the', 'occurances',
    'of', 'the',
    'words', 'this',
    'and', 'sentence',
    'because', 'this',
    'is', 'your',
    'task'
])