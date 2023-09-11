// import Shape from './shape.js'; only works in modules, which Jest does not support 
const Shape = require('./shape.js')

class Triangle extends Shape{
    constructor(color){
        super(color);
    }
}

Triangle.prototype.render = function(){
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
}

// export default Triangle; only works in modules, which Jest does not support 
module.exports = Triangle;
