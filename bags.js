class Bag {
    constructor(weight){
        this.weight = weight
        
        this.valid_weight = function () {
            if (this.weight > 0 && this.weight < 25){
                return true
            }
            else {
                return false
            }
        }
    }
}

module.exports = Bag
