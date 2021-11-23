const Person = require('./person')

class CrewMember extends Person {
    constructor(name,title, employeeID){
        super(name)
        this.title = title
        this.employeeID = employeeID
   
    }
}

module.exports = CrewMember