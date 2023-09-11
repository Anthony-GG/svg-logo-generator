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

// export default Shape; only works in modules, which Jest does not support 
module.exports = Shape;