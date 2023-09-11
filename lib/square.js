// import Shape from './shape.js'; only works in modules, which Jest does not support 
const Shape = require('./shape.js')

class Square extends Shape{
    constructor(color){
        super(color);
    }
}

Square.prototype.render = function(){
    return `<rect width='150' height='150' x='75px' y='25px' fill='${this.color}' />`
}

// export default Square; only works in modules, which Jest does not support 
module.exports = Square;

