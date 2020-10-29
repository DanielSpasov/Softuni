const assert = require('chai').assert
const { isOddOrEven } = require('./oddOrEven.js')

describe('isOddOrEven Tests:', () => {

    it('Should return undefined', () => {
        let result = isOddOrEven(5)
        assert.equal(result, undefined)
    })
    it('Should return undefined', () => {
        let result = isOddOrEven({})
        assert.equal(result, undefined)
    })
    it('Should return even', () => {
        let result = isOddOrEven('word')
        assert.equal(result, 'even')
    })
    it('Should return odd', () => {
        let result = isOddOrEven('words')
        assert.equal(result, 'odd')
    })
})