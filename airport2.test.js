const Airport = require('./airport2')

describe('Airport object', () => {
	const testAirport = new Airport("DFW")
	const testAirport2 = new Airport("CDG")
    const testAirport3 = new Airport("IAH")

	test('airport has a name', () => {
		expect(testAirport.name).toBe("DFW")
        expect(testAirport2.name).toBe('CDG')
        expect(testAirport3.name).toBe('IAH')

	})
	
	//(Used with getInfo(callback) in airport.js)
	// test('airports have a city, state & country', (done) => {
	// 	//run getInfo method
	// 	testAirport.getInfo((err, info) => {
	// 	//log this airport info to console
	// 	console.log(info)
	// 	//expect error to be null
	// 	expect(err).toBeNull()
	// 	//expect the airport country to be FR
	// 	expect(info.country).toEqual('US')
    //     expect(info.city).toEqual('Dallas-Fort Worth')
    //     expect(info.state).toEqual('Texas')
    //     console.log(`${info.city} ${info.state} ${info.country}`)
	// 	//end asynchrounous test
	// 	done()
	// })


	//(Used with getInfo() Promise in airport2.js)
    test('airports have a city', () => {
        const DFW = new Airport('DFW')
        return DFW.getInfo()
            .then(info => {
                expect(info.city).toEqual('Dallas-Fort Worth')
				console.log(`${info.city} , ${info.state} ${info.country}`)
            })
            .catch(err => {
                expect(err).toBeNull()
            })
    }) 

	//(Used with getInfo()Promise in airport2.js)
	test('can get information like the city from an airport instance', async () => {
		const DFW = new Airport('DFW')
		const airport = await DFW.getInfo()
		expect(airport.city).toEqual('Dallas-Fort Worth')
	})

    
})