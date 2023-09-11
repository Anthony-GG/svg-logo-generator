// imports Shape from './shape.js'
const Shape = require('./shape.js')

class Triangle extends Shape{
    constructor(color){
        super(color);
    }
}

Triangle.prototype.render = function(){
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
}

//Exports module to be used in index.js
module.exports = Triangle;
