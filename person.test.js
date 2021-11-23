const { expect } = require('@jest/globals')

const Person = require('./person')

describe('person class', () => {
    
    test('is an instance of a Person', () => {
        const betty = new Person ('Alexander')
        expect(betty instanceof Person).toBeTruthy()
    })
})
