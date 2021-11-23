const { expect } = require('@jest/globals')

const Bags = require('./bags')

describe('bags class', () => {
    
    test('has a weight', () => {
        const testbags = new Bags(20)
//console.log('result ' +testbags.valid_weight())
        expect (testbags.valid_weight()).toBeTruthy()
    })

    test('has a weight', () => {
        const testbags = new Bags(35)
//console.log('result ' +testbags.valid_weight())
        expect (testbags.valid_weight()).toBeFalsy()
    })
})
