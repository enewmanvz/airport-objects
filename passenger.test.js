const { expect } = require('@jest/globals')

const Passenger = require('./passenger')

describe('passenger class', () => {
    
    test('is an instance of a Passenger', () => {
        const betty = new Passenger('Erica', 'A190289', '1A')
        expect(betty instanceof Passenger).toBeTruthy()
    })
})
