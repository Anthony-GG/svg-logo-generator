import Shape from './shape.js';

class Circle extends Shape{
    constructor(color){
        super(color);
    }
}

Circle.prototype.render = function(){
    return `<circle cx='150px' cy='100px' r='75' fill="${this.color}" />`
}

var firstShape = new Circle()
firstShape.setColor("blue");
console.log(firstShape.render());

