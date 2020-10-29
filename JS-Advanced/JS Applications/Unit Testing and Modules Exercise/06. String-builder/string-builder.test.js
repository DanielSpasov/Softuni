const { assert } = require('chai')
const StringBuilder = require('./string-builder')

describe('String builder tests:', () => {

    let sb;
    beforeEach(() => {
        sb = new StringBuilder
    })

    describe('Constructor:', () => {
        it('Should work properly with argument.', () => {
            sb = new StringBuilder('Pesho')
            assert.equal('Pesho', sb.toString())
        })
        it('Should work properly without argument.', () => {
            assert.equal('', sb.toString())
        })
    })
    describe('Append command:', () => {
        it('Should work properly with argument.', () => {
            sb = new StringBuilder('Pesho')
            sb.append(', Gosho')
            assert.equal('Pesho, Gosho', sb.toString())
        })
        it('Should work properly without argument.', () => {
            sb = new StringBuilder('Pesho')
            sb.append('')
            assert.equal('Pesho', sb.toString())
        })
    })
    describe('Premend command:', () => {
        it('Should work properly with argument.', () => {
            sb = new StringBuilder('Pesho')
            sb.prepend('Hello, ')
            assert.equal('Hello, Pesho', sb.toString())
        })
        it('Should work properly without argument.', () => {
            sb = new StringBuilder('Pesho')
            sb.prepend('')
            assert.equal('Pesho', sb.toString())
        })
    })
    describe('Insert At command:', () => {
        it('Should work properly with argument.', () => {
            sb = new StringBuilder('Pesho')
            sb.insertAt('Hello, ', 0)
            assert.equal('Hello, Pesho', sb.toString())
        })
        it('Should work properly without argument.', () => {
            sb = new StringBuilder('Pesho')
            sb.insertAt('')
            assert.equal('Pesho', sb.toString())
        })
        it('Should work properly when inserting a number bigger than the string\'s length.', () => {
            sb = new StringBuilder('Pesho')
            sb.insertAt(', Hello!', 10)
            assert.equal('Pesho, Hello!', sb.toString())
        })
    })
    describe('Remove command:', () => {
        it('Should work properly with argument.', () => {
            sb = new StringBuilder('Pesho')
            sb.remove(2, 3)
            assert.equal('Pe', sb.toString())
        })
        it('Should work properly without argument.', () => {
            sb = new StringBuilder('Pesho')
            sb.remove()
            assert.equal('Pesho', sb.toString())
        })
        it('Should work properly with big second argument.', () => {
            sb = new StringBuilder('Pesho')
            sb.remove(3, 300)
            assert.equal('Pes', sb.toString())
        })
        it('Should work properly when the first number is negative.', () => {
            sb = new StringBuilder('Pesho')
            sb.remove(-5, 2)
            assert.equal('sho', sb.toString())
        })
    })
})