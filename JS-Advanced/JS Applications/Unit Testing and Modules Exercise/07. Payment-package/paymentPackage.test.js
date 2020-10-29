const { assert } = require('chai');
const PaymentPackage = require('./paymentPackage');
const paymentPackage = require('./paymentPackage')

describe('Payment package tests:', () => {

    let pp;

    describe('Constructor:', () => {
        it('Should work properly with 2 parameters.', () => {
            pp = new PaymentPackage('Pesho', 10)
            assert.equal('Pesho', pp.name)
            assert.equal(10, pp.value)
        })
        it('Should throw exception with incorrect name', () => {
            assert.throw(() => {
                pp = new PaymentPackage(10, 10)
            }, 'Name must be a non-empty string')
        })
        it('Should throw exception with incorrect value', () => {
            assert.throw(() => {
                pp = new PaymentPackage('Pesho', 'Gosho')
            }, 'Value must be a non-negative number')
        })
        it('Should throw exception with value lower than 0', () => {
            assert.throw(() => {
                pp = new PaymentPackage('Pesho', -5)
            }, 'Value must be a non-negative number')
        })
    })
    describe('toString:', () => {
        it('Should work propery with valid parameters', () => {
            pp = new PaymentPackage('Stamat', 10)
            assert.equal(pp.toString(), `Package: Stamat\n-Value (excl. VAT): 10\n-Value (VAT 20%): 12`)
        })
        it('Should work propery with valid parameters', () => {
            pp = new PaymentPackage('Gosho', 1000)
            assert.equal(pp.toString(), `Package: Gosho\n-Value (excl. VAT): 1000\n-Value (VAT 20%): 1200`)
        })
        it('Should work propery with valid parameters', () => {
            pp = new PaymentPackage('Karaibrahim', 2)
            assert.equal(pp.toString(), `Package: Karaibrahim\n-Value (excl. VAT): 2\n-Value (VAT 20%): 2.4`)
        })
    })
})