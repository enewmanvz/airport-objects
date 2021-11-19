const { expect } = require('@jest/globals')

const bags = require('./bags')

describe('bags class', () => {
    
    test('has a weight', () => {
        const testbags = new bags(20)
console.log('result ' +testbags.valid_weight())
        expect (testbags.valid_weight()).toBeTruthy()
    })

    test('has a weight', () => {
        const testbags = new bags(35)
console.log('result ' +testbags.valid_weight())
        expect (testbags.valid_weight()).toBeFalsy()
    })
})
