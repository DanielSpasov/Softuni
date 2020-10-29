const assert = require('chai').assert
const subSum = require('../subsum')

describe('Sum Sum tests', () => {

    it('Test #1', () => {
        let result = subSum([10, 20, 30, 40, 50, 60], 3, 300)
        assert.equal(result, 150)
    })
    it('Test #2', () => {
        let result = subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1)
        assert.equal(result, 3.3)
    })
    it('Test #3', () => {
        let result = subSum([10, 'twenty', 30, 40], 0, 2)
        assert.isNaN(result)
    })
    it('Test #4', () => {
        let result = subSum([], 1, 2)
        assert.equal(result, 0)
    })
    it('Test #5', () => {
        let result = subSum('text', 0, 2)
        assert.isNaN(result)
    })
})