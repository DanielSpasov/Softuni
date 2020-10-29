const { assert } = require('chai')
const { addFive, subtractTen, sum } = require('./mathEnforcer')

describe('Math Enforcer tests:', () => {

    describe('Add Five function tests:', () => {
        it('Should return undefined with Incorrect type', () => {
            assert.equal(undefined, addFive('Not a number'))
        })
        it('Should return correct number', () => {
            assert.equal(10, addFive(5))
        })
    })

    describe('Substract Ten function tests:', () => {
        it('Should return undefined with Incorrect type', () => {
            assert.equal(undefined, subtractTen('Not a number'))
        })
        it('Should return correct value', () => {
            assert.equal(0, subtractTen(10))
        })
    })

    describe('Sum function tests:', () => {
        it('Should return undefined with Incorrect first parameter', () => {
            assert.equal(undefined, sum('Not a number', 5))
        })
        it('Should return undefined with Incorrect second parameter', () => {
            assert.equal(undefined, sum(5, 'Not a number'))
        })
        it('Should return correct value', () => {
            assert.equal(11, sum(5, 6))
        })
    })
})