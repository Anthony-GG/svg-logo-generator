import Shape from './shape.js';

class Square extends Shape{
    constructor(color){
        super(color);
    }
}

Square.prototype.render = function(){
    return `<rect width='150' height='150' x='75px' y='25px' fill="${this.color}" />`
}

export default Square;

