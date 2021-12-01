const fs = require('fs')
//const { readFile } = require('fs/promises')
const path = require('path')
class Airport {
	constructor(name) {
		this.name = name
		this.planes = []
	}

	addPlane(plane) {
		this.planes.push(plane)
	}

    // getInfo(callback) {
    //     //store airport code as a local constant
    //     const airportCode = this.name
    //     //store file path of json data file as a local constant
    //     const pathtoData = path.join(__dirname, 'airportsData.json')
    //     //read the json file
    //     fs.readFile(pathtoData, (err, data) =>{
    //         //return all airports as json object
    //         const airports = JSON.parse(data)
    //         //return 1 airport whose code matches this airport code
    //         const airport = airports.find(airport => airport.iata === airportCode)
    //         callback(err,airport)
    //     })
    // }

     getInfo() {
         return new Promise((resolve, reject) => {
             const pathToFile = path.join(__dirname, 'airportsData.json')

             const airportName = this.name
             fs.readFile('./airportsData.json', (err, data) => {
                 if (err) return reject(err)
                 const airports = JSON.parse(String(data))
                 const [airport] = Object.keys(airports)
                     .filter(airportCode => airports[airportCode].iata === airportName)
                     .map(airportCode => airports[airportCode])
                
                 console.log(airport)
                 resolve(airport)
             })
         })
     }

    //note: const { readFile } = require('fs/promises') must be added to line 1  
    //        before using async/await below.

    //  async getInfo(){
    //      const airportName=this.name
    //      const pathToFile = path.join(__dirname, 'airportsData.json')
    //      try{  
    //          const data = await readFile(pathToFile)
    //            const airports= JSON.parse(data) 
    //              const airport=airports.find(airport=> airport.iata===airportName)
    //              return airport
    //      }
    //      catch(err){
    //             console.log(err)
              
              
    // }
   
    
}

module.exports = Airport