class airplane {
    constructor(capacity){
        this.capacity = capacity
        
        this.valid_capacity = function () {
            if (this.capacity > 0 && this.capacity < 163){
                return true
            }
            else {
                return false
            }
        }
    }
}

module.exports = airplane;
