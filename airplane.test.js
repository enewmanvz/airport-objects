const { expect } = require('@jest/globals')

const airplane = require('./airplane')

describe('airplane class', () => {
    
    test('has a capacity', () => {
        const testairplane = new airplane(162)
console.log('result ' +testairplane.valid_capacity())
console.log('recommended airplane is Boeing 737')
expect (testairplane.valid_capacity()).toBeTruthy()
    })

    test('has a capacity', () => {
        const testairplane = new airplane(400)
console.log('result ' +testairplane.valid_capacity())
console.log('recommended airplane is Boeing 747')
        expect (testairplane.valid_capacity()).toBeFalsy()
    })
})
