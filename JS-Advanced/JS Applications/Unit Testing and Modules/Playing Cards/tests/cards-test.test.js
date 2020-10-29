const assert = require('chai').assert
const expect = require('chai').expect
const factory = require('../card')

describe('Playing Cards tests', () => {

    it('Test #1', () => {
        let [face, suit] = ['A', 'S']
        let Card = factory(face, suit)
        let result = new Card(face, suit)
        assert.equal(result, 'A\u2660')
    })
    it('Test #2', () => {
        let [face, suit] = ['10', 'H']
        let Card = factory(face, suit)
        let result = new Card(face, suit)
        assert.equal(result, '10\u2665')
    })
    it('Test #3', () => {
        let [face, suit] = ['2', 'C']
        let Card = factory(face, suit)
        let result = new Card(face, suit)
        assert.equal(result, '2\u2663')
    })
    it('Test #4', () => {
        let [face, suit] = ['J', 'D']
        let Card = factory(face, suit)
        let result = new Card(face, suit)
        assert.equal(result, 'J\u2666')
    })
    it('Test #5', () => {
        let [face, suit] = ['1', 'D']
        let result = factory(face, suit)
        expect(factory().throwError()).to.throw('Card is initialized with invalid face.')
    })
    it('Test #6', () => {
        let result = factory('K', 'B')
        assert.throws(factory, Error, 'Card is initialized with invalid suit.')
    })
})