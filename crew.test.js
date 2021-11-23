const { expect } = require('@jest/globals')

const CrewMember = require('./crew')

describe('crewmember class', () => {
    
    test('is an instance of a CrewMember', () => {
        const betty = new CrewMember('John', 'Pilot', 'A2198')
        expect(betty instanceof CrewMember).toBeTruthy()
    })
})
