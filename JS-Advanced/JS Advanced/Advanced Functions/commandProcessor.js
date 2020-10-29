function solution() {
    
    let result = ''

    let commands = {
        append: str => result = result + str,
        removeStart: num => result = result.slice(Number(num)),
        removeEnd: num => result = result.substr(0, result.length - Number(num)),
        print: () => console.log(result)
    }

    return commands
}

let firstZeroTest = solution()

firstZeroTest.append('hello')
firstZeroTest.append('again')
firstZeroTest.removeStart(3)
firstZeroTest.removeEnd(4)

let secondZeroTest = solution()

secondZeroTest.append('123')
secondZeroTest.append('45')
secondZeroTest.removeStart(2)
secondZeroTest.removeEnd(1)
secondZeroTest.print()