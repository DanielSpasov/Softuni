class Hex {

    constructor(value) {
        this.value = value
    }

    valueOf() {
        return this.value
    }
    toString() {
        this.value = `0x${(this.value.toString(16)).toUpperCase()}`
        return this.value
    }
    plus(num) {
        let plusResult = this.value + num
        return new Hex(plusResult)
    }
    minus(num) {
        let minResult = this.value - num
        return new Hex(minResult)
    }
    parse(string) {
        return parseInt(string, 16)
    }
}


let FF = new Hex(255)
console.log(FF.toString())
FF.valueOf() + 1 == 256
let a = new Hex(10)
let b = new Hex(5)
console.log(a.plus(b).toString())
console.log(a.plus(b).toString() === '0xF')