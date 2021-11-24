const { expect } = require('@jest/globals')

const Airport = require('./airport')

describe('airport class', () => {
    
    test('is an instance of a Airport', () => {
        let a1 = new Airport("Boston Logan", "BOS")
        let a2 = new Airport("Dallas Fort Worth","DFW")

        expect(a1 instanceof Airport).toBeTruthy()
        expect(a2 instanceof Airport).toBeTruthy()
    })
})