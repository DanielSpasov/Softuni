const { assert } = require('chai')
const { lookupChar } = require('./lookupChar.js')

describe('Char lookup tests:', () => {

    it('Should return undefined with Incorrect first parameter', () => {
        assert.equal(lookupChar(5, 0), undefined)
    })
    it('Should return undefined with Incorrect second parameter', () => {
        assert.equal(lookupChar('Gosho', 'Stamat'), undefined)
    })
    it('Should return Incorrect index with first parameter length', () => {
        assert.equal(lookupChar('Pesho', 5), 'Incorrect index')
    })
    it('Should return Incorrect index with parameter lower than 0', () => {
        assert.equal(lookupChar('Pesho', -1), 'Incorrect index')
    })
    it('Should return correct character', () => {
        assert.equal(lookupChar('Stamat', 2), 'a')
    })
})