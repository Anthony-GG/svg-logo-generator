class Shape{
    constructor(){
        this.color = "";
    }
}

Shape.prototype.setColor = function(newColor){
    this.color = newColor;
}
Shape.prototype.render = function(){
    return null;
}

var shape = new Shape();
shape.render();

//Exports module to be used in other shape objects
module.exports = Shape;