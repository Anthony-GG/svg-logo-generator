class Shape{
    constructor(){
        this.color = "";
    }
}

Shape.prototype.setColor = function(newColor){
    this.color = newColor;
}
Shape.prototype.render = function(){
    console.log("A shape has not been chosen! Please create an object using the square, circle or triangle js files.")
}

var shape = new Shape();
shape.render();

export default Shape;