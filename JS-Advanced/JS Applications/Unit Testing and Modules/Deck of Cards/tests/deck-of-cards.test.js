const assert = require('chai').assert
const deck = require('../solution')

describe('Deck of cards Tests', () => {

    it('Test #1', () => {
        let result = deck(['AS', '10D', 'KH', '2C'])
        assert.equal(result, 'A\u2660 10\u2666 K\u2665 2\u2663')
    })
    it('Test #2', () => {
        let result = deck(['5S', '3D', 'QD', '1C'])
        assert.equal(result, 'Invalid card: 1C')
    })
})