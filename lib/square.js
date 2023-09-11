// imports Shape from './shape.js'
const Shape = require('./shape.js')

class Square extends Shape{
    constructor(color){
        super(color);
    }
}

Square.prototype.render = function(){
    return `<rect width='150' height='150' x='75px' y='25px' fill='${this.color}' />`
}

//Exports module to be used in index.js
module.exports = Square;

